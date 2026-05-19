import About from "@/components/About";
import CTA from "@/components/CTA";
import CustomCursor from "@/components/CustomCursor";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-cream">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Menu />
      <Gallery />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
