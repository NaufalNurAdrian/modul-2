import resolveResponse from "contentful-resolve-response";

const base_url = process.env.CONTENTFUL_BASE_URL;
const spacesId = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_TOKEN;

export const getVideo = async () => {
  const res = await fetch(
    `${base_url}/spaces/${spacesId}/environments/master/entries?access_token=${token}&content_type=companyProfile`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);
  return result;
};
export const getProduct = async () => {
  const res = await fetch(
    `${base_url}/spaces/${spacesId}/environments/master/entries?access_token=${token}&content_type=product`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);
  return result;
};
export const getProductSlug = async (slug: string) => {
  const res = await fetch(
    `${base_url}/spaces/${spacesId}/environments/master/entries?access_token=${token}&content_type=product&fields.slug=${slug}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);
  return result[0];
};
