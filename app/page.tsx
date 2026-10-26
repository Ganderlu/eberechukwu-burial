import Navbar from "@/components/Navbar";
import MemorialHero from "@/components/MemorialHero";
import Countdown from "@/components/Countdown";
import ServiceDetails from "@/components/ServiceDetails";
import FamilyUpdatesPreview from "@/components/FamilyUpdatesPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <MemorialHero />
      <Countdown />
      <ServiceDetails />
      <FamilyUpdatesPreview />
      <Footer />
    </main>
  );
}
