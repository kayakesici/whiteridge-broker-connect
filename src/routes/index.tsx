import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Focus } from "@/components/site/Focus";
import { BuyBox } from "@/components/site/BuyBox";
import { WhyBrokers } from "@/components/site/WhyBrokers";
import { Submit } from "@/components/site/Submit";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Whiteridge Capital — UK acquirer of profitable service businesses" },
      {
        name: "description",
        content:
          "Whiteridge Capital acquires established, owner-operated UK service businesses. Send a teaser, IM, or broker pack for confidential review.",
      },
      { property: "og:title", content: "Whiteridge Capital — UK Acquisition Platform" },
      {
        property: "og:description",
        content:
          "We acquire profitable UK service businesses. Clear criteria, fast feedback, NDA-ready process.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
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
        <Submit />
      </main>
      <Footer />
    </div>
  );
}
