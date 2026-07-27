import crypto from "node:crypto";

export function createParticipantId() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const suffix = crypto.randomBytes(4).toString("hex");
  return `sp_${date}_${suffix}`;
}

export function createSessionId() {
  return crypto.randomUUID();
}

export function safeFilePart(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80);
}
