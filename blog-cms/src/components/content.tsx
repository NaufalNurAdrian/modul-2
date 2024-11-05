import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Content() {
  const data: IBlog[] = await getBlogs();
  console.log(data[0].fields.thumbnail);
  return (
    <div className="flex flex-row gap-20 rounded-xl justify-center p-10">
      {data.map((item, idx) => {
        return (
          <Link
            key={idx}
            href={`/${item.fields.slug}`}
            className="border shadow-xl rounded-xl"
          >
            <div className="flex flex-col p-5 gap-5">
              <div className="flex justify-center items-center rounded-xl overflow-hidden gap-5">
                <Image
                  src={`https:${item.fields.thumbnail.fields.file.url}`}
                  alt={item.fields.title}
                  width={300}
                  height={100}
                ></Image>
              </div>
              <div className="text-xl font-bold w-[300px]">
                {item.fields.title}
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <Image
                    src={`https:${item.fields.author.fields.avatar.fields.file.url}`}
                    alt={item.fields.author.fields.name}
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div className="flex flex-col">
                  <div>{item.fields.author.fields.name}</div>
                  <div>{item.fields.author.fields.email}</div>
                </div>
              </div>
              <div>{item.fields.date}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
