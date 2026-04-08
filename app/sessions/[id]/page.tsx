import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { sessions, getSession } from "@/data/sessions";
import { siteConfig } from "@/data/site";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return sessions.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const session = getSession(id);
  if (!session) return {};
  return {
    title: `${session.title} — ムサトクAIクラブ`,
    description: session.description,
  };
}

const info = [
  { label: "日時", value: "4/16（木）17:20〜18:00" },
  { label: "場所", value: "講堂" },
  { label: "持ち物", value: "個人PC推奨、なければスマホOK" },
  { label: "対象", value: "全職員" },
];

const pains = [
  {
    q: "そもそも何に使えばいいかわからない...",
    a: "文章だけじゃない。画像読み取り、音声会話、Web検索...知らない使い方がまだまだあります。",
    color: "#85B7EB",
  },
  {
    q: "何回やりとりしても思った通りにならない...",
    a: "あるコツを使えば、やりとり激減。プロンプトの書き方じゃなく「AIへの頼み方」を教えます。",
    color: "#ED93B1",
  },
  {
    q: "ポスター作ろうとしたら変な文字が出た...",
    a: "AIの得意・不得意を知れば解決。文面はAI、デザインはCanvaで分担が正解。",
    color: "#5DCAA5",
  },
];

export default async function SessionPage({ params }: Props) {
  const { id } = await params;
  const session = getSession(id);
  if (!session) notFound();

  const idx = sessions.findIndex((s) => s.id === id);

  return (
    <>
      <Nav />
      <main className="flex-1 px-6 pt-28 pb-20">
        <article className="mx-auto max-w-2xl">
          {/* Back */}
          <Link
            href="/#about"
            className="mb-8 inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            &larr; トップに戻る
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="mb-3 inline-flex h-6 items-center rounded-full bg-foreground px-2.5 font-mono text-[11px] font-medium text-background">
              #{String(idx + 1).padStart(2, "0")}
            </span>
            <h1 className="mt-3 text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.04em]">
              {session.title}
            </h1>
          </div>

          {/* Info */}
          <div className="mb-10 overflow-hidden rounded-lg bg-card shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px]">
            <div
              className="h-[2px]"
              style={{
                background: "linear-gradient(90deg, #85B7EB, #ED93B1, #5DCAA5, #EF9F27)",
                opacity: 0.5,
              }}
            />
            <div className="p-5">
            <table className="w-full text-[13px]">
              <tbody>
                {info.map((item) => (
                  <tr key={item.label} className="border-b border-border last:border-0">
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

          {/* Pains */}
          <section className="mb-10">
            <h2 className="mb-4 text-[clamp(1.1rem,2.5vw,1.35rem)] font-semibold tracking-[-0.02em]">
              こんな悩みありませんか？
            </h2>
            <div className="flex flex-col gap-2">
              {pains.map((pain) => (
                <div
                  key={pain.q}
                  className="overflow-hidden rounded-lg bg-card shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px]"
                >
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
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="flex justify-center pt-4">
            <a
              href={siteConfig.surveyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-7 text-[14px] font-medium text-background shadow-[0_4px_14px_0_rgba(0,0,0,0.10)] transition-[background,transform,box-shadow] duration-150 hover:bg-[#383838] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:scale-[0.98]"
            >
              事前アンケート &#8599;
            </a>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
