'use client';

import Image from 'next/image';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { truncateText } from '@/utils/truncate-text';
import { useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import { PiSuitcaseSimple } from 'react-icons/pi';
import { NavSections } from '@/components/NavSections';
import { FaCode } from 'react-icons/fa6';
import { HiAcademicCap } from 'react-icons/hi2';
import { AiFillTool } from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';

export default function Home() {
   const [expanded, setExpanded] = useState(false);
   const [menuItems, setMenuItems] = useState([
      {
         component: NavSections.Projects,
         title: 'Projetos',
         icon: <FaCode className='text-2xl' />,
         isActive: true,
      },
      {
         component: NavSections.Formations,
         title: 'Formação',
         icon: <HiAcademicCap className='text-2xl' />,
         isActive: false,
      },
      {
         component: NavSections.Experiences,
         title: 'Experiência',
         icon: <AiFillTool className='text-2xl' />,
         isActive: false,
      },
      {
         component: NavSections.Contact,
         title: 'Contato',
         icon: <IoMdContact className='text-2xl' />,
         isActive: false,
      },
   ]);

   const currentContent = menuItems.find((item) => item.isActive);
   const CurrentActiveSection =
      currentContent?.component ?? NavSections.Projects;

   const text =
      'Sou Sterphane Roque, desenvolvedora front-end com mais de 2 anos de experiência em projetos freelance. Meu interesse em TI começou em 2019, durante meu curso técnico em informática, onde estudei C, C++, Java, PHP, SQL, HTML, CSS e JavaScript. Formei-me em 2021 e desenvolvi um projeto de conclusão de curso utilizando Java no Android Studio. Atualmente, me especializo em front-end e mobile com React e React Native, e pretendo expandir meus conhecimentos para o backend.';
   const limit = 340;
   const toggleText = () => {
      setExpanded(!expanded);
   };
   const textToShow = expanded ? text : truncateText(text, limit);

   function handleNavigateToSection(index: number) {
      setMenuItems((prev) => {
         const updatedMenuItems = [...prev];

         updatedMenuItems.forEach((menuItem) => {
            if (menuItem.isActive) {
               menuItem.isActive = false;
            }
         });

         updatedMenuItems[index].isActive = true;

         return updatedMenuItems;
      });
   }

   return (
      <main className='flex flex-col md:w-full md:items-center py-8'>
         <div className='md:max-w-screen-md '>
            <div className='flex flex-col text-center w-full items-center'>
               <Image
                  src='https://github.com/Sterzinha.png'
                  width={200}
                  height={200}
                  alt='Sterphane Roque'
                  className='w-32 rounded-3xl flex self-center border-[#BD93F9] border-4 mb-3'
               />
               <h3 className='text-sm text-[#50FA7B]'>
                  Desenvolvedora Front-End
               </h3>
               <h1 className='font-bold text-2xl'>Sterphane Roque</h1>
            </div>

            <div className='mt-10 mx-4 flex flex-col gap-4 bg-gray-custom rounded-xl p-7'>
               <h3 className='font-semibold text-lg text-primary'>Sobre mim</h3>
               <p className='text-base text-gray-300 tracking-tighter text-justify border-t-[1px] border-b-[1px] py-3 border-gray-400'>
                  {textToShow}

                  {text.length > limit && (
                     <button
                        onClick={toggleText}
                        className='text-primary'>
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

            <div className='mx-1 md:mx-4 flex flex-col'>
               <nav className='flex gap-3 overflow-x-scroll md:overflow-hidden mt-7 mb-7 md:justify-between'>
                  {menuItems.map((item, index) => (
                     <a
                        key={item.title}
                        className={`cursor-pointer flex gap-1 items-center text-sm active:text-primary uppercase md:justify-center md:w-full hover:bg-gray-custom ${
                           item.isActive
                              ? 'border-b-2 border-primary text-primary py-2'
                              : 'none'
                        }`}
                        onClick={() => handleNavigateToSection(index)}>
                        {item.icon}
                        {item.title}
                     </a>
                  ))}
               </nav>
               <CurrentActiveSection />
            </div>
         </div>
      </main>
   );
}
