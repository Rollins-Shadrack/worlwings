import React from 'react'
const Hero = () => {
  return (
    <div className="pt-20 py-10 ">
      <div className={`bg-cover bg-center h-[400px] md:h-[600px]  relative bg-[url('@/assets/contact.jpg')] bg-no-repeat  `}>
        <div className="absolute bg-black bg-opacity-60 top-0 left-0 h-[400px] md:h-[600px]  w-full flex flex-col space-y-8 items-center justify-center">
          <h1 className="text-white lg:text-5xl text-3xl font-bold tracking-wider md:tracking-widest">Contact Us</h1>
          <p className="text-white text-lg md:text-2xl font-medium text-wrap text-center w-3/5">
            Connect with World Wings, Your Gateway to Seamless Logistics and Immigration Services
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero