import Container from '@/components/Container'
import React from 'react'
import Hero from './sections/Hero'
import WhyChooseUs from './sections/WhyChooseUs';
import LogisticServices from './sections/LogisticServices';
import PlanningProcess from './sections/PlanningProcess';
import WhereWeShip from '../../components/WhereWeShip';
import CallToActionSection from '@/components/CallToActionSection';
import Testimonials from '../../components/Testimonials';

const index = () => {
  return (
    <div className="main-container">
      <Hero />
      <WhyChooseUs />
      <Container>
        <LogisticServices id="services" />
        <PlanningProcess />
        <WhereWeShip />
        <Testimonials/>
      </Container>
      <CallToActionSection />
    </div>
  );
}

export default index