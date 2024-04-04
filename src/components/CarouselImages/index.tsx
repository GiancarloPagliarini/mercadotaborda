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
          <CarouselItem className='sm:hidden'>
          <img
              className="w-full h-full" 
              src="../images/cellModel.png"
              alt="Exemplo para dispositivos móveis"
            />
          </CarouselItem>
          <CarouselItem className='hidden sm:block'>
            <img
              className="w-full h-[662px]"
              src="../images/Banner 1.png"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className='hidden sm:block'>
            <img
              className="w-full h-[662px]" 
              src="../images/Banner 2.png"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className='hidden sm:block'>
            <img
              className="w-full h-[662px]" 
              src="../images/Banner 3.png"
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 transform ml-4 hidden sm:flex" />
        <CarouselNext className="absolute right-0 transform mr-4 hidden sm:flex" />
      </Carousel>
      <div className="shadow-xl bg-zinc-100 sm:w-1/2 w-72 rounded-lg absolute top-full -translate-y-1/2 p-8">
        <ul className="sm:flex gap-4 items-center justify-around block">
          <li className="rounded flex items-center gap-4 font-bold sm:text-lg text-sm cursor-pointer">
            <MdOutlineLocalOffer className="sm:text-5xl text-4xl text-verdeTaborda" />
            Receba nossas Ofertas
          </li>
          <div className="sm:w-0.5 sm:h-12 h-0.5 mt-5 mb-5 bg-slate-300">‎</div>
          <li className="rounded flex items-center gap-4 font-bold sm:text-lg text-sm cursor-pointer">
            <SiPix className="sm:text-5xl text-4xl text-verdeTaborda" />
            Campanha do Pix
          </li>
          <div className="sm:w-0.5 sm:h-12 h-0.5 mt-5 mb-5 bg-slate-300">‎</div>
          <li className="rounded flex items-center gap-4 font-bold sm:text-lg text-sm cursor-pointer">
            <SlSocialInstagram className="sm:text-5xl text-4xl text-verdeTaborda" />
            Nos siga no Instagram
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CarouselImages
