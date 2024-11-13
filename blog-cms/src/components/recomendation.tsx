import { IBlogs } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function Recomendation({ blogs }: { blogs: IBlogs[] }) {
  return (
    <div className="flex w-[350px] flex-col gap-4 p-1">
      {blogs.map((item, idx) => (
        <Link
        href={`/${item.fields.slug}`}
          key={idx}
          className="flex flex-col sm:flex-row w-full max-w-[500px] gap-4 mx-auto"
        >
          {/* Bagian Gambar */}
          <div className="relative w-[120px] h-[80px] flex-shrink-0 border rounded-lg overflow-hidden">
            <Image
              src={`https:${item.fields.thumbnail.fields.file.url}`}
              alt={item.fields.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Bagian Konten */}
          <div className="flex-1">
            <div className="font-semibold text-sm sm:text-base line-clamp-2">
              {item.fields.title}
            </div>
            <div className="flex flex-row text-xs sm:text-sm text-gray-600 gap-2">
              <p>{item.fields.author.fields.name}</p>
              <span className="hidden sm:inline">|</span>
              <p>{item.fields.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
