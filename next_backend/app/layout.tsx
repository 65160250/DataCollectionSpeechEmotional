import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "SER Recorder Backend",
  description: "Next.js API backend for SER data collection"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
