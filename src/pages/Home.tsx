import type { FC } from "react";
import Nav from "../layouts/Nav";
import Hero from "../components/Hero";

const Home: FC = () => {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
};

export default Home;
