import React from 'react'
import {
    User,
    BriefcaseBusiness,
    Images,
    Share2,
    Smartphone,
    Search,
    ArrowRight,
    Sparkles,
    Globe2,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Fetures() {
    const features = [
        {
            icon: <User />,
            title: "Personal Branding",
            desc: "A website designed around your identity, personality, and professional image.",
        },
        {
            icon: <BriefcaseBusiness />,
            title: "About & Services",
            desc: "Clearly introduce yourself, what you do, and the services you offer.",
        },
        {
            icon: <Images />,
            title: "Portfolio Gallery",
            desc: "Showcase your best work, projects, achievements, or creative portfolio.",
        },
        {
            icon: <Share2 />,
            title: "Social Media Links",
            desc: "Connect visitors directly to your social media and professional profiles.",
        },
        {
            icon: <Smartphone />,
            title: "Mobile Responsive",
            desc: "A smooth experience across desktop, tablet, and mobile devices.",
        },
        {
            icon: <Search />,
            title: "Basic SEO",
            desc: "Built with essential SEO foundations to help search engines understand your website.",
        },
    ];

    return (
        <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
            <div className="relative md:w-11/12 mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="text-center">
                    <div className="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#05AFFF] text-[9px] md:text-[11px]">
                        <Sparkles className="size-[11px] md:size-[13px]" />
                        EVERYTHING YOU NEED
                    </div>
                    <h2 className="mt-2.5 md:mt-5 font-asap text-[20px] md:text-[48px] font-bold leading-tight"> One Website. <span className="block bg-gradient-to-r from-[#0371E4] to-[#05AFFF] bg-clip-text text-transparent">Your Complete Online Presence.</span></h2>
                    <p className="mt-1.5 md:mt-3 max-w-[650px] mx-auto text-[14px] md:text-[17px] text-[#FFFFFF99] leading-relaxed">Everything you need to introduce yourself, showcase your work, promote your services, and build a strong personal brand online.</p>
                </motion.div>
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-16 mt-6 md:mt-10 items-center">
                    <div className="grid sm:grid-cols-2 gap-2 md:gap-4">
                        {features.map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: index * 0.08 }} whileHover={{ y: -6, scale: 1.01 }} className="group relative p-2.5 md:p-5 rounded-[10px] md:rounded-[18px] bg-[#FFFFFF08] border border-[#FFFFFF14] overflow-hidden transition-all duration-300 hover:border-[#05AFFF]/50">
                                <div className="absolute -right-10 -top-10 size-[100px] rounded-full bg-[#0066FF]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative">
                                    <div className="size-[38px] md:size-[48px] rounded-[12px] bg-[#0066FF]/15 text-[#05AFFF] flex items-center justify-center border border-[#0066FF]/20">{item.icon}</div>
                                    <h3 className="mt-2 md:mt-4 text-[15px] md:text-[17px] font-semibold">{item.title}</h3>
                                    <p className="mt-1 md:mt-2 text-[11px] md:text-[13px] text-[#FFFFFF80] leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.7 }} className="relative">
                        <motion.div  animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative rounded-[12px] md:rounded-[24px] overflow-hidden border border-[#FFFFFF1A] bg-[#0C1020] shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                            <div className="h-[28px] md:h-[40px] px-2 md:px-4 flex items-center gap-1 md:gap-2 border-b border-[#FFFFFF12] bg-[#FFFFFF05]">
                                <span className="size-1.5 md:size-2.5 rounded-full bg-[#FF5F57]" />
                                <span className="size-1.5 md:size-2.5 rounded-full bg-[#FFBD2E]" />
                                <span className="size-1.5 md:size-2.5 rounded-full bg-[#28C840]" />
                                <div className="ml-1.5 md:ml-3 flex-1 max-w-[180px] h-[16px] md:h-[22px] rounded-full bg-[#FFFFFF08] flex items-center px-1.5 md:px-3">
                                    <Globe2 className="size-[9px] text-[#FFFFFF40]" />
                                    <span className="ml-2 text-[8px] text-[#FFFFFF40]">yourname.com</span>
                                </div>
                            </div>
                            <div className="p-3 md:p-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-1 md:gap-2">
                                        <div className="size-4 md:size-7 rounded-full bg-gradient-to-br from-[#0371E4] to-[#05AFFF]" />
                                        <span className="text-[8px] md:text-[12px] font-semibold">YOUR NAME</span>
                                    </div>
                                    <div className="hidden sm:flex gap-4 text-[8px] text-[#FFFFFF70]">
                                        <span>About</span>
                                        <span>Services</span>
                                        <span>Work</span>
                                        <span>Contact</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-12 grid grid-cols-[1.2fr_.8fr] gap-2 md:gap-4 items-center">

                                    <div>
                                        <p className="text-[8px] text-[#05AFFF]">
                                            HELLO, I'M
                                        </p>

                                        <h3 className="mt-2 text-[20px] md:text-[30px] font-bold leading-tight">
                                            Building ideas
                                            <br />
                                            into digital
                                            <span className="text-[#05AFFF]">
                                                {" "}experiences.
                                            </span>
                                        </h3>

                                        <p className="mt-3 text-[8px] md:text-[10px] leading-relaxed text-[#FFFFFF60]">
                                            I help brands and people create meaningful digital
                                            experiences through design and technology.
                                        </p>

                                        <div className="flex gap-2 mt-4">

                                            <button className="h-[25px] md:h-[30px] px-3 rounded-[5px] bg-[#0066FF] text-[8px]">
                                                My Work
                                            </button>

                                            <button className="h-[25px] md:h-[30px] px-3 rounded-[5px] border border-[#FFFFFF20] text-[8px]">
                                                Contact
                                            </button>

                                        </div>
                                    </div>


                                    {/* Profile Visual */}
                                    <div className="relative">

                                        <div className="aspect-square rounded-[14px] bg-gradient-to-br from-[#0066FF]/40 via-[#05AFFF]/15 to-[#9D4EDD]/30 border border-[#FFFFFF15] flex items-center justify-center">

                                            <div className="size-[55%] rounded-full bg-[#0E1528] border-2 border-[#05AFFF]/50 flex items-center justify-center">

                                                <User className="size-[35%] text-[#05AFFF]" />

                                            </div>

                                        </div>

                                        {/* Available badge */}
                                        <motion.div
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                            className="absolute -bottom-2 -left-4 px-2.5 py-1.5 rounded-[6px] bg-[#10182B] border border-[#FFFFFF15] text-[7px] md:text-[9px]"
                                        >
                                            <span className="inline-block size-1.5 rounded-full bg-[#00D98C] mr-1" />
                                            Available for work
                                        </motion.div>

                                    </div>

                                </div>


                                {/* Services */}
                                <div className="mt-8 md:mt-10">

                                    <div className="flex justify-between items-center">
                                        <p className="text-[8px] text-[#FFFFFF50]">
                                            WHAT I DO
                                        </p>

                                        <ArrowRight className="size-[10px] text-[#05AFFF]" />
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 mt-3">

                                        {[
                                            "Design",
                                            "Development",
                                            "Consulting",
                                        ].map((service, index) => (
                                            <motion.div
                                                key={service}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: index * 0.15 }}
                                                className="h-[45px] md:h-[60px] rounded-[7px] bg-[#FFFFFF06] border border-[#FFFFFF10] p-2"
                                            >
                                                <div className="size-3 rounded bg-[#0066FF]/30" />

                                                <p className="mt-2 text-[7px] md:text-[8px]">
                                                    {service}
                                                </p>
                                            </motion.div>
                                        ))}

                                    </div>

                                </div>


                                {/* Social links */}
                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#FFFFFF10]">

                                    <span className="text-[8px] text-[#FFFFFF50]">
                                        Let's connect
                                    </span>

                                    <div className="flex gap-2">

                                        {["in", "ig", "X"].map((social) => (
                                            <div
                                                key={social}
                                                className="size-[18px] rounded-[4px] bg-[#FFFFFF08] flex items-center justify-center text-[7px] text-[#FFFFFF70]"
                                            >
                                                {social}
                                            </div>
                                        ))}

                                    </div>

                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
