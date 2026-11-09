import type { FC } from "react";
import "./hero.css";
import Button from "./Button";
import heroImg from "../assets/images/hero.jpeg";
import { Trans, useTranslation } from "react-i18next";

const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero">
      <p>{t(($) => $["hero.productionLocation"])}</p>
      <div>
        <p>
          <Trans i18nKey="hero.slogans.main">
            Dva brata. <br />
            <span>Jedna preciznost.</span>
          </Trans>
        </p>
        <p>
          <Trans i18nKey="hero.slogans.sub">
            Bez preciznosti nema kvaliteta. <br />
            Bez kvaliteta nema poverenja.
          </Trans>
          <Button
            variant="underlined"
            text={t(($) => $["hero.anchorToServices"])}
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
        <p>{t(($) => $["hero.imageCaption"])}</p>
      </div>
    </section>
  );
};

export default Hero;
