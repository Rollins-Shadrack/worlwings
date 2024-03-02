import React from 'react'
import aboutImage from '@/assets/air6.jpg'
import { aboutusContent } from '@/constants/aboutpage'

const AboutUs = () => {
  return (
    <div className="pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" flex flex-col space-y-4">
          <h4 className="md:text-base text-xs text-brandBluish font-medium ">{aboutusContent.subTitle}</h4>
          <h1 className="md:text-3xl text-xl text-brandRed font-bold ">{aboutusContent.title}</h1>
          <p className="text-justify">{aboutusContent.desc}</p>
          <h4 className="md:text-base text-xs text-brandBluish font-medium ">{aboutusContent.vision.title}</h4>
          <p className="text-justify">{aboutusContent.vision.desc}</p>
          <h4 className="md:text-base text-xs text-brandBluish font-medium ">{aboutusContent.mission.title}</h4>
          <p className="text-justify">{aboutusContent.mission.desc}</p>
        </div>
        <div className="w-full">
          <img src={aboutImage} alt="rollinscodes.com" className="rounded-lg w-full object-cover h-full" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs