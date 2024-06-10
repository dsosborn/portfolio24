import React, { Component } from "react";
import Image from "next/image";
// import Image from "next/image";
import logo from "/public/images/doug-osborne_logo.svg";

export const Header = () => (
  <header className="header">
    <Image className="logo" src={logo} alt="" />
  </header>
);
