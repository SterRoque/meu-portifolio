'use client';

import Image from 'next/image';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { truncateText } from '@/utils/truncate-text';
import { useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import { PiSuitcaseSimple } from 'react-icons/pi';

export default function Home() {
   const [expanded, setExpanded] = useState(false);
   const text =
      'Sou Sterphane Roque, desenvolvedora front-end com mais de 2 anos de experiência em projetos freelance. Meu interesse em TI começou em 2019, durante meu curso técnico em informática, onde estudei C, C++, Java, PHP, SQL, HTML, CSS e JavaScript. Formei-me em 2021 e desenvolvi um projeto de conclusão de curso utilizando Java no Android Studio. Atualmente, me especializo em front-end e mobile com React e React Native, e pretendo expandir meus conhecimentos para o backend.';
   const limit = 340;
   const toggleText = () => {
      setExpanded(!expanded);
   };
   const textToShow = expanded ? text : truncateText(text, limit);

   return (
      <main className='flex flex-col p-4'>
         <div className='flex flex-col text-center w-full items-center'>
            <Image
               src='https://github.com/Sterzinha.png'
               width={200}
               height={200}
               alt='Sterphane Roque'
               className='w-32 rounded-3xl flex self-center border-[#BD93F9] border-4 mb-3'
            />
            <h3 className='text-sm text-[#50FA7B]'>Desenvolvedora Front-End</h3>
            <h1 className='font-bold text-2xl'>Sterphane Roque</h1>

            {/* <a
               href='mailto:stermiss2@gmail.com'
               className='text-sm border-[1px] border-gray-50 w-fit flex items-center p-3 py-1 rounded-lg mb-3 gap-2'>
               <MdOutlineMailOutline />
               stermiss2@gmail.com
            </a>
            <a
               href='https://api.whatsapp.com/send/?phone=559784437986&text&type=phone_number&app_absent=0'
               target='_blank'
               className='text-sm border-[1px] border-gray-50 w-fit flex items-center p-3 py-1 rounded-lg gap-2'>
               <FaWhatsapp />
               +55 97 98443-7986
            </a> */}
         </div>

         <div className='mt-10 flex flex-col gap-4 bg-[#343644] rounded-xl p-7'>
            <h3 className='font-semibold text-lg text-[#BD93F9]'>Sobre mim</h3>
            <p className='text-lg text-gray-300 tracking-tighter text-justify border-t-[1px] border-b-[1px] py-3 border-gray-400'>
               {textToShow}

               {text.length > limit && (
                  <button
                     onClick={toggleText}
                     className='text-[#BD93F9]'>
                     {expanded ? 'Ler menos' : 'Ler mais'}
                  </button>
               )}
            </p>
            <span className='flex gap-2 items-center text-sm'>
               {' '}
               <GrLocation fontSize={20} />
               Wenceslau Braz, Paraná, Brasil
            </span>
            <span className='flex gap-2 items-center text-sm'>
               {' '}
               <PiSuitcaseSimple fontSize={20} />
               Desenvolvedora Front-End
            </span>
         </div>
      </main>
   );
}
