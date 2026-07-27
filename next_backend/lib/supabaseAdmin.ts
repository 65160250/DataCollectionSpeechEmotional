import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { config } from "@/lib/config";

// ⚠️ สร้าง client แบบ lazy (ตอนเรียกใช้ครั้งแรก) ไม่ใช่ตอน import module
// เดิม createClient(...) รันที่ top-level -> อ่าน env ตอน build -> ถ้า env ไม่มี build ล้ม -> 404 ทั้งเว็บ
let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!_client) {
    _client = createClient(config.supabaseUrl, config.supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      }
    });
  }
  return _client;
}

// Proxy: คงชื่อ `supabaseAdmin` เดิมไว้ (route ไม่ต้องแก้) แต่เลื่อนการสร้าง client
// ไปเป็นตอน property ถูกเรียกครั้งแรก = request time
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_target, prop, receiver) {
    const client = getClient();
    const value = Reflect.get(client as object, prop, receiver);
    return typeof value === "function" ? value.bind(client) : value;
  }
});
