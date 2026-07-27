import { z } from "zod";

export const speakerSchema = z.object({
  alias: z.string().trim().max(80).optional().default(""),
  gender: z.enum(["female", "male", "other", "prefer_not_to_say"]),
  age_range: z.enum(["under_18", "18-25", "26-35", "36-45", "46+"]),
  english_level: z.enum(["A1", "A2", "B1", "B2", "C1", "C2", "unknown"]),
  consent_research: z.boolean(),
  consent_commercial: z.boolean().optional().default(false),
  dataset_role: z.enum(["eval_only", "train_candidate"]).optional().default("eval_only")
});

export const finishSessionSchema = z.object({
  session_id: z.string().uuid(),
  participant_id: z.string().min(6).max(80),
  client_recording_count: z.number().int().min(0).max(500).optional()
});

export const recordingMetaSchema = z.object({
  session_id: z.string().uuid(),
  participant_id: z.string().min(6).max(80),
  emotion: z.enum(["angry", "happy", "sad", "neutral"]),
  part: z.enum(["A", "B", "C"]),
  sentence_id: z.string().min(1).max(20),
  sentence_text: z.string().min(1).max(1000),
  condition: z.enum(["quiet", "noisy"]).default("quiet"),
  take: z.coerce.number().int().min(1).max(20).default(1),
  duration_sec: z.coerce.number().min(0).max(120),
  retakes: z.coerce.number().int().min(0).max(20).default(0),
  recorded_at_utc: z.string().datetime().optional()
});
