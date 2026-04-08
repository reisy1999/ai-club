import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/data/site";

export function SurveyCta() {
  return (
    <section id="survey" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-xl bg-[hsl(172,50%,14%)] px-6 py-12 text-center text-white sm:px-10">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -top-1/2 -right-1/4 size-[300px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.14_178/0.15),transparent_70%)]" />

            <h2 className="relative text-[clamp(1.3rem,2.5vw,1.6rem)] font-bold tracking-tight">
              事前アンケートにご協力ください
            </h2>
            <p className="relative mx-auto mt-2 mb-6 max-w-md text-sm leading-relaxed text-white/60">
              AIについて知りたいこと・困っていることを教えてください。
              <br />
              みなさんの声をもとに内容を決めていきます。1分で回答できます。
            </p>
            <a
              href={siteConfig.surveyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 rounded-md bg-white px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal/10"
            >
              アンケートに回答する &rarr;
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-5 flex justify-center">
            <Badge
              variant="secondary"
              className="border border-border text-[12px] font-normal text-muted-foreground"
            >
              互助会のサポートで、お菓子と飲み物を用意しています
            </Badge>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
