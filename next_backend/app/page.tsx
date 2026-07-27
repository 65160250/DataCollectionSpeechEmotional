const endpoints = [
  ["GET", "/api/health", "ตรวจสถานะ backend"],
  ["POST", "/api/sessions/start", "สร้าง participant/session"],
  ["POST", "/api/recordings/upload", "อัปโหลดไฟล์เสียงและ metadata"],
  ["POST", "/api/sessions/finish", "ปิด session และนับจำนวนคลิป"]
];

export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">SER Data Collection</p>
        <h1>Recorder Backend</h1>
        <p className="desc">
          Next.js API layer สำหรับรับข้อมูลจากเว็บ recorder แล้วส่งต่อไป Supabase Storage และ Postgres
        </p>
        <div className="endpointList">
          {endpoints.map(([method, path, desc]) => (
            <div className="endpoint" key={path}>
              <span>{method}</span>
              <code>{path}</code>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
