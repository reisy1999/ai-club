import { FadeIn } from "@/components/fade-in";

const items = [
  {
    label: "Learn",
    desc: "最新のAIで何ができるのか、知るところから。",
  },
  {
    label: "Try",
    desc: "実際に触って、使ってみましょう。",
  },
  {
    label: "Share",
    desc: "気づいたこと、面白かったこと、みんなで持ち寄ろう。",
  },
  {
    label: "& Snacks",
    desc: "互助会のサポートで、お菓子と飲み物を用意しています。",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
            About
          </p>
          <h2 className="mb-12 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.03em]">
            なにをするの？
          </h2>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 80}>
              <div className="h-full rounded-lg bg-card p-5 shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px] transition-[box-shadow] duration-150 hover:shadow-[rgba(0,0,0,0.12)_0px_0px_0px_1px]">
                <p className="font-mono text-[14px] font-semibold tracking-[-0.01em]">
                  {item.label}
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.65] text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
