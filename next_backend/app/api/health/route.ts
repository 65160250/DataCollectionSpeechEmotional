import { ok } from "@/lib/responses";

export const runtime = "nodejs";

export async function GET() {
  return ok({
    status: "ok",
    service: "ser-recorder-backend",
    time: new Date().toISOString()
  });
}
