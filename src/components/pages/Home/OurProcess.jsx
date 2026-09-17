import React from 'react'
import { motion } from "framer-motion";

export default function OurProcess() {
    const steps = [
        { id: 1, title: "Free Consultation", side: "left" },
        { id: 2, title: "UI/UX Design", side: "right" },
        { id: 3, title: "Development", side: "left" },
        { id: 4, title: "Testing", side: "right" },
        { id: 5, title: "Launch", side: "left" },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: false }} className="relative mb-5 md:mb-10 lg:mb-16 p-[20px] text-center">
            <h3 className='font-asap text-[22px] md:text-[50px] font-bold'>Typical Project Timeline</h3>
            <p className="text-[#FFFFFFB2] font-normal text-[12px] md:text-[20px] mt-3 md:mt-6">Most projects are completed in 3-7 days</p>
            <div className="relative mt-6 md:mt-12 md:w-9/12 lg:w-7/12 xl:w-1/2 2xl:w-4/12 mx-auto">
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="absolute left-1/2 top-0 h-full w-[1.5px] md:w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#0066FF] to-[#00D98C] rounded-full" />
                {steps.map((step, index) => (
                    <motion.div
                        initial={{
                            opacity: 0,
                            rotate: step.side === "left" ? -10 : 10,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            rotate: step.side === "left" ? 0 : 0,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        viewport={{ once: false }}
                        key={step.id} className={`relative mb-5 md:mb-11 flex items-center text-start ${step.side === "left" ? "justify-start" : "justify-end"}`}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: false }}
                            className={`absolute left-1/2 z-20 size-2  md:h-4 md:w-4 -translate-x-1/2 rounded-full border md:border-2 border-[#0A0E27] ${index === 0 ? "bg-[#0066FF]" : index === 1 ? "bg-[#00D98C]" : index === 2 ? "bg-[#9D4EDD]" : index === 3 ? "bg-[#FF6B6B]" : "bg-[#32ADE6]"}`} />
                        <div className={`w-[150px] h-[75px] md:w-[240px] md:h-[106px] rounded-[10px] md:rounded-[14px] border border-[#FFFFFF33] bg-[#FFFFFF1A] p-2 md:p-6`} style={{ boxShadow: "4px 6px 25px 0px #00000024" }}>
                            <span className="text-[10px] md:text-[14px] font-normal text-[#00D98C]">Step {step.id}</span>
                            <h3 className="mt-1 text-[16px] md:text-[24px] font-normal">{step.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
