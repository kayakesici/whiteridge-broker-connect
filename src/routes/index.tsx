import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Focus } from "@/components/site/Focus";
import { BuyBox } from "@/components/site/BuyBox";
import { WhyBrokers } from "@/components/site/WhyBrokers";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { AfterSubmit } from "@/components/site/AfterSubmit";
import { Submit } from "@/components/site/Submit";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Whiteridge Capital — UK acquirer of profitable service businesses" },
      {
        name: "description",
        content:
          "Whiteridge Capital acquires established, owner-operated UK service businesses. Submit acquisition opportunities to a credible, professional buyer.",
      },
      { property: "og:title", content: "Whiteridge Capital — UK Acquisition Platform" },
      {
        property: "og:description",
        content:
          "A straightforward buyer for profitable UK service businesses. Acquisition focus, buy box, and broker process.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Focus />
        <BuyBox />
        <WhyBrokers />
        <Process />
        <About />
        <AfterSubmit />
        <Submit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
