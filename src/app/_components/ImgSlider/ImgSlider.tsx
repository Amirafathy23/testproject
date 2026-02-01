'use client'
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export function ProductImg( {images }:{images:string[]}) {
  return (
    <Carousel 
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
     opts={{
    
    loop: true,
  }}
     className="w-full max-w-[12rem] sm:max-w-xs">
      <CarouselContent>
       {images.map((src , index)=>{ return   <CarouselItem key={index} >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Image width={300} height={400} className='w-full' src={src} alt={src} />
                    
                </CardContent>
              </Card>
            </div>
          </CarouselItem>})}
      
      </CarouselContent>
     
    </Carousel>
  )
}
