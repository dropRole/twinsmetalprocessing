import type { FC } from "react";
import "./contact.css";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Contact: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <div>
        <p>{t(($) => $["contact.project"])}</p>
        <p>{t(($) => $["contact.heading"])}</p>
      </div>
      <div>
        <p>{t(($) => $["contact.invitation"])}</p>
        <Button
          variant="fill"
          text="twinsmetalprocessing@gmail.com"
          action={() =>
            (window.location.href = "mailto:twinsmetalprocessing@gmail.com")
          }
        />
        <p>
          <span>&#9990;</span> +381 60 6770 194/ +381 66 8134848
        </p>
      </div>
    </section>
  );
};

export default Contact;
