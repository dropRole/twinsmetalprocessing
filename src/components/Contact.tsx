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
          Pošaljite nam vaše nacrte i zahteve. Mi ćemo započeti prve korake.
        </p>
        <Button
          variant="fill"
          text="twinsmetalprocessing@gmail.com"
          action={() =>
            (window.location.href = "mailto:twinsmetalprocessing@gmail.com")
          }
        />
      </div>
    </section>
  );
};

export default Contact;
