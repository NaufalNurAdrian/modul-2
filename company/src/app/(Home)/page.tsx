import Ceo from "@/components/ceo";
import History from "@/components/history";
import Testimonial from "@/components/testimonials";
import Video from "@/components/video";
import { getProduct } from "@/libs/contentful";
import { IProduct } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI, Chip Manufacturing, and Networking Solutions",
  description:
    "Naufal Technology's menyediakan solusi terbaik dalam Artificial Intelligence, manufaktur chip berkinerja tinggi, dan jaringan bisnis untuk membantu perusahaan Anda mencapai efisiensi maksimal.",
  keywords:
    "AI, artificial intelligence, chip manufacturing, networking, Naufal Technology's, solusi teknologi, manufaktur chip, solusi AI, bisnis jaringan",
  openGraph: {
    title: "Empowering Tomorrow with AI and Networking",
    description:
      "Solusi AI, manufaktur chip, dan jaringan dari Naufal Technology's membantu Anda mengoptimalkan kinerja bisnis dengan teknologi terdepan.",
    url: "https://naufal-technology.vercel.app/",
    type: "website",
    images: [
      {
        url: "/ntech.png",
        width: 800,
        height: 600,
        alt: "Naufal Technology's Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI and Networking Solutions",
    description:
      "Naufal Technology's menyediakan solusi inovatif dalam AI, manufaktur chip, dan jaringan bisnis.",
    images: ["/ntech.png"],
  },
};

export default async function Hero() {
  const services = [
    {
      title: "Networking",
      description:
        "Solusi jaringan yang handal dan efisien untuk meningkatkan performa dan keamanan bisnis.",
    },
    {
      title: "Artificial Intelligence (AI)",
      description:
        "Mendorong inovasi dengan solusi AI yang dapat diintegrasikan untuk berbagai sektor.",
    },
    {
      title: "Manufaktur Chip",
      description:
        "Mengembangkan chip berkinerja tinggi untuk mendukung perangkat elektronik masa depan.",
    },
  ];
  const data: IProduct[] = await getProduct();

  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center bg-slate-100 text-black">
        <header className="flex justify-center w-full max-w-6xl px-8 py-4">
          <div className="text-xl font-semibold">Empowering Tomorrow</div>
        </header>

        <div className="text-center">
          <h1 className="text-4xl md:text-8xl font-bold mb-4">
            Naufal Technology
          </h1>
          <p className="text-lg md:text-2xl">With Cutting-Edge Technology</p>
        </div>
      </section>
      <div>
        <Video />
      </div>
      <section
        id="services"
        className="py-16 bg-slate-100 h-[60vh] flex items-center text-black"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-slate-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-sm mb-6">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Ceo />
      <History />
      <section className="min-h-[70vh] bg-gradient-to-b from-slate-100 to-slate-100 py-16">
        <div className="container mx-auto px-6 lg:px-12 mt-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-black mb-12">
            Our Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {data.map((item, idx) => (
              <Link
                href={`/product/${item.fields.slug}`}
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center"
              >
                <div className="w-full h-[200px] mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={`https:${item.fields.thumbnail.fields.file.url}`}
                    alt={item.fields.title}
                    width={320}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  {item.fields.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Testimonial />
    </div>
  );
}
