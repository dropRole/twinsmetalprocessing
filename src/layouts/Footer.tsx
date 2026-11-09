import type { FC } from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <p>© {new Date().getFullYear()} TwinsMetal processing</p>
      <p>
        {t(($) => $["footer.developed"])}
        <a href="https://github.com/dropRole" target="_blank">
          DWE
        </a>
      </p>
    </footer>
  );
};

export default Footer;
