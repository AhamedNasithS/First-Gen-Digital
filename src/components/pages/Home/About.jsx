import React from 'react'
import banner from "../../images/about.webp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: false }} className='mb-5 md:mb-10 lg:mb-16 p-[20px] grid lg:grid-cols-2 gap-4 md:gap-20'>
        <div>
            <img src={banner} alt='banner' className='m-auto' loading='lazy' />
        </div>
        <div>
            <p className='text-[16px] md:text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#0371E4] to-[#05AFFF] font-normal'>About Us</p>
            <h3 className='mt-2 md:mt-8 text-[24px] md:text-[59px] font-bold font-asap'>We Started From the Beginning</h3>
            <p className='mt-2 md:mt-8 text-[14px] md:text-[22px] font-normal text-[#BABBBB]'>Too FirstGen Digital was founded by first-generation professionals who understand the importance of creating opportunities through technology. We help students, freelancers, and businesses build modern websites that showcase their skills, services, and achievements.</p>
        </div>
    </motion.div>
  )
}
