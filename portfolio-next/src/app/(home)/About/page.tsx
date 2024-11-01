"use client";

import About from "@/components/about";
import Footer from "@/components/footer";
import MyMarquee from "@/components/mymarquee";
import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <About />
      <div className="mb-20">
        <MyMarquee />
      </div>
      <Footer />
    </div>
  );
}
