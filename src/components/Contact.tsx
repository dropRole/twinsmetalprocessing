import type { FC } from "react";
import "./contact.css";
import Button from "./Button";

const Contact: FC = () => {
  return (
    <section id="contact">
      <div>
        <p>Vaš projekat</p>
        <p>Želite mašinsku obradu?</p>
      </div>
      <div>
        <p>
          Kontaktirajte nas putem telefona ili pošaljite nam vaše nacrte i
          zahteve. Mi ćemo započeti prve korake.
        </p>
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
