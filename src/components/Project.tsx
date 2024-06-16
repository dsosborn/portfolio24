import React, { Component } from "react";
import classes from "./Project.module.scss";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { TfiNewWindow } from "react-icons/tfi";

const Project = ({ title, featuredImage, cta, url, body }: ProjectDataType) => {
  // return (
  //   <pre>
  //     <code>
  //       {JSON.stringify({ title, imageUrl, cta, url, body }, null, 2)}
  //     </code>
  //   </pre>
  // );
  return (
    <section className={"project " + classes.project}>
      <div className={classes.row}>
        <div className={"dimage dimage--glass " + classes.column}>
          <Image
            src={featuredImage.url}
            width={featuredImage.width}
            height={featuredImage.height}
            alt={`Visualization of ${title} website responsive sizing`}
            placeholder="blur"
            blurDataURL={featuredImage.blur}
          />
        </div>
        <div className={"siteDesc " + classes.column}>
          <h3>{title}</h3>
          <PortableText value={body} />
          {/* <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: body,
            }}
          /> */}
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              className={classes.link}
            >
              {cta}
              <TfiNewWindow />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
