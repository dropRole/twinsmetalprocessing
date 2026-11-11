import type { ChangeEvent, FC, MouseEvent } from "react";
import "./nav.css";
import emblemIcon from "../assets/icons/emblem.png";
import { useTranslation } from "react-i18next";

type NavItems = {
  text: string;
  scrollTo: string;
}[];

type Langs = ["SR", "EN"];

const Nav: FC = () => {
  const { t, i18n } = useTranslation();

  const items: NavItems = [
    {
      text: t(($) => $["nav.items.services"]),
      scrollTo: "section#services",
    },
    {
      text: t(($) => $["nav.items.products"]),
      scrollTo: "section#products",
    },
    {
      text: t(($) => $["nav.items.whyUs"]),
      scrollTo: "section#whyUs",
    },
    {
      text: t(($) => $["nav.items.contact"]),
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
        <select
          id="navLangSwitcher"
          onChange={(e: ChangeEvent) => i18n.changeLanguage(e.target.value)}
        >
          {langs.map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Nav;
