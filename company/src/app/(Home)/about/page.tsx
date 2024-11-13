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
            Didirikan pada tahun <strong>2010</strong>, Naufal Technology
            telah berkembang menjadi salah satu perusahaan terkemuka di dunia
            yang bergerak di bidang teknologi. Kami memulai dengan fokus pada
            pengembangan jaringan yang handal dan kini merambah ke Artificial
            Intelligence (AI) serta manufaktur chip berteknologi tinggi.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            Di awal tahun 2000-an, kami membentuk tim penelitian AI yang
            berdedikasi. Investasi ini mengukuhkan posisi kami sebagai pemimpin
            dalam solusi AI yang inovatif, yang kini digunakan untuk
            transformasi digital di berbagai sektor industri.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Vision & Mission</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Visi Kami:</strong> Menjadi pemimpin global dalam industri
            teknologi dengan menyediakan solusi inovatif yang menghubungkan
            dunia, mengubah data menjadi wawasan yang bermakna, dan mempercepat
            perkembangan perangkat elektronik.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            <strong>Misi Kami:</strong>
          </p>
          <ul className="list-disc list-inside pl-5 space-y-2 text-lg text-gray-700">
            <li>
              Menghadirkan solusi jaringan yang andal untuk bisnis global.
            </li>
            <li>
              Mendorong transformasi digital melalui teknologi AI yang inovatif.
            </li>
            <li>
              Merancang chip berperforma tinggi untuk aplikasi masa depan.
            </li>
          </ul>
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Networking",
                description:
                  "Kami menyediakan solusi jaringan yang andal untuk bisnis dengan fokus pada infrastruktur, keamanan siber, dan sistem komunikasi.",
              },
              {
                title: "Artificial Intelligence (AI)",
                description:
                  "Kami mengembangkan solusi AI yang canggih, mulai dari machine learning hingga natural language processing, untuk mendorong inovasi.",
              },
              {
                title: "Chip Manufacturing",
                description:
                  "Kami merancang chip berteknologi tinggi yang digunakan dalam perangkat AI, IoT, dan infrastruktur jaringan.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Achievements</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Naufal Technology telah mendapatkan berbagai penghargaan atas
            inovasi kami. Beberapa pencapaian penting meliputi:
          </p>
          <ul className="list-disc list-inside pl-5 mt-4 space-y-2 text-lg text-gray-700">
            <li>Peluncuran teknologi jaringan 5G pertama di Asia Tenggara.</li>
            <li>
              Pengembangan chip AI berkinerja tinggi yang digunakan oleh
              perusahaan besar.
            </li>
            <li>
              Dinobatkan sebagai Top 10 perusahaan AI terinovatif selama lima
              tahun berturut-turut.
            </li>
          </ul>
        </div>

        <div className="mb-16 mt-10">
          <h3 className="text-4xl text-center font-semibold mb-6">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "jane sniper",
                title: "Chief Technology Officer",
                description:
                  "Berpengalaman dalam pengembangan AI dan memimpin tim inovasi teknologi kami.",
                imgSrc: "https://randomuser.me/api/portraits/women/45.jpg",
              },
              {
                name: "John Doe",
                title: "Lead Software Engineer",
                description:
                  "Spesialis dalam jaringan dan keamanan siber dengan pengalaman lebih dari 10 tahun.",
                imgSrc: "https://randomuser.me/api/portraits/men/34.jpg",
              },
              {
                name: "Jane Smith",
                title: "Product Manager",
                description:
                  "Mengelola strategi produk dan memastikan kualitas terbaik untuk setiap solusi yang kami tawarkan.",
                imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-blue-600"
                />
                <h4 className="text-2xl font-semibold">{member.name}</h4>
                <p className="text-blue-600">{member.title}</p>
                <p className="text-gray-700 text-center mt-2">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-semibold mb-6 text-blue-600">
            Join Us in Shaping the Future
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Bersama Naufal Technology, mari kita ciptakan masa depan yang
            lebih terhubung, aman, dan cerdas. Bergabunglah dengan kami dan
            rasakan dampak inovasi kami.
          </p>
          <button className="px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors">
            <Link href={"/contact"}>Contact Us</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
