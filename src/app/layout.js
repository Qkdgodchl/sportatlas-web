// src/app/layout.jsx
import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "SportAtlas — 글로벌 스포츠 통계 & 라이브", template: "%s | SportAtlas" },
  description: "전 세계 스포츠 리그의 통계 시각화 · 실시간 스코어 · 합법 중계 연동",
  openGraph: {
    title: "SportAtlas",
    description: "전 세계 스포츠 통계/스코어/중계",
    url: "/",
    siteName: "SportAtlas",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-black text-zinc-100 antialiased">{children}</body>
    </html>
  );
}