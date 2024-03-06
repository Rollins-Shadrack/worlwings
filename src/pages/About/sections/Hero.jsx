import React from 'react'
const Hero = () => {
  return (
    <div className="pt-20 py-10 ">
      <div className={`bg-cover bg-center h-[400px] md:h-[600px]  relative bg-[url('https://wallpaperaccess.com/full/5653640.jpg')] bg-no-repeat  `}>
        <div className="absolute bg-black bg-opacity-70 top-0 left-0 h-[400px] md:h-[600px]  w-full flex flex-col space-y-8 items-center justify-center">
          <p className="text-white text-lg md:text-2xl font-medium text-wrap text-center md:w-3/5">
            Welcome to World Wings Immigration consultants and Logistic services , Connecting Worlds!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero