import { FadeIn } from "@/components/fade-in";

export function Honest() {
  return (
    <section id="honest" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
            Thoughts
          </p>
          <h2 className="mb-8 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.03em]">
            みなさんと一緒に作っていきたい
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="rounded-lg bg-card p-6 shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px] text-[14px] leading-[1.85] text-muted-foreground sm:p-8">
            <p>
              やりたいことはたくさんありますが、まずはみなさんが何を知りたいかを聞くところから始めたいと思っています。「こういうの知りたい」「これってAIでできる？」なんでもOKです。アンケートで気軽に教えてください。
            </p>
            <p className="mt-4">
              最初から完璧じゃなくていい。小さく始めて、一緒に育てていける場にできたらうれしいです。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
