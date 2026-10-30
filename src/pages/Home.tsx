import type { FC } from "react";
import Nav from "../layouts/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home: FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
    </>
  );
};

export default Home;
