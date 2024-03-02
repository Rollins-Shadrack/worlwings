import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { immigrationServices } from "@/constants/servicepage";
import React from "react";

const Service = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col space-y-4">
        <h4 className="md:text-base text-xs text-brandBluish font-medium ">Start Immigration right now</h4>
        <h1 className="md:text-3xl text-xl  font-bold ">
          Explore our <span className="text-brandRed">Services</span>
        </h1>
        <div className="md:flex items-center space-x-5">
          <div className="md:w-11/12 mb-2">
            <p className="text-justify">
              Unlock the potential of global opportunities with our immigration services. Our comprehensive online platform empowers migrants to
              efficiently manage applications, streamline the process, access essential information, submit necessary documents, review application
              status, generate standardized reports, and track the progress of immigration journeys worldwide.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {immigrationServices.map((card, idx) => (
          <Card key={idx} className="shadow-xl">
            <CardHeader className="py-3">
              <div className="flex items-center text-brandBluish">
                {React.createElement(card.icon, { size: "20" })}
                <h4 className="text-base ml-3 font-medium">{card.title}</h4>
              </div>
              <CardDescription>
                { card.desc}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Service;
