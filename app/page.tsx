import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SessionDetail } from "@/components/session-detail";
import { Honest } from "@/components/honest";
import { SessionsList } from "@/components/sessions-list";
import { SurveyCta } from "@/components/survey-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <SessionDetail />
        <Honest />
        <SessionsList />
        <SurveyCta />
      </main>
      <SiteFooter />
    </>
  );
}
