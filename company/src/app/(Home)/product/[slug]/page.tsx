import { getProductSlug } from "@/libs/contentful";
import { IProduct } from "@/types/Product";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product: IProduct = await getProductSlug(params.slug);

  const { title, price, thumbnail } = product.fields;
  const imageUrl = `https:${thumbnail.fields.file.url}`;

  return {
    title: `${title} | Naufal Technology's`,
    description: `${title}`,
    keywords: `${title}, ${price}, AI, technology, product, innovation, chip manufacturing, networking`,
    openGraph: {
      title: `${title} - Naufal Technology's`,
      description: `${title}`,
      url: `https://naufal-technology.vercel.app/products/${params.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 800,
          alt: `Product image of ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Naufal Technology's`,
      description: `${title}`,
      images: [imageUrl],
    },
  };
}


export default async function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  const product: IProduct = await getProductSlug(params.slug);

  return (
    <div className="h-screen flex flex-col text-xl bg-slate-100 text-black gap-8">
      <div className="flex flex-row gap-5 mx-10 md:mx-40 mt-32">
        <div>
          <Image
            src={`https:${product.fields.thumbnail.fields.file.url}`}
            alt={product.fields.title}
            width={300}
            height={300}
            priority
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-bold">{product.fields.title}</h1>
          </div>
          <div>
            <h3 className="font-medium">{product.fields.price}</h3>
          </div>
        </div>
      </div>
      <div className="text-black mx-10 md:mx-40">
        {documentToReactComponents(product.fields.description)}
      </div>
    </div>
  );
}
