import Testimonial from "@/components/testimonials";
import { getProduct } from "@/libs/contentful";
import { IProduct } from "@/types/Product";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Innovative AI and Technology Products",
  description:
    "Explore Naufal Technology's cutting-edge products designed to revolutionize industries with AI, networking, and tech innovation.",
  keywords:
    "AI technology, innovative products, smart devices, networking, tech solutions, Naufal Technology",
  openGraph: {
    title: "Innovative AI and Technology Products",
    description:
      "Explore Naufal Technology's cutting-edge products designed to revolutionize industries with AI, networking, and tech innovation.",
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
    description:
      "Explore Naufal Technology's cutting-edge products designed to revolutionize industries with AI and tech innovation.",
    images: ["/product.png"],
  },
};

export default async function Product() {
  const data: IProduct[] = await getProduct();

  return (
    <section className="min-h-screen bg-slate-100 text-black mt-16 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Our Products
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, idx) => (
            <Link
              href={`/product/${item.fields.slug}`}
              key={idx}
              className="rounded-lg p-4 hover:bg-gray-100 transition-colors"
              prefetch={false}
            >
              <div className="aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={`https:${item.fields.thumbnail.fields.file.url}?fm=webp&fit=fill&w=320&h=200`}
                  alt={item.fields.title}
                  width={320}
                  height={200}
                  quality={80}
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h2 className="text-lg font-semibold text-center">
                {item.fields.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Testimonial />
      </div>
    </section>
  );
}
