import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";

const items = [
  {
    title: "具体例を共有",
    desc: "文書作成、要約、画像生成など、業務に近い事例を中心にお見せします。",
  },
  {
    title: "無料ツールから",
    desc: "ChatGPTやGeminiの無料枠で始めます。特別な準備は不要です。",
  },
  {
    title: "ゆるく、続ける",
    desc: "かっちりした勉強会というより、「へぇ、こんなことできるんだ」を積み重ねていくスタイルです。",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-2 text-[13px] font-semibold text-teal">About</p>
          <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold leading-tight tracking-tight">
            ムサトクAIクラブとは
          </h2>
          <p className="mt-2 mb-10 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            「AIって結局なにができるの？」に、具体例で答えていく場です。
            院内職員ならどなたでも。参加費はかかりません。
          </p>
        </FadeIn>

        <div className="grid gap-3 sm:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <Card className="h-full overflow-hidden border-t-2 border-t-teal/20 transition-all hover:border-t-teal/50 hover:shadow-sm">
                <CardHeader>
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                  <CardDescription className="text-[13px] leading-relaxed">
                    {item.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
