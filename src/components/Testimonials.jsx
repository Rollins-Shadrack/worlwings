import { testimonials } from '@/constants/homepage';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import RatingStars from '@/components/ui/rating-stars';

const Testimonials = () => {
  return (
    <div className="relative overflow-hidden py-10">
      <div className="mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-full space-y-4">
          <h1 className="md:text-4xl text-2xl tracking-wide font-bold  mb-3">What our clients say</h1>

          <div className="-m-2 mb-16 flex flex-wrap items-center justify-between">
            <div className="w-auto p-2">
              <h4 className="md:text-base text-xs  ">
                Our clients are delighted with our logistics services, finding seamless solutions to schedule shipments with their preferred
                destinations effortlessly
              </h4>
            </div>
            <div className="space-x-3">
              <CarouselPrevious className="relative inset-0 h-12 w-12 translate-x-0 translate-y-0 border-brandSunset bg-brandShell" />
              <CarouselNext className="relative inset-0 h-12 w-12 translate-x-0 translate-y-0 border-brandSunset bg-brandShell" />
            </div>
          </div>

          <CarouselContent className="-ml-3 md:-ml-2">
            {testimonials.map((testimonial, idx) => (
              <CarouselItem key={idx} className="cursor-pointer pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3 ">
                <div className="rounded-lg border bg-brandShell p-6 transition duration-200 bg-brandLighter bg-opacity-40 text-brandDark">
                  <div className="-m-0.5 mb-6 flex flex-wrap">
                    <RatingStars rating={testimonial.rating} size={"xl"} className="fill-yellow-500" />
                  </div>
                  <p className="mb-6 tracking-tight text-brandMidnight">{testimonial.review}</p>
                  <div className="-m-1.5 flex flex-wrap items-center">
                    <div className="w-auto p-1.5">
                      <h3 className="font-semibold tracking-tight text-brandMidnight">{testimonial.name}</h3>
                      <span className="text-sm tracking-tight text-brandTide">{testimonial.title}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials