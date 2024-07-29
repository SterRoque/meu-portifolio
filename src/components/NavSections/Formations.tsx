import { formations } from '@/constants/formation';
import { stacks } from '@/constants/stacks';
import Image from 'next/image';

export function Formations() {
   return (
      <div className='mx-4'>
         {formations.map((formation) => (
            <div
               key={formation.course}
               className='flex flex-col mb-8'>
               <h2 className='font-bold text-[20px]'>{formation.course}</h2>
               <span className='text-secondary text-sm'>{formation.name}</span>
               <span className='text-sm'>{formation.formationDate}</span>
               <p className='mt-2'>{formation.description}</p>
            </div>
         ))}

         <h1 className='font-bold mb-7'>Habilidades e Tecnologias</h1>

         <div className='flex flex-wrap gap-2'>
            {stacks.map((stack) => (
               <div className='flex bg-gray-custom rounded-md py-2 px-4 items-center gap-1 w-[48%]'>
                  <Image
                     src={stack.icon}
                     width={30}
                     height={30}
                     alt=''
                  />
                  <h3>{stack.stack}</h3>
               </div>
            ))}
         </div>
      </div>
   );
}
