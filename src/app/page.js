// src/app/page.jsx
export default function Page() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pt-28 pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/60 px-3 py-1 text-xs text-zinc-400">
          글로벌 · 실시간 스코어 · 합법 중계 연동
        </div>
        <div className="h-10 bg-brand mt-4 rounded-xl" />
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
          전 세계 스포츠 통계, <br className="hidden md:block" />
          라이브로 한눈에.
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          MLB · NBA · KBO · EPL 등 주요 리그의 고급 스탯 시각화와 라이브 스코어를 한 곳에서.
        </p>

        <div className="mt-8 flex gap-3">
          <button className="rounded-xl bg-violet-500 hover:bg-violet-400 text-white px-5 py-3 font-semibold transition">
            얼리 액세스 알림받기 (준비중)
          </button>
          <a
            href="#features"
            className="rounded-xl border border-zinc-600/70 hover:border-zinc-400/70 px-5 py-3 font-medium text-zinc-200 transition"
          >
            기능 미리보기
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-5xl px-6 pb-20 grid gap-4 md:grid-cols-3">
        {[
          { t: "리그별 고급 스탯", d: "팀/선수/상황별 지표를 시각화로." },
          { t: "실시간 스코어", d: "경기 흐름, 인플레이 이벤트를 타임라인으로." },
          { t: "중계 연동", d: "공식/합법 스트림 임베드 지원." },
        ].map((f) => (
          <div key={f.t} className="rounded-2xl border border-zinc-800 hover:border-zinc-700/70 transition p-5">
            <div className="text-lg font-semibold">{f.t}</div>
            <div className="mt-2 text-sm text-zinc-400">{f.d}</div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-sm text-zinc-500 border-t border-zinc-900">
        © {new Date().getFullYear()} SportAtlas. All rights reserved.
      </footer>
    </main>
  );
}