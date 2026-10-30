import type { FC } from "react";
import "./services.css";

type Services = {
  type: string;
  description: string;
}[];

const Services: FC = () => {
  const services: Services = [
    {
      type: "CNC glodanje",
      description: "",
    },
    {
      type: "CNC struganje",
      description: "",
    },
    {
      type: "Brušenje",
      description: "",
    },
    {
      type: "Izrada delova po tehničkon nacrtu",
      description: "",
    },
    {
      type: "Precizna mašinska obrada",
      description: "",
    },
    {
      type: "Serijska proizvodnja",
      description: "",
    },
  ];

  return (
    <section id="services">
      <p>Čime se bavimo</p>
      <p>Precizna i kvalitetna CNC mašinska obrada</p>
      <div>
        {services.map(({ type, description }) => (
          <div key={type}>
            <p>{type}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
