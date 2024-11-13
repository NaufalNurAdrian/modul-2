import { Document } from "@contentful/rich-text-types";

export interface IProduct {
  fields: {
    title: string;
    slug: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    price: string;
    description: Document;
  };
}
