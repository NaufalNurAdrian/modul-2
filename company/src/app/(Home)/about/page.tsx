import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Naufal Technology's, our mission to revolutionize the tech industry with AI, high-performance chip manufacturing, and innovative networking solutions.",
  keywords:
    "Naufal Technology's, About Us, AI, chip manufacturing, networking solutions, technology innovation, tech industry leadership, company story, artificial intelligence",
  openGraph: {
    title: "About Us | Shaping the Future of Technology",
    description:
      "Learn about the journey of Naufal Technology's, our vision to lead in AI, chip manufacturing, and networking solutions, and how we're driving the future of technology.",
    url: "https://naufal-technology.vercel.app/about",
    type: "website",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 800,
        alt: "Naufal Technology's - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Shaping the Future of Technology",
    description:
      "Naufal Technology's is at the forefront of technological innovation in AI, chip manufacturing, and networking solutions. Discover our story and vision.",
    images: ["/about.png"],
  },
};

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-slate-100 to-slate-100 text-black py-20 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-center mb-16">About Us</h2>

        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Journey</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Didirikan pada tahun <strong>2010</strong>, Naufal Technology telah berkembang menjadi salah satu perusahaan terkemuka di dunia yang bergerak di bidang teknologi.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            Di awal tahun 2000-an, kami membentuk tim penelitian AI yang berdedikasi, mengukuhkan posisi kami sebagai pemimpin dalam solusi AI yang inovatif.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Vision & Mission</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Visi Kami:</strong> Menjadi pemimpin global dalam industri teknologi dengan solusi inovatif.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            <strong>Misi Kami:</strong>
          </p>
          <ul className="list-disc list-inside pl-5 space-y-2 text-lg text-gray-700">
            <li>Menghadirkan solusi jaringan yang andal.</li>
            <li>Transformasi digital melalui teknologi AI.</li>
            <li>Merancang chip berperforma tinggi.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold mb-4">Networking</h4>
              <p className="text-gray-700">
                Solusi jaringan yang andal dengan fokus pada infrastruktur dan keamanan siber.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold mb-4">Artificial Intelligence (AI)</h4>
              <p className="text-gray-700">
                Solusi AI canggih, mulai dari machine learning hingga natural language processing.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold mb-4">Chip Manufacturing</h4>
              <p className="text-gray-700">
                Merancang chip berteknologi tinggi untuk perangkat AI dan IoT.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Achievements</h3>
          <ul className="list-disc list-inside pl-5 space-y-2 text-lg text-gray-700">
            <li>Peluncuran teknologi jaringan 5G pertama di Asia Tenggara.</li>
            <li>Pengembangan chip AI berkinerja tinggi.</li>
            <li>Dinobatkan sebagai Top 10 perusahaan AI terinovatif.</li>
          </ul>
        </div>

        <div className="mb-16 mt-10">
          <h3 className="text-4xl text-center font-semibold mb-6">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Image src="https://randomuser.me/api/portraits/women/45.jpg" alt="Jane Sniper" width={100} height={100} className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-blue-600" />
              <h4 className="text-2xl font-semibold">Jane Sniper</h4>
              <p className="text-blue-600">Chief Technology Officer</p>
              <p className="text-gray-700 text-center mt-2">
                Berpengalaman dalam pengembangan AI.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Image src="https://randomuser.me/api/portraits/men/34.jpg" alt="John Doe" width={100} height={100} className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-blue-600" />
              <h4 className="text-2xl font-semibold">John Doe</h4>
              <p className="text-blue-600">Lead Software Engineer</p>
              <p className="text-gray-700 text-center mt-2">
                Spesialis dalam jaringan dan keamanan siber.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Image src="https://randomuser.me/api/portraits/women/68.jpg" alt="Jane Smith" width={100} height={100} className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-blue-600" />
              <h4 className="text-2xl font-semibold">Jane Smith</h4>
              <p className="text-blue-600">Product Manager</p>
              <p className="text-gray-700 text-center mt-2">
                Mengelola strategi produk.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-4xl font-semibold mb-6 text-blue-600">Join Us in Shaping the Future</h3>
          <button className="px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
