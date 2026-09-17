import React from 'react'
import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, Check, Code2, FileText, FolderGit2, Mail, Smartphone, User } from 'lucide-react';

export default function Fetures() {
    const features = [
        {
            icon: <User />,
            title: "Personal Portfolio",
            desc: "A professional online presence designed around your identity and career goals.",
        },
        {
            icon: <FolderGit2 />,
            title: "Projects Showcase",
            desc: "Present your best projects with clear details, images and links.",
        },
        {
            icon: <FileText />,
            title: "Resume Download",
            desc: "Allow recruiters and visitors to download your resume instantly.",
        },
        {
            icon: <Award />,
            title: "Skills & Certificates",
            desc: "Highlight your technical skills, achievements and certifications.",
        },
        {
            icon: <Smartphone />,
            title: "Mobile Responsive",
            desc: "Your portfolio will look great on desktop, tablet and mobile.",
        },
        {
            icon: <Mail />,
            title: "Contact Form",
            desc: "Make it easy for recruiters and potential clients to contact you.",
        },
    ];

    return (
        <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
            <div className="md:w-11/12 mx-auto grid lg:grid-cols-2 gap-7 md:gap-14 items-center">
                <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }}>
                    <p className="text-[#05AFFF] text-[10px] md:text-[13px]">EVERYTHING YOU NEED</p>
                    <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold">Built to Showcase <br /> Your Best Work.</h2>
                    <p className="mt-2.5 md:mt-5 text-[#FFFFFF99] max-w-[650px] mx-auto text-[12px] md:text-[16px]">Your portfolio includes the essential sections needed to present yourself, your work and your achievements professionally.</p>
                    <div className="grid sm:grid-cols-2 gap-2 md:gap-4 mt-4 md:mt-8">
                        {features.map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex gap-3 items-start">
                                <div className="mt-1 text-[#05AFFF]">
                                    <Check className='size-[14px] md:size-[18px]' />
                                </div>
                                <div>
                                    <h4 className="font-medium text-[12px] md:text-[15px]">{item.title}</h4>
                                    <p className="mt-0.5 md:mt-1 text-[10px] md:text-[12px] text-[#FFFFFF80] leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
                    <div className="absolute inset-0 bg-[#0066FF]/15 blur-[100px]" />
                    <div className="relative w-full max-w-[520px] mx-auto rounded-[12px] md:rounded-[20px] overflow-hidden border border-[#FFFFFF1A] bg-[#0D1224] shadow-2xl my-auto">
                        <div className="h-[28px] md:h-[38px] px-2 md:px-4 flex items-center gap-1 md:gap-2 border-b border-[#FFFFFF12] bg-[#FFFFFF05]">
                            <span className="size-1.5 md:size-2.5 rounded-full bg-red-400" />
                            <span className="size-1.5 md:size-2.5 rounded-full bg-yellow-400" />
                            <span className="size-1.5 md:size-2.5 rounded-full bg-green-400" />
                            <div className="ml-1.5 md:ml-3 h-4 md:h-5 px-1.5 md:px-3 flex items-center rounded-full bg-[#FFFFFF08] text-[6px] md:text-[8px] text-[#FFFFFF50]">yourportfolio.com</div>
                        </div>
                        <div className="p-3 md:p-8">
                            <div className="flex justify-between items-center">
                                <h4 className="font-bold text-[12px] md:text-[14px]">Portfolio<span className="text-[#05AFFF]">.</span></h4>
                                <div className="flex gap-1.5 md:gap-3 text-[6px] md:text-[8px] text-[#FFFFFF80]">
                                    <span>About</span>
                                    <span>Projects</span>
                                    <span>Skills</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5 md:gap-5 mt-4 md:mt-8">
                                <div className="size-[45px] md:size-[85px] shrink-0 rounded-full bg-gradient-to-br from-[#0371E4] to-[#05AFFF] p-[2px]">
                                    <div className="w-full h-full rounded-full bg-[#141A2E] flex items-center justify-center">
                                        <span className="text-[20px] md:text-[36px]"> 👨‍💻 </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[8px] md:text-[10px] text-[#05AFFF]"> Hello, I'm</p>
                                    <h3 className="text-[16px] md:text-[28px] font-bold mt-0.5 md:mt-1">Your Name</h3>
                                    <p className="text-[7px] md:text-[11px] text-[#FFFFFF70] mt-0.5 md:mt-1">Student & Frontend Developer</p>
                                    <button className="mt-1.5 md:mt-3 px-1.5 md:px-3 h-[20px] md:h-[26px] rounded-[3px] md:rounded-[5px] text-[7px] md:text-[9px] bg-[#0066FF]">View Projects</button>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-8">
                                <p className="text-[8px] md:text-[10px] text-[#FFFFFF60] mb-1.5 md:mb-3">MY SKILLS</p>
                                <div className="flex flex-wrap gap-1 md:gap-2">
                                    {["React", "JavaScript", "HTML", "CSS"].map((skill) => (
                                        <span key={skill} className="px-1 md:px-2 py-0.5 md:py-1 rounded-[2px] md:rounded-[4px] bg-[#0066FF15] border border-[#0066FF30] text-[#05AFFF] text-[6px] md:text-[8px]">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-3.5 md:mt-7">
                                <p className="text-[8px] md:text-[10px] text-[#FFFFFF60] mb-1.5 md:mb-3">FEATURED PROJECTS</p>
                                <div className="grid grid-cols-2 gap-1.5 md:gap-3">
                                    <div className="h-[75px] md:h-[95px] rounded-[8px] bg-gradient-to-br from-[#0066FF30] to-[#00D98C15] border border-[#FFFFFF10] p-3">
                                        <Code2 className="size-4 text-[#05AFFF]" />

                                        <p className="text-[9px] mt-3 font-medium">
                                            Project One
                                        </p>
                                    </div>

                                    <div className="h-[75px] md:h-[95px] rounded-[8px] bg-gradient-to-br from-[#9D4EDD30] to-[#0066FF15] border border-[#FFFFFF10] p-3">
                                        <BriefcaseBusiness className="size-4 text-[#A855F7]" />

                                        <p className="text-[9px] mt-3 font-medium">
                                            Project Two
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
