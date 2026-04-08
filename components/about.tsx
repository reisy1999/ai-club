import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

const items = [
  {
    label: "Learn",
    desc: "毎回テーマを決めて、最新AIを実演。",
    color: "#85B7EB",
  },
  {
    label: "Try",
    desc: "実際に触って、自分の手で体験。",
    color: "#ED93B1",
  },
  {
    label: "Share",
    desc: "やってみたこと、わからないことをみんなで共有。",
    color: "#5DCAA5",
  },
  {
    label: "Snacks",
    desc: "互助会のサポートで、お菓子と飲み物あり！",
    color: "#EF9F27",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 pt-10 pb-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="mb-12 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.03em]">
            なにをするの？
          </h2>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 80}>
              <div
                className="h-full overflow-hidden rounded-lg bg-card shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px] transition-[box-shadow] duration-150 hover:shadow-[rgba(0,0,0,0.12)_0px_0px_0px_1px]"
              >
                <div
                  className="h-[2px]"
                  style={{ backgroundColor: item.color, opacity: 0.5 }}
                />
                <div className="p-5">
                  <p className="flex items-center gap-2 font-mono text-[14px] font-semibold tracking-[-0.01em]">
                    <span
                      className="inline-block size-[6px] rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-[1.65] text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={350}>
          <Link
            href="/sessions/1"
            className="group mt-6 flex items-center justify-between rounded-lg bg-card p-5 shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px] transition-[box-shadow] duration-150 hover:shadow-[rgba(0,0,0,0.12)_0px_0px_0px_1px]"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-6 items-center rounded-full bg-[#85B7EB]/20 px-2.5 text-[11px] font-semibold text-[#2E7AB8]">
                第1回
              </span>
              <div>
                <p className="text-[14px] font-semibold tracking-[-0.01em]">
                  <span className="text-muted-foreground">テーマ：</span>すごいぜ！<span className="text-[#EF9F27]">チャッピー！</span>
                </p>
                <p className="text-[12px] text-muted-foreground">
                  4/16(木) 17:20–18:00 ― 講堂
                </p>
              </div>
            </div>
            <span className="text-[13px] text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5">
              &#8599;
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
