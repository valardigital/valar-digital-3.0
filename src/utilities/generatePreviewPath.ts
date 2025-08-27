import { PayloadRequest } from "payload";

const collectionPrefixMap: Record<string, string> = {
  blog: "/blog",
  caseStudy: "/caseStudy",
  pages: "", // Pages collection has no prefix
};

type Props = {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
  req: PayloadRequest;
};

export const generatePreviewPath = ({ collection, slug, req }: Props) => {
  // For pages collection, the path is just the slug
  // For other collections, add the collection prefix
  const path = collection === 'pages' ? `/${slug}` : `${collectionPrefixMap[collection]}/${slug}`;
  
  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path,
    previewSecret: process.env.PREVIEW_SECRET || "",
  });

  const url = `/next/preview?${encodedParams.toString()}`;
  return url;
}; 