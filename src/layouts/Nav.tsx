import type { FC } from "react";
import "./nav.css";
import emblemIcon from "../assets/icons/emblem.png";

type NavItems = {
  text: string;
  href: string;
}[];

type Langs = ["SR", "ENG"];

const Nav: FC = () => {
  const items: NavItems = [
    {
      text: "Usluge",
      href: "",
    },
    {
      text: "Proizvodi",
      href: "",
    },
    {
      text: "Zašto mi",
      href: "",
    },
    {
      text: "Kontakt",
      href: "",
    },
  ];

  const langs: Langs = ["SR", "ENG"];

  return (
    <nav>
      <p id="navTitle">
        <img src={emblemIcon} alt="emblem" />
        <span>T</span>wins<span>M</span>etal processing
      </p>
      <div id="navItems">
        {items.map(({ href, text }) => (
          <a key={text} href={href}>
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
