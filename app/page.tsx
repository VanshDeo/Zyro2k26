import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Rewards from "@/components/Rewards";
import Timeline from "@/components/Timeline";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Rewards />
      <Timeline />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  );
}
