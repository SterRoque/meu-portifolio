import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import emailjs from '@emailjs/browser';

export function Contact() {
   const form = useRef<HTMLFormElement>(null);

   const sendEmail = (e: any) => {
      e.preventDefault();

      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            form.current!,
            {
               publicKey: process.env.NEXT_PUBLIC_KEY!,
            },
         )
         .then(
            () => {
               console.log('SUCCESS!');
            },
            (error) => {
               console.log('FAILED...', error.text);
            },
         );
   };

   console.log(process.env.NEXT_PUBLIC_TEMPLATE_ID);

   return (
      <div>
         <div className='mx-4 p-7 '>
            <h1 className='font-bold text-[20px] mb-3'>
               Informações de Contato
            </h1>

            <div className='flex items-center gap-3'>
               <MdOutlineMailOutline fontSize={30} />
               <div>
                  <span className='text-xs text-gray-400'>Email</span>
                  <a
                     href='mailto:stermiss2@gmail.com'
                     className='text-sm w-fit flex items-center rounded-lg'>
                     stermiss2@gmail.com
                  </a>
               </div>
            </div>
            <div className='flex items-center gap-3'>
               <FaWhatsapp fontSize={30} />
               <div>
                  <span className='text-xs text-gray-400'>Whatsapp</span>
                  <a
                     href='https://api.whatsapp.com/send/?phone=559784437986&text&type=phone_number&app_absent=0'
                     target='_blank'
                     className='text-sm flex items-center '>
                     +55 97 98443-7986
                  </a>
               </div>
            </div>
            <div className='flex items-center gap-3'>
               <FaGithub fontSize={30} />
               <div>
                  <span className='text-xs text-gray-400'>Github</span>
                  <a
                     href='https://github.com/SterRoque'
                     target='_blank'
                     className='text-sm flex items-center '>
                     github.com/SterRoque
                  </a>
               </div>
            </div>
            <div className='flex items-center gap-3'>
               <FaLinkedin fontSize={30} />
               <div>
                  <span className='text-xs text-gray-400'>LinkedIn</span>
                  <a
                     href='https://www.linkedin.com/in/sterphanevitoria'
                     target='_blank'
                     className='text-sm flex items-center '>
                     linkedin.com/sterphanevitoria
                  </a>
               </div>
            </div>
         </div>

         <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col gap-2 mx-4 bg-gray-custom p-7 rounded-xl'>
            <h2 className='font-bold text-[20px]'>Envie-me uma mensagem</h2>
            <input
               type='text'
               placeholder='Seu nome'
               name='from_name'
               className='bg-transparent border-b-2 border-b-gray-300 focus:outline-none py-2'
            />
            <input
               type='email'
               placeholder='Seu email'
               name='email'
               className='bg-transparent border-b-2 border-b-gray-300 focus:outline-none py-2'
            />
            <input
               type='text'
               placeholder='Escreva o assunto que deseja conversar'
               name='subject'
               className='bg-transparent border-b-2 border-b-gray-300 focus:outline-none py-2'
            />
            <textarea
               name='message'
               placeholder='Escreva sua mensagem'
               rows={5}
               className='bg-transparent mt-2 border-2 border-b-gray-300 focus:outline-none py-2 rounded-md resize-none'></textarea>

            <button
               type='submit'
               className='bg-primary p-4 py-2 rounded-md'>
               Enviar
            </button>
         </form>
      </div>
   );
}
