import Image from "next/image";
import styles from "./page.module.css";
import { client } from "$/utils/sanityClient";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Projects } from "$/components/Projects";
import Footer from "$/components/Footer";
import { BackgroundImage } from "$/components/BackgroundImage";

export default async function Home() {
  const posts = await client.fetch<ProjectDataType[]>(
    `*[_type == "archiveProject"] | order(date desc){
      ...,
      "featuredImage": {
        "url": featuredImage.asset -> url,
          "height": featuredImage.asset -> metadata.dimensions.height,
          "width": featuredImage.asset -> metadata.dimensions.width,
      }
}`
  );
  return (
    <main>
      <BackgroundImage />
      <Header />
      <Hero />
      <Projects projects={posts} />
      <Footer />
    </main>
  );
}
