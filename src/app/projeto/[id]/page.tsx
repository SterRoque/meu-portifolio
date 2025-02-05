'use client';

import { projects } from '@/constants/projects';
import { notFound } from 'next/navigation';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type ProjectPageProps = {
   params: { id: string };
};

export default function Project({ params }: ProjectPageProps) {
   const project = projects.find((p) => p.id === params.id);
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   const swiperRef = useRef(null);

   const onSwiperChange = (swiper: any) => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
   };

   if (!project) {
      return notFound();
   }

   return (
      <div className='max-w-[800px] w-full mx-auto px-5  mt-10 pb-20'>
         <h1 className='font-bold text-2xl mb-10'>{project.title}</h1>

         <h2 className='font-bold text-xl mb-3'>Sobre o projeto</h2>
         <p>{project.descriptionDetails}</p>

         <h2 className='font-bold text-xl mt-10 mb-5'>Telas do projeto</h2>

         <Swiper
            onSlideChange={(swiper) => onSwiperChange(swiper)}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{
               delay: 8000,
               disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
               prevEl: '#prev',
               nextEl: '#next',
            }}
            breakpoints={{
               0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },

               768: {
                  slidesPerView: project.imgScreens.length === 1 ? 1 : 2,
                  spaceBetween: 15,
               },
               1024: {
                  slidesPerView: project.imgScreens.length === 1 ? 1 : 3,
                  spaceBetween: 20,
               },
            }}
            style={{
               paddingBottom: 40,
            }}>
            {project.imgScreens.map((screen) => (
               <SwiperSlide key={screen}>
                  <img
                     src={screen}
                     alt=''
                  />
               </SwiperSlide>
            ))}
         </Swiper>
         <div className='flex gap-2 items-center justify-center'>
            <button
               className={`py-2 px-4 rounded-lg ${
                  isBeginning
                     ? 'bg-purple-300 cursor-not-allowed'
                     : 'bg-purple-400'
               }`}
               id='prev'
               disabled={isBeginning}>
               <IoIosArrowBack
                  color='white'
                  fontSize={24}
               />
            </button>
            <button
               className={`py-2 px-4 rounded-lg ${
                  isEnd ? 'bg-purple-300 cursor-not-allowed' : 'bg-purple-400'
               }`}
               id='next'
               disabled={isEnd}>
               <IoIosArrowForward
                  color='white'
                  fontSize={24}
               />
            </button>
         </div>

         <h2 className='font-bold text-xl mt-10 mb-5'>
            Tecnologias utilizadas
         </h2>
         <ul className='list-disc pl-5'>
            {project.technologies?.map((tech) => (
               <li
                  key={tech}
                  dangerouslySetInnerHTML={{ __html: tech }}
               />
            ))}
         </ul>
         <h2 className='font-bold text-xl mt-10 mb-5'>Funcionalidades</h2>
         <ul className='list-disc pl-5 flex flex-col gap-3'>
            {project.features?.map((feat) => (
               <li
                  key={feat}
                  dangerouslySetInnerHTML={{ __html: feat }}
               />
            ))}
         </ul>

         <h2 className='font-bold text-xl mt-10 mb-5'>Conclusão</h2>
         <p>{project.conclusion}</p>
      </div>
   );
}
