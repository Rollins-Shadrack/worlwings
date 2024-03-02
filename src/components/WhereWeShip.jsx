import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { whereWeWorkCards } from '@/constants/homepage';
import React from 'react'

const WhereWeShip = () => {
  return (
    <div className="w-full">
      <h4 className="md:text-base text-xs text-brandBluish font-medium ">Where we Work</h4>
      <h1 className="md:text-4xl text-2xl tracking-wide font-bold  mb-3 md:w-5/12">
        Shop from <span className="text-brandRed"> Anywhere</span> and <span className="text-brandRed"> Relocate</span> with us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-7">
        {whereWeWorkCards.map((card, idx) => (
          <Card key={idx}>
            <div className="relative">
              <img src={card.img} alt="rollinscodes.com" className="h-52 w-full object-cover rounded-t-lg" />
              <div className="absolute bottom-0 left-0 bg-white rounded-sm p-2">
                <img src={card.flag} alt="rollinscodes.com" className="w-10 object-cover" />
              </div>
            </div>
            <CardHeader className="py-3">
              <CardTitle className="text-lg">{card.title}</CardTitle>
              <CardDescription>{card.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WhereWeShip