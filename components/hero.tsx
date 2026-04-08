import { siteConfig } from "@/data/site";
import { HeroLogo } from "@/components/hero-logo";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 pt-24 pb-20 text-center">
      {/* ── Grid pattern ── */}
      <div
        className="pointer-events-none absolute inset-0 transform-gpu will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Radial glow ── */}
      <div
        className="pointer-events-none absolute top-[10%] left-1/2 -translate-x-1/2 size-[700px] transform-gpu will-change-transform opacity-[0.12] blur-[80px] sm:size-[900px]"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #f5a623 0deg, #e8465a 72deg, #7928ca 144deg, #0072f5 216deg, #00c7b7 288deg, #79ffe1 360deg)",
        }}
      />

      {/* ── Fade-out edges ── */}
      <div className="pointer-events-none absolute inset-0 transform-gpu will-change-transform bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,transparent_40%,var(--background)_100%)]" />

      {/* ── Content ── */}
      <div className="relative flex flex-col items-center gap-8">
        <HeroLogo />

        <span className="font-mono text-[clamp(1.8rem,5vw,2.25rem)] font-medium uppercase leading-none tracking-[0.18em] text-foreground">
          MUSATOKU AI CLUB
        </span>

        <p className="shimmer text-[15px] italic tracking-wide">
          Try it. It&apos;s fun.
        </p>

        <p className="flex items-center gap-2 text-[13px] text-muted-foreground">
          <span className="text-[11px] font-medium uppercase tracking-[0.08em]">Next</span>
          <span className="text-border">—</span>
          <span className="font-mono">4/16(木) 17:20–18:00</span>
          <span className="text-border">—</span>
          <span>講堂</span>
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={siteConfig.surveyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-7 text-[14px] font-medium text-background shadow-[0_4px_14px_0_rgba(0,0,0,0.10)] transition-[background,transform,box-shadow] duration-150 hover:bg-[#383838] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:scale-[0.98]"
          >
            事前アンケート &#8599;
          </a>
          <a
            href="/sessions/1"
            className="inline-flex h-11 items-center rounded-full border border-border bg-card px-7 text-[14px] font-medium text-foreground transition-[border-color,background,transform] duration-150 hover:bg-muted active:scale-[0.98]"
          >
            第1回：4/16（木） &#8599;
          </a>
        </div>
      </div>
    </section>
  );
}
