# SER Recorder Next.js Backend

Backend นี้เป็น API layer สำหรับเว็บเก็บเสียง SER ใน `../index.html`.

เป้าหมาย:

- สร้าง `participant_id` และ `session_id` จาก server
- รับไฟล์เสียงจาก frontend
- ตรวจขนาดไฟล์และชนิดไฟล์เบื้องต้น
- อัปโหลดเสียงเข้า Supabase Storage
- เก็บ metadata ลง Supabase Postgres
- ไม่ expose `service_role` ให้ browser

## 1. สร้าง Supabase schema

เปิด Supabase Dashboard > SQL Editor แล้วรัน:

```sql
-- ใช้ไฟล์นี้
supabase/schema.sql
```

สิ่งที่จะได้:

- bucket: `ser-recordings`
- table: `speakers`
- table: `recording_sessions`
- table: `recordings`

RLS ถูกเปิดไว้บน tables ทั้งหมด แต่ backend ใช้ `service_role` จึงไม่ต้องเปิด public insert policy ให้ browser.

## 2. ตั้งค่า environment

คัดลอกไฟล์:

```bash
cp .env.example .env.local
```

แล้วใส่ค่าจริง:

```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_RECORDINGS_BUCKET=ser-recordings
MAX_AUDIO_BYTES=10485760
```

ข้อสำคัญ:

- `SUPABASE_SERVICE_ROLE_KEY` ใช้ได้เฉพาะ backend
- ห้ามใส่ service role key ใน frontend/static HTML
- ถ้าจะ deploy production ให้ตั้ง env ใน hosting provider ไม่ commit ลง repo

## 3. ติดตั้งและรัน

```bash
npm install
npm run dev
```

เปิด:

```text
http://localhost:3000
http://localhost:3000/api/health
```

## 4. API contract

### Start session

```http
POST /api/sessions/start
Content-Type: application/json
```

Body:

```json
{
  "alias": "Nan",
  "gender": "female",
  "age_range": "18-25",
  "english_level": "B1",
  "consent_research": true,
  "consent_commercial": false,
  "dataset_role": "eval_only"
}
```

Response:

```json
{
  "participant_id": "sp_20260727_ab12cd34",
  "session_id": "uuid",
  "dataset_role": "eval_only"
}
```

### Upload recording

```http
POST /api/recordings/upload
Content-Type: multipart/form-data
```

Form fields:

- `audio`: audio file/blob
- `metadata`: JSON string

Metadata:

```json
{
  "session_id": "uuid",
  "participant_id": "sp_20260727_ab12cd34",
  "emotion": "neutral",
  "part": "A",
  "sentence_id": "A01",
  "sentence_text": "I'm going to the market this afternoon.",
  "condition": "quiet",
  "take": 1,
  "duration_sec": 3.25,
  "retakes": 0,
  "recorded_at_utc": "2026-07-27T07:00:00.000Z"
}
```

Response:

```json
{
  "recording_id": "uuid",
  "storage_bucket": "ser-recordings",
  "storage_path": "sp_20260727_ab12cd34/quiet/sp_20260727_ab12cd34_neutral_a01_1.webm"
}
```

### Finish session

```http
POST /api/sessions/finish
Content-Type: application/json
```

Body:

```json
{
  "session_id": "uuid",
  "participant_id": "sp_20260727_ab12cd34",
  "client_recording_count": 56
}
```

## 5. Frontend integration plan

ตอนนี้ static recorder ยังทำงานแบบ download ZIP อยู่.

ขั้นถัดไป:

1. เมื่อ user กดเริ่มอัด ให้เรียก `/api/sessions/start`
2. เก็บ `participant_id` และ `session_id` ไว้ใน state
3. หลังอัดแต่ละคลิปเสร็จ ให้เรียก `/api/recordings/upload`
4. ตอนจบทั้งหมด ให้เรียก `/api/sessions/finish`
5. ยังสามารถเก็บปุ่ม download ZIP เป็น fallback ได้

## 6. ข้อจำกัดรอบแรก

- ยังไม่มี auth/admin dashboard
- ยังไม่มี rate limit
- ยังไม่ตรวจความยาวเสียงจริงจาก server-side audio decode
- upload ใช้ standard upload เหมาะกับไฟล์เสียงสั้น ถ้าไฟล์ใหญ่/เน็ตหลุดบ่อย ค่อยเพิ่ม resumable upload
