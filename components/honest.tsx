import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/data/site";

export function Honest() {
  return (
    <section id="honest" className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="mb-8 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.03em]">
            事務局より
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="rounded-lg bg-card p-6 shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px] text-[14px] leading-[1.85] text-muted-foreground sm:p-8">
            <p>
              日々の業務や趣味の時間でAIを使っていく中で、「これ、一人で触ってるのもったいないな」と思うことが多くなってきました。
            </p>
            <p className="mt-4">
              ただ、一方的にお伝えするだけの場にはしたくないと思っています。
              <br />
              みなさんの<strong className="font-semibold text-foreground">「これやってみたい！」</strong>や<strong className="font-semibold text-foreground">「どうやるの？」</strong>が、この場をもっと面白くしてくれるはずです。
            </p>
            <p className="mt-4">
              小さく始めて、気軽に交流できる場に育てていけたらうれしいです。気になることがあれば、<a href={siteConfig.surveyUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-[#0072f5] underline underline-offset-4 transition-colors duration-150 hover:text-[#005bc4]">事前アンケート</a>からなんでも教えてください。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
