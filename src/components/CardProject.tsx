import { IProject } from '@/types/project-types';
import Image from 'next/image';

type CardProject = {
   project: IProject;
};

export function CardProject({ project }: CardProject) {
   return (
      <div className='p-7 m-4 rounded-2xl bg-gray flex flex-col'>
         <h1 className='text-[20px] font-bold mb-5'>{project.title}</h1>
         <Image
            src={project.img}
            width={300}
            height={300}
            alt=''
            className='self-center w-full'
         />
         <p className='mt-5 w-full tracking-tight'>{project.description}</p>
         <ul className='flex flex-wrap gap-3 mt-6'>
            {project.stacks.map((stack) => (
               <li
                  className='bg-primary rounded-xl p-1 px-3 font-medium'
                  key={stack}>
                  {stack}
               </li>
            ))}
         </ul>
      </div>
   );
}
