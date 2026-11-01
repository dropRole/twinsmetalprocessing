import type { FC } from "react";
import Nav from "../layouts/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";

const Home: FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Products />
    </>
  );
};

export default Home;
