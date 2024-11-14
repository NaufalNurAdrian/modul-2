import Ceo from "@/components/ceo";
import Hero from "@/components/hero";
import History from "@/components/history";
import Services from "@/components/services";
import Testimonial from "@/components/testimonials";
import Video from "@/components/video";
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

export default async function Home() {

  const data: IProduct[] = await getProduct();

  return (
    <div className="text-black">
      <Hero />
      <Video />
      <Services />
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
                    priority={idx === 0}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold text-center">
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
