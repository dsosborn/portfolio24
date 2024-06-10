import imageUrlBuilder from "@sanity/image-url";

const clientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID || "0in8bix2",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    useCdn: false,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-03-09",
};

const builder = imageUrlBuilder(clientConfig);

function urlFor(source: string) {
    return builder.image(source);
}

export const sanityImageLoader = ({
    src,
    width,
    quality,
}: {
    src: string;
    width?: number;
    quality?: number;
}): string => {
    return urlFor("image-3a0f06079afc35b1e31ec53b36b96a7af5d78ba2-1680x734-jpg")
        .auto("format")
        .width(width || 1200)
        .quality(quality || 75)
        .url();
};
