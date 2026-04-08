import { FadeIn } from "@/components/fade-in";

export function Honest() {
  return (
    <section id="honest" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-2 text-[13px] font-semibold text-teal">Thoughts</p>
          <h2 className="mb-6 text-[clamp(1.4rem,3vw,1.8rem)] font-bold leading-tight tracking-tight">
            正直、まだ手探りです。
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="rounded-lg border border-teal/15 border-l-[3px] border-l-teal/40 bg-teal-muted p-6 text-[14px] leading-[1.9] text-muted-foreground">
            <p>
              <strong className="font-semibold text-foreground">
                何をやるか、実はまだ決まりきっていません。
              </strong>
              <br />
              集まって何かやるのがいいのか、発信だけでいいのか、そもそもどのくらいの人が興味あるのかもまだわからない。AIの話題は広すぎて、どこから始めるのが正解なのか主催側も悩んでいます。
            </p>
            <p className="mt-3">
              だから、みなさんの声を聞いてから一緒に形を決めたいと思っています。
              「こういうの知りたい」「こんなことできる？」があれば、アンケートでなんでも教えてください。
            </p>
            <p className="mt-3">
              完成されたものをお届けするというよりは、
              <strong className="font-semibold text-foreground">
                一緒に手探りしながら育てていく場
              </strong>
              。まずは小さく、気軽に。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
