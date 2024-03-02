import FeaturedButton from '@/components/FeaturedButton';
import React from 'react'
import { Link } from 'react-router-dom';
import aeroplane from '@/assets/aeroplane.png'
const Hero = () => {
  return (
    <div className="pt-20 relative w-full  ">
      <div className={`bg-cover bg-center h-[400px] md:h-[600px]  relative bg-[url('@/assets/herolanding.jpg')] bg-no-repeat `}>
        <div className="absolute bg-black bg-opacity-60 top-0 left-0 h-[400px] md:h-[600px]  w-full flex flex-col space-y-8 items-center justify-center">
          <h1 className="text-white lg:text-5xl text-3xl font-bold tracking-wider md:tracking-widest text-center">
            Logistics & Immigration Excellence
          </h1>
          <h4 className="text-white text-lg md:text-3xl font-medium text-wrap text-center">
            Experience seamless logistics and immigration services with World Wings.
          </h4>
          <div className="items-center space-x-5">
            <a href="#services">
              <FeaturedButton className="bg-brandBluish">Logistic</FeaturedButton>
            </a>
            <Link to="immigration">
              <FeaturedButton className="">Immigration</FeaturedButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:w-3/5 lg:w-2/5 bg-white absolute py-3 rounded-lg shadow-2xl bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="flex items-center space-x-3  w-full">
          <div className="w-1/4">
            <img src={aeroplane} alt=" rollinscodes.com" className="object-cover" />
          </div>
          <div className="">
            <p className="text-sm ">
              Experience seamless global mobility with our integrated services, offering both efficient logistics solutions and expert immigration
              services tailored to meet your diverse needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero