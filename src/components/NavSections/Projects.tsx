import { projects } from '@/constants/projects';
import Image from 'next/image';
import { CardProject } from '../CardProject';

export function Projects() {
   return (
      <div>
         {projects.map((project) => (
            <CardProject
               key={project.title}
               project={project}
            />
         ))}
      </div>
   );
}
