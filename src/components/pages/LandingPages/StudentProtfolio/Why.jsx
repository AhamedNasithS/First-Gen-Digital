import React from 'react'
import { motion } from "framer-motion";
import { BriefcaseBusiness, FolderGit2, Send } from 'lucide-react';

export default function Why() {
    const data = [
        {
            icon: <BriefcaseBusiness className='size-[18px] md:size-[24px]' />,
            title: "Make a Strong First Impression",
            desc: "Present yourself professionally to recruiters and potential employers.",
        },
        {
            icon: <FolderGit2 className='size-[18px] md:size-[24px]' />,
            title: "Show Real Work",
            desc: "Let your projects demonstrate your skills and experience.",
        },
        {
            icon: <Send className='size-[18px] md:size-[24px]' />,
            title: "Easy to Share",
            desc: "One professional link you can add to your resume and LinkedIn.",
        },
    ]
    return (
        <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
            <div className="md:w-11/12 mx-auto">
                <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="text-center">
                    <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium">WHY YOU NEED ONE</p>
                    <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold">Your Skills Deserve More <span className="block text-[#05AFFF]">Than Just a Resume.</span></h2>
                    <p className="mt-2.5 md:mt-5 text-[#FFFFFF99] max-w-[650px] mx-auto text-[12px] md:text-[16px]">A portfolio gives you a professional space to show what you can actually do—not just list it.</p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-3 md:gap-5 mt-5 md:mt-12">
                    {data.map((item, index) => (
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
