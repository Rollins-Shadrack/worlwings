
import React from 'react'
const Hero = () => {
  return (
    <div className="pt-20 py-10 ">
      <div
        className={`bg-cover bg-center h-[400px] md:h-[600px] relative bg-[url('https://images.unsplash.com/photo-1609220136736-443140cffec6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1taWdyYXRpb24lMjBmYW1pbHklMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D')] bg-no-repeat  `}>
        <div className="absolute bg-black bg-opacity-60 top-0 left-0 h-[400px] md:h-[600px]  w-full flex flex-col space-y-8 items-center justify-center">
          <h1 className="text-white lg:text-5xl text-3xl font-bold tracking-wider md:tracking-widest">Expert <span className="text-brandRed">Immigration</span> Proffesionals</h1>
          <h4 className="text-white text-lg md:text-2xl font-medium text-wrap text-center w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Hero