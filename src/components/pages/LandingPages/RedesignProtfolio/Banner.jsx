import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import banner from "../../../images/redesign.webp"

export default function Banner({ handleGetStarted }) {
    return (
        <section className="relative min-h-[80vh] flex items-center px-[20px] md:px-0">
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#0066FF]/20 blur-[140px] rounded-full" />
            <div className="relative z-10 md:w-11/12 mx-auto grid lg:grid-cols-2 gap-6 md:gap-12 items-center pt-20 pb-[20px] md:py-20 xl:pt-[170px]">
                <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                    <div className="inline-flex items-center gap-1 md:gap-2 px-1.5 md:px-3 py-0.5 md:py-1.5 rounded-full border border-[#0066FF]/40 bg-[#0066FF]/10 text-[#5AB1FF] text-[10px] md:text-[12px]"><Sparkles className='size-[12px] md:size-[14px]' />WEBSITE REDESIGN</div>
                    <h1 className="mt-1.5 md:mt-3 font-asap text-[24px] md:text-[60px] font-bold md:leading-[1.08]">Your website <span className='block'> shouldn't feel </span> <span className="block bg-gradient-to-r from-[#0371E4] to-[#05AFFF] bg-clip-text text-transparent">stuck in the past.</span></h1>
                    <p className="mt-1.5 md:mt-3 text-[#FFFFFFB2] text-[13px] md:text-[15px] md:text-[18px] leading-relaxed max-w-[580px]">Transform your outdated website into a modern, fast and mobile-friendly experience designed to better represent your brand.</p>
                    <div className="flex items-end gap-2 mt-2 md:mt-4">
                        <span className="text-[30px] md:text-[52px] font-bold">₹3,999</span>
                        <span className="text-[#A1A0A0] text-[10px] md:text-[13px] mb-2 md:mb-4">Starting from</span>
                    </div>
                    <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={handleGetStarted} className="w-[200px] md:w-[260px] h-[40px] md:h-[50px] rounded-[10px] text-[14px] md:text-[16px] flex items-center justify-center gap-3 bg-gradient-to-r from-[#0371E4] to-[#05AFFF] shadow-[0_0_30px_rgba(0,102,255,0.35)]">
                        Redesign My Website
                        <ArrowRight size={18} />
                    </motion.button>
                    <div className="flex flex-wrap gap-3 md:gap-5 mt-3 md:mt-4 text-[11px] md:text-[13px] text-[#FFFFFF99]">
                        <span>✓ Modern UI/UX</span>
                        <span>✓ Mobile Friendly</span>
                        <span>✓ Performance Focused</span>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0, y: [0, -12, 0] }} transition={{ opacity: { duration: 0.7 }, x: { duration: 0.7 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} className="relative flex justify-center">
                    <div className="relative w-full max-w-[520px] lg:max-w-[700px] rounded-[26px] border border-[#FFFFFF1A] bg-[#FFFFFF08] p-1.5 md:p-3">
                        <img src={banner} alt="Student Portfolio" className="w-full rounded-[18px]" loading='lazy' />
                    </div>
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="hidden md:block absolute -left-4 md:left-0 top-[20%] px-4 py-3 rounded-[12px] bg-[#10172A]/90 backdrop-blur-xl border border-[#FFFFFF1A]">
                        <div className="flex gap-3 items-center">
                            <div className="size-9 rounded-[8px] bg-[#0066FF]/20 flex items-center justify-center text-[#05AFFF]">
                                <Code2 size={17} />
                            </div>
                            <div>
                                <p className="text-[12px] font-semibold">Showcase Skills</p>
                                <p className="text-[10px] text-[#FFFFFF80]">Stand out professionally</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
