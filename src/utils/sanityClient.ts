// ./src/utils/sanity/client.ts
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECTID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

export const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
};

export const client = createClient(clientConfig);
