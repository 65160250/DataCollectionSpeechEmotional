export const config = {
  supabaseUrl: mustGetEnv("SUPABASE_URL"),
  supabaseServiceRoleKey: mustGetEnv("SUPABASE_SERVICE_ROLE_KEY"),
  recordingsBucket: process.env.SUPABASE_RECORDINGS_BUCKET || "ser-recordings",
  maxAudioBytes: Number(process.env.MAX_AUDIO_BYTES || 10 * 1024 * 1024),
  allowedAudioMimeTypes: new Set(
    (process.env.ALLOWED_AUDIO_MIME_TYPES ||
      "audio/webm,audio/webm;codecs=opus,audio/mp4,audio/ogg,audio/ogg;codecs=opus,audio/wav,audio/wave,audio/x-wav")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean)
  )
};

function mustGetEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}
