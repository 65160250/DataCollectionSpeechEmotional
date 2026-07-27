// ⚠️ ค่าทั้งหมดเป็น "lazy getter" — อ่าน env ตอน request ไม่ใช่ตอน import/build
// กันไม่ให้ `next build` crash เมื่อ env ยังไม่ถูกตั้ง (เดิม throw ที่ module load -> build ล้ม -> 404 ทั้งเว็บ)
export const config = {
  get supabaseUrl() {
    return mustGetEnv("SUPABASE_URL");
  },
  get supabaseServiceRoleKey() {
    return mustGetEnv("SUPABASE_SERVICE_ROLE_KEY");
  },
  get recordingsBucket() {
    return process.env.SUPABASE_RECORDINGS_BUCKET || "ser-recordings";
  },
  get maxAudioBytes() {
    return Number(process.env.MAX_AUDIO_BYTES || 10 * 1024 * 1024);
  },
  get allowedAudioMimeTypes() {
    return new Set(
      (process.env.ALLOWED_AUDIO_MIME_TYPES ||
        "audio/webm,audio/webm;codecs=opus,audio/mp4,audio/ogg,audio/ogg;codecs=opus,audio/wav,audio/wave,audio/x-wav")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
    );
  }
};

function mustGetEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}
