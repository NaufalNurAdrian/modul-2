import Recomendation from "@/components/recomendation";
import Share from "@/components/share";
import Wrapper from "@/components/wrapper";
import { getBlogs, getBlogsRecom, getBlogsSlug } from "@/libs/blog";
import { IBlogs } from "@/types/blog";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";

const options: Options = {
  renderNode: {
    [BLOCKS.OL_LIST]: (node, Children) => (
      <ol className="list-decimal m-4">{Children}</ol>
    ),
    [BLOCKS.PARAGRAPH]: (node, Children) => <p className="my-4">{Children}</p>,
  },
  renderMark: {
    [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
  },
};

export const generateStaticParams = async () => {
  const blogs: IBlogs[] = await getBlogs();
  return blogs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlogs = await getBlogsSlug(params.slug);

  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function DetailBlog({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlogs = await getBlogsSlug(params.slug);
  const blogNe: IBlogs[] = await getBlogsRecom(params.slug);

  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row w-full max-w-screen-lg px-4 gap-16" >
        {/* Sidebar Kiri (Rekomendasi & Share) */}
        <div className="flex flex-col w-full lg:w-[30%] mt-20 lg:mt-20 gap-8">
          <div>
            <h2 className="font-bold text-xl mb-4">Rekomendasi</h2>
            <Recomendation blogs={blogNe} />
          </div>
          <Share slug={blog.fields.slug} />
        </div>

        {/* Konten Utama */}
        <div className="flex-1 w-full lg:w-[70%] mt-10 lg:mt-20">
          {/* Kategori */}
          <div className="text-teal-500 font-semibold text-lg lg:text-xl mb-4">
            {blog.fields.category}
          </div>

          {/* Judul Artikel */}
          <h1 className="font-bold text-2xl lg:text-3xl mb-5 text-center">
            {blog.fields.title}
          </h1>

          {/* Informasi Penulis */}
          <div className="text-gray-500 flex flex-col lg:flex-row items-center justify-between text-sm lg:text-base mb-6">
            <div>{blog.fields.author.fields.name}</div>
            <div className="py-1 lg:py-0">{blog.fields.date}</div>
          </div>

          {/* Gambar Artikel */}
          <div className="w-full lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[500px] relative mx-auto rounded-xl overflow-hidden mb-8">
            <Image
              src={`https:${blog.fields.thumbnail.fields.file.url}`}
              alt={blog.fields.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Konten Artikel */}
          <div className="prose prose-sm lg:prose-lg max-w-none mx-auto">
            {documentToReactComponents(blog.fields.content, options)}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
