
import React from 'react'
import video from '@/assets/immigration.mp4'
const Hero = () => {
  return (
    <div className="pt-20 py-10 relative ">
      <div className="relative h-[400px] md:h-[600px] overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bg-black bg-opacity-70 top-0 left-0 h-full w-full flex flex-col space-y-8 items-center justify-center">
          <h1 className="text-white lg:text-5xl text-3xl font-bold tracking-wider md:tracking-widest text-center">
            Immigration Professional Consultancy Agency
          </h1>
          <h4 className="text-white text-lg md:text-3xl font-medium text-wrap text-center">
            Experience seamless immigration services with World Wings.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Hero