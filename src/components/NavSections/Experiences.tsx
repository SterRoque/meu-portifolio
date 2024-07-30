import { experiences } from '@/constants/experiences';

export function Experiences() {
   return (
      <div>
         {experiences.map((experience) => (
            <div className='mx-4 p-7 bg-gray-custom mb-4 rounded-xl'>
               <h2 className='font-bold text-[20px]'>{experience.name}</h2>
               <div className='text-secondary text-sm'>{experience.role}</div>
               <span className='text-sm'>
                  {experience.start} - {experience.end}
               </span>
               <p className='mt-3'>{experience.description}</p>
            </div>
         ))}
      </div>
   );
}
