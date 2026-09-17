import React from 'react'
import { motion } from "framer-motion";
import { LayoutDashboard, MessageCircle, Search, ShieldCheck } from 'lucide-react';

export default function Process() {
    const process = [
        {
            number: "01",
            icon: <Search className='size-[18px] md:size-[24px]' />,
            title: "Get Discovered",
            desc: "Give potential customers a professional place to find and learn about your business.",
        },
        {
            number: "02",
            icon: <ShieldCheck className='size-[18px] md:size-[24px]' />,
            title: "Build Trust",
            desc: "Create a strong first impression that helps customers feel confident choosing your business.",
        },
        {
            number: "03",
            icon: <LayoutDashboard className='size-[18px] md:size-[24px]' />,
            title: "Showcase Your Services",
            desc: "Clearly explain what you offer and help customers understand your business.",
        },
        {
            number: "04",
            icon: <MessageCircle className='size-[18px] md:size-[24px]' />,
            title: "Get More Enquiries",
            desc: "Make it easy for visitors to contact you through forms, calls or WhatsApp.",
        },
    ];

    return (
        <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
            <div className="md:w-11/12 mx-auto">
                <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false }} className="text-center max-w-[850px] mx-auto">
                    <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium">HOW YOUR WEBSITE HELPS YOU GROW</p>
                    <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold leading-tight">More than just a website. <span className="block text-[#05AFFF]">Built to support your business growth.</span></h2>
                    <p className="mt-3 md:mt-5 text-[12px] md:text-[16px] text-[#FFFFFF99]">A professional website helps your business get discovered, build trust and turn interested visitors into potential customers.</p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-4 md:mt-12">
                    {process.map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: index * 0.12 }} className="relative p-3 md:p-6 rounded-[10px] md:rounded-[18px] border border-[#FFFFFF1A] bg-[#FFFFFF08]">
                            <span className="text-[32px] md:text-[42px] font-bold text-[#0066FF]/40">{item.number}</span>
                            <div className="size-[36px] md:size-[48px] rounded-[8px] md:rounded-[12px] flex items-center justify-center bg-[#0066FF]/15 text-[#05AFFF]">{item.icon}</div>
                            <h3 className="mt-2 md:mt-4 text-[14px] md:text-[17px] font-semibold">{item.title}</h3>
                            <p className="mt-1.5 md:mt-3 text-[10px] md:text-[13px] text-[#FFFFFF99] leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
