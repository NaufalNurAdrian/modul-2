import { getBlogs } from "@/libs/blog";
import { IBlogs } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Content() {
  const data: IBlogs[] = await getBlogs();
  console.log(data[0].fields.thumbnail);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 sm:p-10 mt-28">
      {data.map((item, idx) => {
        return (
          <Link
            key={idx}
            href={`/${item.fields.slug}`}
            className="border shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="flex flex-col p-5 gap-5">
              <div className="w-full h-64 relative rounded-xl overflow-hidden">
                {/* Set width dan height untuk proporsional layout pada desktop */}
                <Image
                  src={`https:${item.fields.thumbnail.fields.file.url}`}
                  alt={item.fields.title}
                  width={500}
                  height={300}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              
              <div className="text-lg font-bold">
                {item.fields.title}
              </div>
              
              <div className="flex items-center gap-4">
                <Image
                  src={`https:${item.fields.author.fields.avatar.fields.file.url}`}
                  alt={item.fields.author.fields.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-sm">
                  <div className="font-semibold">{item.fields.author.fields.name}</div>
                  <div className="text-gray-500">{item.fields.author.fields.email}</div>
                </div>
              </div>
              
              <div className="text-gray-400 text-sm mt-2">
                {item.fields.date}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
