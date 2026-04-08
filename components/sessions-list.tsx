import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { sessions } from "@/data/sessions";

export function SessionsList() {
  return (
    <section id="sessions" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
            Sessions
          </p>
          <h2 className="mb-8 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.03em]">
            各回の記録
          </h2>
        </FadeIn>

        {sessions.length === 0 ? (
          <FadeIn delay={100}>
            <div className="rounded-lg border border-dashed border-[rgba(0,0,0,0.15)] px-6 py-12 text-center">
              <p className="text-[14px] text-muted-foreground">
                活動が始まったらここに追加していきます。
              </p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {sessions.map((s, i) => (
              <FadeIn key={s.id} delay={i * 80}>
                <Link href={`/sessions/${s.id}`} className="block h-full">
                  <div className="h-full rounded-lg bg-card p-5 shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px] transition-[box-shadow] duration-150 hover:shadow-[rgba(0,0,0,0.12)_0px_0px_0px_1px]">
                    <p className="font-mono text-[12px] text-muted-foreground">
                      #{String(i + 1).padStart(2, "0")}
                      {s.date && ` — ${s.date}`}
                    </p>
                    <p className="mt-1.5 text-[14px] font-semibold tracking-[-0.01em]">
                      {s.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-[1.65] text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
