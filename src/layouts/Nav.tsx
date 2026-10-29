import type { FC } from "react";
import "./nav.css";

const Nav: FC = () => {
  return (
    <nav>
      <p>
        <span>T</span>wins<span>M</span>etal<span>P</span>rocessing
      </p>
      <div>
        <a href="">Usluge</a>
        <a href="">Proizvodi</a>
        <a href="">Zašto mi</a>
        <a href="">Kontakt</a>
        <select name="lang">
          <option value="">SR</option>
          <option value="">ENG</option>
        </select>
      </div>
    </nav>
  );
};

export default Nav;
