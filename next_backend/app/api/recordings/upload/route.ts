import { config } from "@/lib/config";
import { safeFilePart } from "@/lib/ids";
import { fail, ok, options } from "@/lib/responses";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { recordingMetaSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  if (!form) {
    return fail("Expected multipart/form-data", 400);
  }

  const file = form.get("audio");
  const metadataValue = form.get("metadata");

  if (!(file instanceof File)) {
    return fail("Missing audio file", 400);
  }
  if (typeof metadataValue !== "string") {
    return fail("Missing metadata JSON", 400);
  }

  if (file.size <= 0) {
    return fail("Audio file is empty", 400);
  }
  if (file.size > config.maxAudioBytes) {
    return fail(`Audio file exceeds max size ${config.maxAudioBytes} bytes`, 413);
  }
  if (!config.allowedAudioMimeTypes.has(file.type)) {
    return fail(`Unsupported audio mime type: ${file.type || "unknown"}`, 415);
  }

  let metadataJson: unknown;
  try {
    metadataJson = JSON.parse(metadataValue);
  } catch {
    return fail("Metadata must be valid JSON", 400);
  }
  const parsed = recordingMetaSchema.safeParse(metadataJson);
  if (!parsed.success) {
    return fail("Invalid recording metadata", 400, parsed.error.flatten());
  }

  const meta = parsed.data;
  const ext = extensionFromMime(file.type);
  const filename = [
    safeFilePart(meta.participant_id),
    safeFilePart(meta.emotion),
    safeFilePart(meta.sentence_id),
    String(meta.take)
  ].join("_");
  const storagePath = [
    meta.participant_id,
    meta.condition,
    `${filename}.${ext}`
  ].join("/");

  const arrayBuffer = await file.arrayBuffer();
  const { error: uploadError } = await supabaseAdmin.storage
    .from(config.recordingsBucket)
    .upload(storagePath, Buffer.from(arrayBuffer), {
      contentType: file.type,
      upsert: false
    });

  if (uploadError) {
    return fail("Failed to upload audio", 500, uploadError.message);
  }

  const { data, error: insertError } = await supabaseAdmin
    .from("recordings")
    .insert({
      session_id: meta.session_id,
      participant_id: meta.participant_id,
      emotion: meta.emotion,
      part: meta.part,
      sentence_id: meta.sentence_id,
      sentence_text: meta.sentence_text,
      condition: meta.condition,
      take: meta.take,
      duration_sec: meta.duration_sec,
      retakes: meta.retakes,
      recorded_at_utc: meta.recorded_at_utc || new Date().toISOString(),
      storage_bucket: config.recordingsBucket,
      storage_path: storagePath,
      mime_type: file.type,
      file_size_bytes: file.size
    })
    .select("id, storage_path")
    .single();

  if (insertError) {
    return fail("Audio uploaded but metadata insert failed", 500, insertError.message);
  }

  return ok(
    {
      recording_id: data.id,
      storage_bucket: config.recordingsBucket,
      storage_path: data.storage_path
    },
    201
  );
}

export async function OPTIONS() {
  return options();
}

function extensionFromMime(mimeType: string) {
  if (mimeType.includes("mp4")) return "mp4";
  if (mimeType.includes("ogg")) return "ogg";
  if (mimeType.includes("wav") || mimeType.includes("wave")) return "wav";
  return "webm";
}
