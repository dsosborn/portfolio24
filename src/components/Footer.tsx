import React, { Component } from "react";
import classes from "./Footer.module.scss";
import { AnchorLink } from "./AnchorLink";

const Footer = () => {
  return (
    <footer className={"footer " + classes.footer}>
      <AnchorLink />
    </footer>
  );
};

export default Footer;
