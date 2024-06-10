// import classes from "./Cards.module.scss";
import { PortableTextComponents } from "@portabletext/react";

import Image from "next/image";
import { formattedImageSrc } from "$/utils/sanityImageUtils";
import Link from "next/link";
import { newsLink, projectLink, leaderLink } from "./linkGenerators";
export const customPortableTextComponents: PortableTextComponents = {
  marks: {
    internalLink: ({ value, children }) => {
      let { slug, refType } = value;
      if (refType === "post") {
        slug = newsLink(slug);
      }
      if (refType === "leader") {
        slug = leaderLink(slug);
      }
      if (refType === "project") {
        slug = projectLink(slug);
      } else slug = "/" + slug;
      const href = `${slug}${value.queryString ? value.queryString : ""}`;
      return (
        <Link className="standard-link" href={href}>
          {children}
        </Link>
      );
    },
    link: ({ value, children }) => {
      const { blank, href } = value;
      return (
        <a className="standard-link" href={href} target="_blank" rel="noopener">
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({
      value,
    }: {
      value: {
        image: {
          asset: { _ref: string };
          width: number;
          height: number;
        };
        full: boolean;
        imageUrl: string;
        imageBlur: string;
      };
    }) => (
      <Image
        // loader={sanityImageLoader}
        placeholder="blur"
        blurDataURL={value.imageBlur}
        src={
          value.image.asset._ref
            ? formattedImageSrc(value.image.asset._ref)
            : ""
        }
        // src = {slide.blur}
        alt=""
        width={value.image.width}
        height={value.image.height}

        // srcSet={generateSrcSet(
        //     slide.backgroundImage.asset._ref
        // )}
      />
    ),
  },
};
