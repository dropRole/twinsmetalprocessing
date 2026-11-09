import type { FC } from "react";
import "./whyus.css";
import { Trans, useTranslation } from "react-i18next";

type Reasons = {
  reason: string;
  details: string;
}[];

const WhyUs: FC = () => {
  const { t } = useTranslation();

  const reasons: Reasons = [
    {
      reason: t(($) => $["whyUs.reasons.precision"]),
      details: t(($) => $["whyUs.reasonDetails.precision"]),
    },
    {
      reason: t(($) => $["whyUs.reasons.planning"]),
      details: t(($) => $["whyUs.reasonDetails.planning"]),
    },
    {
      reason: t(($) => $["whyUs.reasons.communication"]),
      details: t(($) => $["whyUs.reasonDetails.communication"]),
    },
  ];

  return (
    <section id="whyUs">
      <div>
        <p>{t(($) => $["whyUs.choice"])}</p>
        <p>
          <Trans i18nKey="whyUs.heading">
            Dva pogleda. <br />
            Jedna savršena obrada.
          </Trans>
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
