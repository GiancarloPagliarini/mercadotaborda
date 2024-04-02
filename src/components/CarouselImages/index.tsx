import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { MdOutlineLocalOffer } from 'react-icons/md'
import { SlSocialInstagram } from 'react-icons/sl'
import { SiPix } from 'react-icons/si'

const CarouselImages = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              className="w-full h-[662px]"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full h-[662px]"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full h-[662px]"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 transform ml-4" />
        <CarouselNext className="absolute right-0 transform mr-4" />
      </Carousel>
      <div className="shadow-lg bg-white w-1/2 rounded-lg absolute top-full -translate-y-1/2 p-8">
        <ul className="flex gap-4 items-center justify-around">
          <li className="rounded flex items-center gap-4 font-bold text-lg cursor-pointer">
            <MdOutlineLocalOffer className="text-5xl text-verdeTaborda" />
            Receba nossas Ofertas
          </li>
          <div className="w-0.5 h-12 bg-slate-300">‎</div>
          <li className="rounded flex items-center gap-4 font-bold text-lg cursor-pointer">
            <SlSocialInstagram className="text-5xl text-verdeTaborda" />
            Nos siga no Instagram
          </li>
          <div className="w-0.5 h-12 bg-slate-300">‎</div>
          <li className="rounded flex items-center gap-4 font-bold text-lg cursor-pointer ">
            <SiPix className="text-5xl text-verdeTaborda" />
            Campanha do Pix
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CarouselImages
