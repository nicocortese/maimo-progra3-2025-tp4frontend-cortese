import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop>
        <source src="/assets/videos/cooking_wok.mp4" type="video/mp4" />
      </video>
      <h1>The best recipes</h1>
    </section>
  );
};

export default Hero;
