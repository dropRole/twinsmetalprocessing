import type { FC, MouseEvent } from "react";
import "./nav.css";
import emblemIcon from "../assets/icons/emblem.webp";

type NavItems = {
  text: string;
  scrollTo: string;
}[];

type Langs = ["SR", "EN"];

const Nav: FC = () => {
  const items: NavItems = [
    {
      text: "Usluge",
      scrollTo: "section#services",
    },
    {
      text: "Proizvodi",
      scrollTo: "section#products",
    },
    {
      text: "Zašto mi",
      scrollTo: "section#whyUs",
    },
    {
      text: "Kontakt",
      scrollTo: "section#contact",
    },
  ];

  const langs: Langs = ["SR", "EN"];

  return (
    <nav>
      <p id="navTitle">
        <img src={emblemIcon} alt="emblem" />
        <span>T</span>wins<span>M</span>etal processing
      </p>
      <div id="navItems">
        {items.map(({ text, scrollTo }) => (
          <a
            key={text}
            href=""
            onClick={(e: MouseEvent) => {
              e.preventDefault();

              document
                .querySelector(scrollTo)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {text}
          </a>
        ))}
        <select id="navLangSwitcher">
          {langs.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Nav;
