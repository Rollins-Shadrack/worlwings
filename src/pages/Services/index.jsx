import Container from "@/components/Container";
import React from "react";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Service from "./sections/Service";
import WhereWeShip from "@/components/WhereWeShip";
import CallToActionSection from "@/components/CallToActionSection";
import HowWeWork from "./sections/HowWeWork";

const index = () => {
  return (
    <div className="main-container">
      <Hero />
      <Container>
        <Stats />
        <Service />
        <WhereWeShip />
        <HowWeWork />
      </Container>
      <CallToActionSection />
    </div>
  );
};

export default index;
