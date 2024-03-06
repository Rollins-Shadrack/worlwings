import FeaturedButton from '@/components/FeaturedButton';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { logisticServicesContent } from '@/constants/homepage';

const LogisticServices = () => {
  const [selectedServiceIdx, setSelectedServiceIdx] = useState(0)
  const selectedService = logisticServicesContent[selectedServiceIdx];
  return (
    <div className=" py-10" id="services">
      <div className="flex flex-col space-y-4">
        <h4 className="md:text-base text-xs text-brandBluish font-medium ">What we offer</h4>
        <h1 className="md:text-3xl text-xl  font-bold ">
          Explore our <span className="text-brandRed">Services</span>
        </h1>
        <div className="md:flex items-center md:space-x-5">
          <div className="md:w-10/12 mb-2">
            <p className="text-justify">
              You need to take advantage of your global market services. Our Shippers through online services are able to effectively manage cargo and
              bookings, standardize the tender process, access sailing schedules, submit shipping instructions, reviews bills of lading, create
              standardized reports and track & trace shipments around the globe
            </p>
          </div>
          <div className="mb-2 md:w-2/12">
            <Link to="/immigration">
              <FeaturedButton className="uppercase">Explore more</FeaturedButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full h-full">
            {logisticServicesContent.map((service, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} onClick={() => setSelectedServiceIdx(idx)}>
                <AccordionTrigger>{service.title}</AccordionTrigger>
                <AccordionContent>{service.serviceDesc}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="relative h-full w-full">
          <img src={selectedService.img} alt="rollinscodes.com" className="w-full h-full object-cover rounded-lg" />
          <div className="hidden md:block absolute bottom-0 right-0 p-2 bg-white lg:w-2/4 md:w-3/4 w-full rounded-lg">
            <p className="text-xs md:text-sm">{selectedService.minorDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogisticServices