import { fail, ok, options } from "@/lib/responses";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { finishSessionSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = finishSessionSchema.safeParse(body);

  if (!parsed.success) {
    return fail("Invalid finish session payload", 400, parsed.error.flatten());
  }

  const { count, error: countError } = await supabaseAdmin
    .from("recordings")
    .select("id", { count: "exact", head: true })
    .eq("session_id", parsed.data.session_id)
    .eq("participant_id", parsed.data.participant_id);

  if (countError) {
    return fail("Failed to count recordings", 500, countError.message);
  }

  const { error } = await supabaseAdmin
    .from("recording_sessions")
    .update({
      status: "completed",
      completed_at: new Date().toISOString(),
      recording_count: count || 0,
      client_recording_count: parsed.data.client_recording_count ?? null
    })
    .eq("session_id", parsed.data.session_id)
    .eq("participant_id", parsed.data.participant_id);

  if (error) {
    return fail("Failed to finish session", 500, error.message);
  }

  return ok({
    session_id: parsed.data.session_id,
    participant_id: parsed.data.participant_id,
    recording_count: count || 0,
    status: "completed"
  });
}

export async function OPTIONS() {
  return options();
}
