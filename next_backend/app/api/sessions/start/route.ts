import { createParticipantId, createSessionId } from "@/lib/ids";
import { fail, ok } from "@/lib/responses";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { speakerSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = speakerSchema.safeParse(body);

  if (!parsed.success) {
    return fail("Invalid speaker metadata", 400, parsed.error.flatten());
  }
  if (!parsed.data.consent_research) {
    return fail("Consent is required", 400);
  }

  const participantId = createParticipantId();
  const sessionId = createSessionId();

  const { error: speakerError } = await supabaseAdmin.from("speakers").insert({
    participant_id: participantId,
    participant_id_source: "server_generated",
    alias: parsed.data.alias,
    gender: parsed.data.gender,
    age_range: parsed.data.age_range,
    english_level: parsed.data.english_level,
    consent_research: parsed.data.consent_research,
    consent_commercial: parsed.data.consent_commercial,
    dataset_role: parsed.data.dataset_role
  });

  if (speakerError) {
    return fail("Failed to create speaker", 500, speakerError.message);
  }

  const { error: sessionError } = await supabaseAdmin.from("recording_sessions").insert({
    session_id: sessionId,
    participant_id: participantId,
    status: "started",
    dataset_role: parsed.data.dataset_role,
    user_agent: request.headers.get("user-agent") || "",
    started_at: new Date().toISOString()
  });

  if (sessionError) {
    return fail("Failed to create recording session", 500, sessionError.message);
  }

  return ok(
    {
      participant_id: participantId,
      session_id: sessionId,
      dataset_role: parsed.data.dataset_role
    },
    201
  );
}
