import imageUrlBuilder from "@sanity/image-url";

const clientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID || "0in8bix2",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    useCdn: false,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-03-09",
};

const builder = imageUrlBuilder(clientConfig);

export const heroImageSrc = (image: SanityImageType) =>
    builder.image(image).width(1455).height(635).auto("format").url();

export const formattedImageSrc = (imageId: string) =>
    builder.image(imageId).fit("max").width(1920).auto("format").url();

export const resizedImageSrc = (
    imageRecord: SanityImageType,
    widthNum: number,
    heightNum: number
) =>
    builder
        .image(imageRecord)
        .height(heightNum)
        .width(widthNum)
        .auto("format")
        .url();

export const thumbnailSrc = (imageId: string) =>
    builder.image(imageId).height(150).width(150).auto("format").url();

export const largeThumbSrc = (imageId: string) =>
    builder.image(imageId).height(400).width(400).auto("format").url();

export const projectTileSrcTall = (imageId: any) =>
    builder.image(imageId).height(500).width(250).auto("format").url();
export const projectTileSrcWide = (imageId: any) =>
    builder.image(imageId).height(250).width(500).auto("format").url();

// export function generateSrcSet(imageId: string) {
//     const widths = [320, 480, 768, 1024, 1440, 1920];
//     const srcSet = widths
//         .map(
//             (width) =>
//                 `${builder
//                     .image(imageId)
//                     .width(width)
//                     .auto("format")
//                     .url()} ${width}w`
//         )
//         .join(", ");

//     return srcSet;
// }
