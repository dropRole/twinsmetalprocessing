import type { FC } from "react";
import Nav from "../layouts/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";

const Home: FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Products />
      <WhyUs />
      <Contact />
    </>
  );
};

export default Home;
