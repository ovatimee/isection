import React from "react";
import Navbar from "./components/Navbar";
import heroBg from "./assets/image-hero-desktop.png";
import databiz from "./assets/client-databiz.svg";
import phile from "./assets/client-audiophile.svg";
import meet from "./assets/client-meet.svg";
import maker from "./assets/client-maker.svg";

import "./app.scss";

const app = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <div className="main__content">
          <h1 className="bold-text">
            Make <br /> Remote Work
          </h1>
          <p className="p-text">
            Get your team in sync, no matter your location. <br /> Streamline
            processes, create team rituals, and <br /> watch productivity soar.
          </p>
          <a href="http://" className="btn-primary">
            Lean More
          </a>
        </div>
        <div className="main__hero-img">
          <img src={heroBg} alt="main image" className="hero-img" />
        </div>
        <div className="social-icons">
          <img src={databiz} />
          <img src={phile} />
          <img src={meet} />
          <img src={maker} />
        </div>
      </main>
    </>
  );
};

export default app;
