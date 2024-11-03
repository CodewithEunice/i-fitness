import Footer from "@/components/footer/Footer";
import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
const Home = () => {
  return (
    <>
      <Navbar />
      <main className=" flow-root">
        <Hero />
        <Benefits />
      </main>
      <Footer />
    </>
  );
};

export default Home;
