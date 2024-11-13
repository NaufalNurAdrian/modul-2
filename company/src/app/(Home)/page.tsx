import Ceo from "@/components/ceo";
import History from "@/components/history";
import Testimonial from "@/components/testimonials";
import { getProduct } from "@/libs/contentful";
import { IProduct } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI, Chip Manufacturing, and Networking Solutions",
  description:
    "Naufal Technology menyediakan solusi terbaik dalam Artificial Intelligence, manufaktur chip berkinerja tinggi, dan jaringan bisnis.",
  keywords:
    "AI, chip manufacturing, networking, Naufal Technology, solusi teknologi",
  openGraph: {
    title: "Empowering Tomorrow with AI and Networking",
    description:
      "Solusi AI, manufaktur chip, dan jaringan dari Naufal Technology membantu Anda mengoptimalkan kinerja bisnis dengan teknologi terdepan.",
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
      "Naufal Technology menyediakan solusi inovatif dalam AI, manufaktur chip, dan jaringan bisnis.",
    images: ["/ntech.png"],
  },
};

export default async function Hero() {
  const services = [
    {
      title: "Networking",
      description:
        "Solusi jaringan yang handal dan efisien untuk meningkatkan performa bisnis.",
    },
    {
      title: "Artificial Intelligence (AI)",
      description:
        "Solusi AI yang dapat diintegrasikan untuk berbagai sektor.",
    },
    {
      title: "Manufaktur Chip",
      description:
        "Chip berkinerja tinggi untuk perangkat elektronik masa depan.",
    },
  ];
  const data: IProduct[] = await getProduct();

  return (
    <div className="text-black">
      <section className="flex flex-col h-screen justify-center items-center bg-slate-100 py-8 text-black">
        <header className="w-full max-w-5xl px-4 py-2">
          <div className="text-xl font-semibold text-center">Empowering Tomorrow</div>
        </header>
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Naufal Technology
          </h1>
          <p className="text-md md:text-xl">With Cutting-Edge Technology</p>
        </div>
      </section>

      <section className="flex py-8 bg-slate-100 h-[60vh]">
        <div className="flex flex-col justify-center max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ceo />
      <History />

      <section className="py-12 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Our Products
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item, idx) => (
              <Link
                href={`/product/${item.fields.slug}`}
                key={idx}
                className="rounded-lg p-4 transition-transform hover:scale-105"
                prefetch={false}
              >
                <div className="w-full aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={`https:${item.fields.thumbnail.fields.file.url}?fm=webp&fit=fill&w=320&h=200`}
                    alt={item.fields.title}
                    width={320}
                    height={200}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold text-center">{item.fields.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonial />
    </div>
  );
}
