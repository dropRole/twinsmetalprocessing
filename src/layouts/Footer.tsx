import type { FC } from "react";
import "./footer.css";

const Footer: FC = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} TwinsMetalProcessing</p>
      <p>
        Built by{" "}
        <a href="https://github.com/dropRole" target="_blank">
          DWE
        </a>
      </p>
    </footer>
  );
};

export default Footer;
