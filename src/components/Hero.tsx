import type { FC } from "react";
import "./hero.css";
import Button from "./Button";

const Hero: FC = () => {
  return (
    <section id="hero">
      <p>PRECIZNA PROIZVODNJA · ČAČAK</p>
      <div>
        <p>
          DVA BRATA. <br />
          <span>JEDNA PRECIZNOST.</span>
        </p>
        <p>
          Bez preciznosti nema kvaliteta. <br />
          Bez kvaliteta nema poverenja.
          <Button variant="underlined" text="Naše mogućnosti" />
        </p>
      </div>
      <div>
        <img src="https://placehold.co/1920x1080" alt="hero image" />
        <p>DELOVI KOJI PRUŽAJU PERFORMANSE</p>
      </div>
    </section>
  );
};

export default Hero;
