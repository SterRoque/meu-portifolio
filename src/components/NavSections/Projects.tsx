import { projects } from '@/constants/projects';
import Image from 'next/image';
import { CardProject } from '../CardProject';

export function Projects() {
   return (
      <div className='md:grid md:grid-cols-2 md:gap-4'>
         {projects.map((project) => (
            <CardProject
               key={project.title}
               project={project}
            />
         ))}
      </div>
   );
}
