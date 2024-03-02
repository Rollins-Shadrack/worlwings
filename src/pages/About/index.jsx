import Container from "@/components/Container";
import React from "react";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Team from "./sections/Team";
import CallToActionSection from "@/components/CallToActionSection";

const index = () => {
  return (
    <div className="main-container">
      <Hero />
      <Container>
        <AboutUs />
        <Team />
      </Container>
      <CallToActionSection />
    </div>
  );
};

export default index;
