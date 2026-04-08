import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      <main className="flex-1 px-6 pt-28 pb-20">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/#sessions"
            className="mb-6 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; トップに戻る
          </Link>

          <Badge
            variant="secondary"
            className="mb-3 border border-teal-muted bg-teal-muted text-teal-foreground font-mono text-xs"
          >
            #{String(idx + 1).padStart(2, "0")}
          </Badge>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {session.title}
          </h1>

          {session.date && (
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              {session.date}
            </p>
          )}

          <p className="mt-4 leading-relaxed text-muted-foreground">
            {session.description}
          </p>

          {session.body && (
            <div className="mt-6 rounded-lg border border-border bg-muted/50 p-5 text-sm leading-relaxed text-muted-foreground">
              {session.body}
            </div>
          )}

          {session.resources.length > 0 && (
            <div className="mt-8">
              <h2 className="mb-3 text-sm font-semibold">資料・リンク</h2>
              <div className="flex flex-wrap gap-2">
                {session.resources.map((r) => (
                  <a
                    key={r.label}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
