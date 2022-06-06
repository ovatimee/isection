import React, { useEffect, useState } from "react";
import { images } from "../../assets";

import "./Header.scss";

const Header = () => {
  return (
    <div className="container">
      <section className="app__container">
    <div className="hero-image">
        <picture >
          <source
            media="(min-width: 768px)"
            srcSet={images.heroDesktop}
            alt="main image"
            className="hero-img"
          />
          <img className="main__hero-img row-span-2" src={images.heroMobile} />
        </picture>
    </div>
    <div className="hero-content">
        <div className="main__content col-1">
          <h1 className="heading">Make Remote Work</h1>
          <p className="text">
            Get your team in sync, no matter your location. <br /> Streamline
            processes, create team rituals, and <br /> watch productivity soar.
          </p>
          <a href="http://" className="btn-primary">
            Learn More
          </a>
        </div>
        <div className="social-icons">
          <img src={images.databiz} />
          <img src={images.audiophile} />
          <img src={images.meet} />
          <img src={images.make} />
        </div>
    </div>
      </section>
    </div>
  );
};

export default Header;
