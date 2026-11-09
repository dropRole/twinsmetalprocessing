import type { FC } from "react";
import "./services.css";
import { useTranslation } from "react-i18next";

type Services = {
  type: string;
  description: string;
}[];

const Services: FC = () => {
  const { t } = useTranslation();

  const services: Services = [
    {
      type: t(($) => $["services.serviceTypes.milling"]),
      description: t(($) => $["services.serviceDescriptions.milling"]),
    },
    {
      type: t(($) => $["services.serviceTypes.scarping"]),
      description: t(($) => $["services.serviceDescriptions.scarping"]),
    },
    {
      type: t(($) => $["services.serviceTypes.grinding"]),
      description: t(($) => $["services.serviceDescriptions.grinding"]),
    },
    {
      type: t(($) => $["services.serviceTypes.technicalDrawing"]),
      description: t(($) => $["services.serviceDescriptions.technicalDrawing"]),
    },
    {
      type: t(($) => $["services.serviceTypes.preciseProduction"]),
      description: t(
        ($) => $["services.serviceDescriptions.preciseProduction"],
      ),
    },
    {
      type: t(($) => $["services.serviceTypes.batchProduction"]),
      description: t(($) => $["services.serviceDescriptions.batchProduction"]),
    },
  ];

  return (
    <section id="services">
      <p>{t(($) => $["services.activity"])}</p>
      <p>{t(($) => $["services.heading"])}</p>
      <div>
        {services.map(({ type, description }) => (
          <div className="service" key={type}>
            <p>{type}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
