import type { FC } from "react";
import "./whyus.css";

type Reasons = {
  reason: string;
  details: string;
}[];

const WhyUs: FC = () => {
  const reasons: Reasons = [
    { reason: "Preciznost", details: "Tačnost nije opcija već pravilo." },
    {
      reason: "Planiranje",
      details: "Svakom projektu se pristupa po specifičnim zahtevima.",
    },
    {
      reason: "Komunikacija",
      details: "Agilnost i učinkovitost pri poslovanju.",
    },
  ];

  return (
    <section id="whyUs">
      <div>
        <p>Zašto mi</p>
        <p>
          Dva pogleda. <br />
          Jedna savršena obrada.
        </p>
      </div>
      <div>
        {reasons.map(({ reason, details }) => (
          <div key={reason} className="reason">
            <p>{reason}</p>
            <p>{details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
