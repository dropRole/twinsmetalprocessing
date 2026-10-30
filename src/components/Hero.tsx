import type { FC } from "react";
import "./hero.css";
import Button from "./Button";

const Hero: FC = () => {
  return (
    <section id="hero">
      <p>Precizna proizvodnja · Čačak</p>
      <div>
        <p>
          Dva brata. <br />
          <span>Jedna preciznost.</span>
        </p>
        <p>
          Bez preciznosti nema kvaliteta. <br />
          Bez kvaliteta nema poverenja.
          <Button variant="underlined" text="Naše mogućnosti" />
        </p>
      </div>
      <div>
        <img src="https://placehold.co/1920x1080" alt="hero image" />
        <p>Delovi koji pružaju performanse</p>
      </div>
    </section>
  );
};

export default Hero;
