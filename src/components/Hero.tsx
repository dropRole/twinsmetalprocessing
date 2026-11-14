import type { FC } from "react";
import "./hero.css";
import Button from "./Button";
import heroImg from "../assets/images/hero.webp";

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
          <Button
            variant="underlined"
            text="Naše mogućnosti"
            action={() => {
              document
                .querySelector("section#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </p>
      </div>
      <div>
        <img src={heroImg} alt="hero image" />
        <p>Delovi koji pružaju performanse</p>
      </div>
    </section>
  );
};

export default Hero;
