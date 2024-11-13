import Testimonial from "@/components/testimonials";
import { getProduct } from "@/libs/contentful";
import { IProduct } from "@/types/Product";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Innovative AI and Technology Products",
  description: "Explore Naufal Technology's cutting-edge products designed to revolutionize industries with AI, networking, and tech innovation. Discover smart solutions and devices.",
  keywords: "AI technology, innovative products, smart devices, networking, chip manufacturing, tech solutions, Naufal Technology, advanced technology products",
  openGraph: {
    title: "Innovative AI and Technology Products",
    description: "Explore Naufal Technology's cutting-edge products designed to revolutionize industries with AI, networking, and tech innovation. Discover smart solutions and devices.",
    url: "https://naufal-technology.vercel.app/product",
    type: "website",
    images: [
      {
        url: "/product.png",
        width: 1200,
        height: 630,
        alt: "AI and Technology Products from Naufal Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative AI and Technology Products",
    description: "Explore Naufal Technology's cutting-edge products designed to revolutionize industries with AI, networking, and tech innovation.",
    images: ["/product.png"],
  },
};

export default async function Product() {
  const data: IProduct[] = await getProduct();

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-100 py-16">
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
              prefetch={false}
            >
              <div className="w-full h-[200px] mb-6 overflow-hidden rounded-xl">
                <Image
                  src={`https:${item.fields.thumbnail.fields.file.url}?fm=webp&fit=fill&w=320&h=200`}
                  alt={item.fields.title}
                  width={320}
                  height={200}
                  quality={80}
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                {item.fields.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <Testimonial />
      </div>
    </section>
  );
}
