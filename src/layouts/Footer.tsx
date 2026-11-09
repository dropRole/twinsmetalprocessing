import type { FC } from "react";
import "./footer.css";

const Footer: FC = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} TwinsMetal processing</p>
      <p>
        Razvio{" "}
        <a href="https://github.com/dropRole" target="_blank">
          DWE
        </a>
      </p>
    </footer>
  );
};

export default Footer;
