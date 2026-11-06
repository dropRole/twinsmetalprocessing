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
      description: "Izrada mašinskih delova od svih vrsta metala i plastike.",
    },
    {
      type: "CNC struganje",
      description:
        "Izdrada rotacionih delova kako serijiskih tako i pojedinacnih komada.",
    },
    {
      type: "Brušenje",
      description: "Finalna mašinska obrada površina.",
    },
    {
      type: "Izrada po tehničkon nacrtu",
      description:
        "Izrada mašinskih delova prema tehničkim crtežima, skicama i 3D CAD modelima.",
    },
    {
      type: "Precizna mašinska obrada",
      description:
        "Izrada metalnih i drugih mašinskih delova na CNC strugovima i glodalicama.",
    },
    {
      type: "Serijska proizvodnja",
      description:
        "Serijska izrada mašinskih delova na CNC glodalicama i strugovima.",
    },
  ];

  return (
    <section id="services">
      <p>Čime se bavimo</p>
      <p>Precizna i kvalitetna CNC mašinska obrada</p>
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
