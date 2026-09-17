import React from 'react'
import { motion } from "framer-motion";

export default function Process() {
    const process = [
        {
            number: "01",
            title: "Tell Us About You",
            desc: "Share your details, skills, projects and portfolio requirements.",
        },
        {
            number: "02",
            title: "We Design",
            desc: "We create a modern design that represents your personal brand.",
        },
        {
            number: "03",
            title: "We Build",
            desc: "Your portfolio is developed to be fast, responsive and easy to use.",
        },
        {
            number: "04",
            title: "Go Live",
            desc: "After your approval, your portfolio is ready to share with the world.",
        },
    ];

    return (
        <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
            <div className="md:w-11/12 mx-auto">
                <div className="text-center">
                    <p className="text-[#05AFFF] text-[10px] md:text-[13px]"> SIMPLE PROCESS</p>
                    <h2 className="mt-1.5 md:mt-3 text-[20px] md:text-[48px] font-bold">From Your Idea to Your Portfolio.</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-4 md:mt-12">
                    {process.map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: index * 0.12 }} className="relative p-3 md:p-6 rounded-[10px] md:rounded-[18px] border border-[#FFFFFF1A] bg-[#FFFFFF08]">
                            <span className="text-[32px] md:text-[42px] font-bold text-[#0066FF]/40">{item.number}</span>
                            <h3 className="mt-2 md:mt-4 text-[14px] md:text-[17px] font-semibold">{item.title}</h3>
                            <p className="mt-1.5 md:mt-3 text-[10px] md:text-[13px] text-[#FFFFFF99] leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
