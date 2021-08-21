import React from "react";
import Button from "../../UI/Button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <Button className="hero__button">Explore More</Button>
        <p className="hero__overview-text">
          Many of the ex-hippies who started companies like Apple, or the early
          online bulletin boards dedicated to organic food and following the
          Grateful Dead, were an odd combination of liberals and libertarians.
        </p>
      </div>
    </div>
  );
};

export default Hero;
