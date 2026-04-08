import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/data/site";

export function SurveyCta() {
  return (
    <section id="survey" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-xl bg-foreground px-6 py-14 text-center sm:px-10">
            <h2 className="relative text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold tracking-[-0.03em] text-background">
              事前アンケートにご協力ください
            </h2>
            <p className="relative mx-auto mt-3 mb-8 max-w-md text-[14px] leading-[1.7] text-[#8f8f8f]">
              AIについて知りたいこと、困っていること、なんでも教えてください。
              <br />
              みなさんの声をもとに内容を決めていきます。1分で終わります。
            </p>
            <a
              href={siteConfig.surveyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-10 items-center gap-2 rounded-full bg-background px-5 text-[14px] font-medium text-foreground transition-[background,transform,box-shadow] duration-150 hover:bg-[#e5e5e5] active:scale-[0.98]"
            >
              アンケートに回答する &rarr;
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-5 text-center text-[12px] text-muted-foreground">
            互助会のサポートで、お菓子と飲み物を用意しています。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
