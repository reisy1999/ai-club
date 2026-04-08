import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { sessions, getSession } from "@/data/sessions";

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

export default async function SessionPage({ params }: Props) {
  const { id } = await params;
  const session = getSession(id);
  if (!session) notFound();

  const idx = sessions.findIndex((s) => s.id === id);

  return (
    <>
      <Nav />
      <main className="relative flex-1 px-6 pt-28 pb-20">
        {/* Glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 size-[600px] transform-gpu will-change-transform opacity-[0.08] blur-[80px]"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, #f5a623 0deg, #e8465a 72deg, #7928ca 144deg, #0072f5 216deg, #00c7b7 288deg, #79ffe1 360deg)",
          }}
        />

        <article className="relative mx-auto max-w-2xl">
          {/* Back */}
          <Link
            href="/#about"
            className="mb-8 inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            &larr; トップに戻る
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="mb-3 inline-flex h-6 items-center rounded-full bg-[#85B7EB]/20 px-2.5 text-[11px] font-semibold text-[#2E7AB8]">
              第{idx + 1}回
            </span>
            <h1 className="mt-3 text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.04em]">
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
            </h1>
            {session.overview && (
              <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground">
                {session.overview.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            )}
          </div>

          {/* Info */}
          {session.info.length > 0 && (
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
                    {session.info.map((item) => (
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
          )}

          {/* Pains */}
          {session.pains.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-4 text-[clamp(1.1rem,2.5vw,1.35rem)] font-semibold tracking-[-0.02em]">
                こんな悩みありませんか？
              </h2>
              <div className="flex flex-col gap-2">
                {session.pains.map((pain) => (
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
          )}

          {/* Resources */}
          {session.resources.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-4 text-[clamp(1.1rem,2.5vw,1.35rem)] font-semibold tracking-[-0.02em]">
                資料・リンク
              </h2>
              <div className="flex flex-col gap-2">
                {session.resources.map((r) => (
                  <a
                    key={r.url}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg bg-card px-4 py-3 text-[14px] font-medium shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px] transition-[box-shadow] duration-150 hover:shadow-[rgba(0,0,0,0.12)_0px_0px_0px_1px]"
                  >
                    {r.label}
                    <span className="text-[13px] text-muted-foreground">&#8599;</span>
                  </a>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
