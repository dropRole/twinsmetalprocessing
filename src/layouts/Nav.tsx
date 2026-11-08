import type { FC } from "react";
import "./nav.css";

type NavItems = {
  text: string;
  href: string;
}[];

type Langs = ["SR", "EN"];

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

  const langs: Langs = ["SR", "EN"];

  return (
    <nav>
      <p id="navTitle">
        <span>T</span>wins<span>M</span>etal<span>P</span>rocessing
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
