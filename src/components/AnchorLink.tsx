"use client";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import classes from "./AnchorLink.module.scss";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const AnchorLink = () => {
  return (
    <button onClick={scrollToTop} className={classes.link} id="toTop">
      <span className="glyphicon glyphicon-triangle-top" aria-hidden="true" />
      <MdOutlineVerticalAlignTop /> Back to Top
    </button>
  );
};
