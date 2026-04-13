import { FadeIn } from "@/components/fade-in";
import { SessionDemos } from "@/components/session-demos";
import { sessions } from "@/data/sessions";

export function SessionDetail() {
  const session = sessions[0];
  if (!session) return null;

  return (
    <section id="session-1" className="px-6 pt-10 pb-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-6 items-center rounded-full bg-[#85B7EB]/20 px-2.5 text-[11px] font-semibold text-[#2E7AB8]">
              第1回
            </span>
            {session.date && (
              <span className="text-[12px] text-muted-foreground">
                {session.date}
              </span>
            )}
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.03em]">
            {session.title.split("チャッピー！").length > 1
              ? session.title.split("チャッピー！").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-[#EF9F27]">チャッピー！</span>
                    )}
                  </span>
                ))
              : session.title}
          </h2>
        </FadeIn>

        {session.overview && (
          <FadeIn delay={80}>
            <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground">
              {session.overview.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </FadeIn>
        )}

        {/* Info */}
        {session.info.length > 0 && (
          <FadeIn delay={160}>
            <div className="mt-8 overflow-hidden rounded-lg bg-card shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px]">
              <div
                className="h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, #85B7EB, #ED93B1, #5DCAA5, #EF9F27)",
                  opacity: 0.5,
                }}
              />
              <div className="p-5">
                <table className="w-full text-[13px]">
                  <tbody>
                    {session.info.map((item) => (
                      <tr
                        key={item.label}
                        className="border-b border-border last:border-0"
                      >
                        <td className="w-16 py-2 pr-4 align-top text-[12px] font-medium text-muted-foreground">
                          {item.label}
                        </td>
                        <td className="py-2 font-medium">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Demo gallery */}
        <div className="mt-10">
          <FadeIn delay={320}>
            <h3 className="mb-2 text-[clamp(1.1rem,2.5vw,1.35rem)] font-semibold tracking-[-0.02em]">
              こんなのができるよ
            </h3>
            <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
              ChatGPTに頼んで作ったHTML単一ファイルの資料サンプルです。タップで原寸プレビューが開きます。
            </p>
          </FadeIn>
          <FadeIn delay={380}>
            <SessionDemos />
          </FadeIn>
        </div>

        {/* Pains */}
        {session.pains.length > 0 && (
          <div className="mt-8">
            <FadeIn delay={240}>
              <h3 className="mb-4 text-[clamp(1.1rem,2.5vw,1.35rem)] font-semibold tracking-[-0.02em]">
                事前アンケート Q&A
              </h3>
            </FadeIn>
            <div className="flex flex-col gap-2">
              {session.pains.map((pain, i) => (
                <FadeIn key={pain.q} delay={300 + i * 60}>
                  <div className="overflow-hidden rounded-lg bg-card shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px]">
                    <div
                      className="h-[2px]"
                      style={{ backgroundColor: pain.color, opacity: 0.5 }}
                    />
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-[14px] font-semibold leading-relaxed marker:content-[''] [&::-webkit-details-marker]:hidden">
                        {pain.q}
                        <span className="ml-2 text-[12px] text-muted-foreground transition-transform duration-200 group-open:rotate-180">
                          ▼
                        </span>
                      </summary>
                      <p className="px-4 pb-3 text-[13px] leading-relaxed text-muted-foreground">
                        → {pain.a}
                      </p>
                    </details>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
