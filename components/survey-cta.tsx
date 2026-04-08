import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/data/site";

export function SurveyCta() {
  return (
    <section id="survey" className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-xl border border-border bg-card px-6 py-14 text-center sm:px-10">
            {/* Subtle gradient glow */}
            <div
              className="pointer-events-none absolute inset-0 transform-gpu opacity-[0.06]"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #f5a623 0deg, #e8465a 72deg, #7928ca 144deg, #0072f5 216deg, #00c7b7 288deg, #79ffe1 360deg)",
              }}
            />

            <h2 className="relative text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold tracking-[-0.03em] text-foreground">
              事前アンケートにご協力ください
            </h2>
            <p className="relative mx-auto mt-3 mb-8 max-w-md text-[14px] leading-[1.7] text-muted-foreground">
              AIについて知りたいこと、困っていること、なんでも教えてください。
              <br />
              みなさんの声をもとに内容を決めていきます。1分で終わります。
            </p>
            <a
              href={siteConfig.surveyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-[14px] font-medium text-background transition-[background,transform,box-shadow] duration-150 hover:bg-[#383838] active:scale-[0.98]"
            >
              アンケートに回答する &rarr;
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-5 text-center text-[12px] text-muted-foreground">
            本クラブは互助会からご支援いただいております。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
