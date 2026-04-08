import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { sessions } from "@/data/sessions";

export function SessionsList() {
  return (
    <section id="sessions" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-2 text-[13px] font-semibold text-teal">Sessions</p>
          <h2 className="mb-6 text-[clamp(1.4rem,3vw,1.8rem)] font-bold leading-tight tracking-tight">
            各回の記録
          </h2>
        </FadeIn>

        {sessions.length === 0 ? (
          <FadeIn delay={100}>
            <div className="rounded-lg border border-dashed border-border px-6 py-10 text-center">
              <p className="text-sm text-muted-foreground">
                活動が始まったらここに追加していきます。
              </p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {sessions.map((s, i) => (
              <FadeIn key={s.id} delay={i * 80}>
                <Link href={`/sessions/${s.id}`} className="block h-full">
                  <Card className="h-full transition-all hover:border-teal/30 hover:shadow-sm">
                    <CardHeader>
                      <CardDescription className="font-mono text-xs">
                        #{String(i + 1).padStart(2, "0")}
                        {s.date && ` — ${s.date}`}
                      </CardDescription>
                      <CardTitle className="text-sm">{s.title}</CardTitle>
                      <CardDescription className="text-[13px] leading-relaxed">
                        {s.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
