const base_url = process.env.CONTENTFUL_BASE_URL;
const spacesId = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_TOKEN;

import resolveResponse from "contentful-resolve-response";

export const getBlogs = async () => {
  const res = await fetch(
    `${base_url}/spaces/${spacesId}/environments/master/entries?access_token=${token}&content_type=blog`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);
  return result;
};

export const getBlogsSlug = async (slug: string) => {
  const res = await fetch(
    `${base_url}/spaces/${spacesId}/environments/master/entries?access_token=${token}&content_type=blog&fields.slug=${slug}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);
  return result[0];
};