import { getProductSlug } from "@/libs/contentful";
import { IProduct } from "@/types/Product";

export async function generateMetadata({
    params,
  }: {
    params: { slug: string };
  }) {
    const product: IProduct = await getProductSlug(params.slug);
  
    const { title, price, description, thumbnail } = product.fields;
  
    // Ensure the correct type for description
    const plainTextDescription = extractPlainText(description as unknown as RichTextNode);
  
    return {
      title: `${title} | Naufal Technology's`,
      description: plainTextDescription ? plainTextDescription.slice(0, 150) + "..." : title,
      keywords: `${title}, ${price}, AI, technology, product, innovation, chip manufacturing, networking`,
      openGraph: {
        title: `${title} - Naufal Technology's`,
        description: plainTextDescription ? plainTextDescription.slice(0, 150) + "..." : title,
        url: `https://naufal-technology.vercel.app/products/${params.slug}`,
        type: "product",
        images: [
          {
            url: `https:${thumbnail.fields.file.url}`,
            width: 1200,
            height: 800,
            alt: `Product image of ${title}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} - Naufal Technology's`,
        description: plainTextDescription ? plainTextDescription.slice(0, 150) + "..." : title,
        images: [`https:${thumbnail.fields.file.url}`],
      },
    };
  }