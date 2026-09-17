import React from 'react'
import { motion } from "framer-motion";
import { BriefcaseBusiness, Clapperboard, Lightbulb, UserRound } from 'lucide-react';

export default function Why() {
    const audience = [
        {
            icon: <BriefcaseBusiness className='size-[18px] md:size-[24px]'/>,
            title: "Freelancers",
            desc: "Showcase your skills, services and previous work.",
        },
        {
            icon: <Clapperboard className='size-[18px] md:size-[24px]'/>,
            title: "Creators",
            desc: "Create one central place for your content and online presence.",
        },
        {
            icon: <UserRound className='size-[18px] md:size-[24px]'/>,
            title: "Professionals",
            desc: "Build a strong personal brand and professional identity.",
        },
        {
            icon: <Lightbulb className='size-[18px] md:size-[24px]'/>,
            title: "Consultants",
            desc: "Clearly explain your expertise and help potential clients contact you.",
        },
    ];
    return (
        <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
            <div className="md:w-11/12 mx-auto">
                <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="text-center">
                    <h2 className="text-[#05AFFF] text-[22px] md:text-[48px] font-bold">WHO IS THIS FOR?</h2>
                    <p className="mt-2.5 md:mt-5 text-[#FFFFFF99] max-w-[650px] mx-auto text-[12px] md:text-[16px]">Built for people who want a professional place to showcase who they are and what they do.</p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-5 md:mt-12">
                    {audience.map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: index * 0.12 }} whileHover={{ y: -8, borderColor: "rgba(5,175,255,0.5)", }} className="p-3 md:p-6 rounded-[12px] md:rounded-[18px] bg-[#FFFFFF08] border border-[#FFFFFF1A]">
                            <div className="size-[36px] md:size-[48px] rounded-[8px] md:rounded-[12px] flex items-center justify-center bg-[#0066FF]/15 text-[#05AFFF]">{item.icon}</div>
                            <h3 className="mt-2.5 md:mt-5 text-[14px] md:text-[18px] font-semibold">{item.title}</h3>
                            <p className="mt-1.5 md:mt-3 text-[12px] md:text-[14px] leading-relaxed text-[#FFFFFF99]">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
