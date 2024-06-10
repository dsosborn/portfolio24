import React from "react";

export const Hero = () => (
  <div className="hero">
    <div className="row">
      <div className="col-md-6 col-md-push-3" id="herotext">
        <p>Hi, I&apos;m</p>
        <h1 className="myBigName">Doug Osborne</h1>
        <div id="hero-text2">
          <p>
            I design, code, and move ideas
            <br />
            from inception to perfection.
          </p>
        </div>
        {/* <button id="contact" className="btn heroButton">
          <span>Let's Work Together</span>
        </button> */}
        <a
          href="mailto:&#100;&#111;&#117;&#103;&#064;&#115;&#101;&#101;&#100;&#111;&#117;&#103;&#114;&#117;&#110;&#046;&#099;&#111;&#109;"
          id="contact"
          className="btn heroButton"
        >
          <span>Let&apos;s Work Together</span>
        </a>
      </div>
    </div>
  </div>
);
