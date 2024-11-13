import { getProduct } from "@/libs/contentful";
import { IProduct } from "@/types/Product";
import Image from "next/image";

export default async function Product() {
  const data: IProduct[] = await getProduct();

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-slate-100 py-16">
      <div className="container mx-auto px-6 lg:px-12 mt-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-12">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center"
            >
              {/* Kontainer gambar dengan ukuran tetap */}
              <div className="w-full h-[200px] mb-6 overflow-hidden rounded-xl">
                <Image
                  src={`https:${item.fields.thumbnail.fields.file.url}`}
                  alt={item.fields.title}
                  width={320}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Judul produk */}
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                {item.fields.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
