import { About } from "@/components/sections/About";
import { Classes } from "@/components/sections/Classes";
import { ContactFAQ } from "@/components/sections/ContactFAQ";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-canvas text-ink">
      <Hero />
      <Gallery />
      <About />
      <Classes />
      <ContactFAQ />
      <Footer />
    </main>
  );
}
