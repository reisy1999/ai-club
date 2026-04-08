import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Honest } from "@/components/honest";
import { SessionsList } from "@/components/sessions-list";
import { SurveyCta } from "@/components/survey-cta";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Separator />
        <Honest />
        <Separator />
        <SessionsList />
        <Separator />
        <SurveyCta />
      </main>
      <SiteFooter />
    </>
  );
}
