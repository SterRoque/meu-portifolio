import { IProject } from '@/types/project-types';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { IoGlobeOutline } from 'react-icons/io5';
import { LinkTag } from './LinkTag';
import Link from 'next/link';

type CardProject = {
   project: IProject;
};

export function CardProject({ project }: CardProject) {
   return (
      <div className='p-7 m-4 md:m-0 rounded-2xl bg-gray-custom flex flex-col'>
         <h1 className='text-[20px] font-bold mb-5'>{project.title}</h1>
         <Image
            src={project.img}
            width={300}
            height={300}
            alt=''
            className='self-center w-full md:h-[200px] rounded-lg'
         />
         <p className='mt-5 w-full tracking-tight border-t-[1px] border-b-[1px] py-3 border-gray-500'>
            {project.description}
         </p>
         <div className='flex self-center gap-4 mt-3'>
            <LinkTag
               href={project.urlGithub}
               isDisabled={!project.urlGithub}
               target='_blank'>
               <FaGithub
                  className={`cursor-pointer ${
                     !project.urlGithub ? 'text-gray-500' : undefined
                  }`}
                  fontSize={30}
               />
            </LinkTag>

            <LinkTag
               href={project.urlSite}
               isDisabled={!project.urlSite}
               target='_blank'>
               <IoGlobeOutline
                  className={`cursor-pointer ${
                     !project.urlSite ? 'text-gray-500' : undefined
                  }`}
                  fontSize={30}
               />
            </LinkTag>
         </div>

         <Link
            href={`/projeto/${project.id}`}
            className='bg-gray-600 rounded-lg text-center h-10 flex justify-center items-center mt-5 hover:scale-105 transition-all border border-gray-800'>
            Ver mais sobre o projeto
         </Link>
         <ul className='flex flex-wrap gap-3 mt-6'>
            {project.stacks.map((stack) => (
               <li
                  className='bg-primary rounded-xl p-1 px-3 font-medium md:text-sm shadow-lg'
                  key={stack}>
                  {stack}
               </li>
            ))}
         </ul>
      </div>
   );
}
