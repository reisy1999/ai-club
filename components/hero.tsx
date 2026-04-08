import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center">
      {/* Subtle gradient blobs */}
      <div className="pointer-events-none absolute -top-[30%] -right-[20%] size-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.14_178/0.07),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-[20%] -left-[15%] size-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.14_178/0.05),transparent_70%)]" />

      <div className="relative max-w-[560px]">
        <Badge
          variant="secondary"
          className="mb-6 border border-teal/20 bg-teal-muted text-teal-foreground font-medium"
        >
          院内職員向け
        </Badge>

        <h1 className="text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.2] tracking-tighter">
          今のAIで何ができるか、
          <br />
          知る場をつくりました。
        </h1>

        <p className="mx-auto mt-4 mb-8 max-w-[400px] text-[15px] leading-relaxed text-muted-foreground">
          ムサトクAIクラブは、AIの具体的な活用事例を
          ゆるく共有していくクラブです。
          <br />
          興味のある方はまずアンケートから。
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={siteConfig.surveyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              size: "lg",
              className:
                "bg-teal text-white shadow-sm shadow-teal/20 hover:bg-teal/85 border-teal",
            })}
          >
            アンケートに回答する
          </a>
          <a
            href="#about"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            詳しく見る
          </a>
        </div>
      </div>
    </section>
  );
}
