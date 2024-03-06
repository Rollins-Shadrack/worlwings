import Container from '@/components/Container'
import React from 'react'
import Hero from './sections/Hero'
import WhyChooseUs from './sections/WhyChooseUs';
import LogisticServices from './sections/LogisticServices';
import PlanningProcess from './sections/PlanningProcess';
import WhereWeShip from '../../components/WhereWeShip';
import CallToActionSection from '@/components/CallToActionSection';
import Testimonials from '../../components/Testimonials';
import { whereWeWorkCards } from '@/constants/homepage';
import Brands from './sections/Brands';

const index = () => {
  return (
    <div className="main-container">
      <Hero />
      <WhyChooseUs />
      <Container>
        <LogisticServices id="services" />
        <PlanningProcess />
        <WhereWeShip
          title="Shop and Ship from anywhere around the globe"
          styles="grid grid-cols-1 md:grid-cols-5 gap-10 my-7"
          data={whereWeWorkCards}
        />
        <Testimonials />
      </Container>
      <Brands />
      <CallToActionSection />
    </div>
  );
}

export default index