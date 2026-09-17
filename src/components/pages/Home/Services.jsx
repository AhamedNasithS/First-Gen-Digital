import React from 'react'
import check from "../../images/check.svg"
import checkBadge from "../../images/check-badge.svg"
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import GlareHover from '../../utils/ui/GlareHover';

export default function Services({ setWebType, setFormOpen }) {
    const priceList = [
        {
            title: "Student Portfolio",
            desc: "Build a professional online portfolio that helps you showcase your skills, projects and achievements.",
            price: "₹2,999",
            btn: "Get Started",
            lists: [
                "Personal Portfolio",
                "Projects Showcase",
                "Resume Download",
                "Skills & Certificates",
                "Mobile Responsive",
                "Contact Form"
            ],
            popular: false,
        },
        {
            title: "Personal Website",
            desc: "Create a professional online presence that represents your personal brand and work.",
            price: "₹4,999",
            btn: "Build My Website",
            lists: [
                "Personal Branding",
                "About & Services",
                "Portfolio Gallery",
                "Social Media Links",
                "Mobile Responsive",
                "Basic SEO"
            ],
            popular: true,
        },
        {
            title: "Business Website",
            desc: "A professional website designed to help customers discover, trust and contact your business.",
            price: "Starting at ₹7,999",
            btn: "Grow My Business",
            lists: [
                "Up to 5 Pages",
                "Professional UI/UX",
                "WhatsApp Integration",
                "Google Maps",
                "Contact Form",
                "Basic SEO Setup"
            ],
            popular: false,
        },
        {
            title: "Website Redesign",
            desc: "Transform your outdated website into a modern, faster and mobile-friendly experience.",
            price: "Starting at ₹4,999",
            btn: "Redesign Now",
            lists: [
                "Modern UI/UX",
                "Improved Mobile Experience",
                "Faster Performance",
                "SEO Improvements",
                "Better User Experience",
                "Updated Visual Identity"
            ],
            popular: false,
        },
    ]
    return (
        <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: false }} className='mb-5 md:mb-10 lg:mb-16 p-[20px] text-center'>
            <h3 className='font-asap text-[22px] md:text-[50px] font-bold'>Services</h3>
            <p className="text-[#FFFFFFB2] font-normal text-[12px] md:text-[20px] mt-3 md:mt-6">From personal portfolios to business websites, we create modern, <br className="hidden md:block" /> responsive, and high-performing digital experiences.</p>
            <div className='w-11/12 mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-6 md:mt-12'>
                {priceList?.map((item, index) => (
                    <div key={index} className={`bg-[#FFFFFF0D] border rounded-[14px] p-3 md:p-6 text-start relative flex flex-col ${item.popular ? "border-[#1D4F7A]" : "border-[#FFFFFF1A]"}`} style={{ boxShadow: "4px 6px 25px 0px #00000024" }}>
                        {item.popular && (<div className='bg-[#1D4F7A] rounded-[9px] py-0.5 px-3 text-[#A2D4FF] font-figtree text-[10px] font-semibold. absolute top-2.5 right-3.5'>Popular</div>)}
                        <h3 className='font-figtree font-semibold text-[20px]'>{item?.title}</h3>
                        <p className='mt-3 text-[#A7A7A7] font-figtree text-[12px] font-normal'>{item?.desc}</p>
                        <p className='mt-3 font-figtree text-[32px] md:text-[42px] font-semibold'>{item?.price}<span className='text-[#A1A0A0] font-figtree font-normal text-[12px]'>/Starting from</span></p>
                        <div className='my-6 flex flex-col gap-4'>
                            {item?.lists?.map((list, index) => (
                                <div key={index} className='flex gap-2 items-center text-[13px] md:text-[16px] font-medium font-figtree'>
                                    <img src={item.popular ? checkBadge : check} alt='check' className='w-[15px] md:w-auto' loading='lazy' />
                                    <p>{list}</p>
                                </div>
                            ))}
                        </div>
                        <button type='button' className={`w-full h-[44px] rounded-[10px] border-b-[2px] mt-auto font-medium text-[16px] hover:scale-105 transition-all duration-500 ${!item.popular ? "bg-gradient-to-tr from-[#FFFFFF] to-[#D9D9D9] border-[#A19D9D] text-[#0C0D0D]" : "bg-gradient-to-tr from-[#0371E4] to-[#05AFFF] border-[#1D4F7A]"}`} onClick={() => { setWebType(item?.title); setFormOpen(true) }}>{item?.btn}</button>
                    </div>
                ))}
            </div>
            <p className="text-[#FFFFFF] font-semibold text-[16px] md:text-[24px] mt-6 md:mt-12">Not sure which service is right for you?</p>
            <p className="text-[#FFFFFFB2] font-normal text-[12px] md:text-[20px] mt-1.5 md:mt-3">Tell us about your project and we'll help you choose the right solution.</p>
            <GlareHover
                width="200px"
                height="45px"
                background="#0066FF"
                borderRadius="10px"
                borderColor="#0066FF"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="mx-auto mt-3 md:mt-6"
                style={{
                    boxShadow:
                        "0px 0px 52.81px 0px #0066FF1A, 0px 0px 26.4px 0px #0066FF4D",
                }}
            >
                <button
                    type="button"
                    onClick={() => setFormOpen(true)}
                    className="w-full h-full flex items-center justify-center gap-1 text-white font-bold text-[14px]"
                >
                    Get Free Consultation
                    <ArrowRight className="size-[14px]" />
                </button>
            </GlareHover>
        </motion.div>
    )
}
