import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PageContent from "@/components/pagecontent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PageContent />
      <Footer />
    </div>
  );
}
