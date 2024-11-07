import Wrapper from "@/components/wrapper";
import { getBlogs, getBlogsSlug } from "@/libs/blog";
import { IBlogs } from "@/types/blog";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import { title } from "process";

const options: Options = {
    renderNode: {
        [BLOCKS.OL_LIST]: (node, Children) => <ol className="list-decimal m-4">{Children}</ol>,
        [BLOCKS.PARAGRAPH]: (node, Children) => <p className="my-4">{Children}</p>
    },
    renderMark: {
        [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>
    }
};

export const generateStaticParams = async () => {
  const blogs: IBlogs[] = await getBlogs();
  return blogs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({params}: {params: {slug: string}}) {
    const blog: IBlogs = await getBlogsSlug(params.slug)

    return {
        title: blog.fields.title,
        description: blog.fields.title,
        authors: blog.fields.author.fields.name,
        openGraph: {
            images: [`https:${blog.fields.thumbnail.fields.file.url}`]
        }
    }
}

export default async function DetailBlog({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlogs = await getBlogsSlug(params.slug);
  console.log(blog);

  return (
    
    <Wrapper>
      <div className="px-4 lg:px-0">
        <div className="text-teal-500 font-semibold text-lg lg:text-xl">
          {blog.fields.category}
        </div>

        <div className="flex justify-center font-bold text-2xl lg:text-3xl p-3 lg:p-5 text-center">
          <h1>{blog.fields.title}</h1>
        </div>

        <div className="text-gray-500 flex flex-col lg:flex-row items-center justify-between text-sm lg:text-base mb-4">
          <div>{blog.fields.author.fields.name}</div>
          <div className="py-2 lg:py-0">{blog.fields.date}</div>
        </div>

        <div className="w-full lg:w-[800px] h-[400px] lg:h-[600px] relative mx-auto rounded-xl overflow-hidden mb-6">
          <Image
            src={`https:${blog.fields.thumbnail.fields.file.url}`}
            alt={blog.fields.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-sm lg:prose-lg max-w-none mx-auto">
          {documentToReactComponents(blog.fields.content, options)}
        </div>
      </div>
    </Wrapper>
  );
}
