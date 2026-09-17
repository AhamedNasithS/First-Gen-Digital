import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

export default function Process() {
  const process = [
    {
      step: "01",
      icon: Search,
      title: "Website Review",
      desc: "We review your current website, identify problems and understand what needs improvement.",
    },
    {
      step: "02",
      icon: PenTool,
      title: "Design & Structure",
      desc: "We create a modern layout with clearer structure, better visual hierarchy and improved user experience.",
    },
    {
      step: "03",
      icon: Code2,
      title: "Build & Optimize",
      desc: "Your redesigned website is developed to be responsive, smooth and optimized for modern devices.",
    },
    {
      step: "04",
      icon: Rocket,
      title: "Review & Launch",
      desc: "After final testing and your approval, your redesigned website is ready to go live.",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="text-center max-w-[750px] mx-auto">
          <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium">OUR REDESIGN PROCESS</p>
          <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold leading-tight">A clear process from <span className="block text-[#05AFFF]">old to outstanding.</span></h2>
          <p className="mt-2 md:mt-5 text-[12px] md:text-[16px] leading-relaxed text-[#FFFFFF99]">We follow a simple step-by-step process to transform your existing website into a modern digital experience.</p>
        </motion.div>
        <div className="relative mt-5 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.45, delay: index * 0.12 }} className="relative group">
                  <div className="relative h-full p-3 md:p-6 rounded-[12px] md:rounded-[20px] bg-[#FFFFFF08] border border-[#FFFFFF1A] hover:border-[#05AFFF]/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <span className="absolute top-3 right-4 text-[11px] md:text-[13px] text-[#FFFFFF33] font-medium">{item.step}</span>
                    <div className="relative z-10 size-[40px] md:size-[64px] rounded-full flex items-center justify-center bg-[#0A0E27] border border-[#05AFFF]/30 text-[#05AFFF] group-hover:bg-[#05AFFF] group-hover:text-white transition-all duration-300">
                      <Icon className="size-[16px] md:size-[26px]" />
                    </div>
                    <h3 className="mt-3 md:mt-7 text-[16px] md:text-[20px] font-semibold">{item.title}</h3>
                    <p className="mt-2 md:mt-3 text-[12px] md:text-[14px] leading-relaxed text-[#FFFFFF80]">{item.desc}</p>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0371E4] to-[#05AFFF] group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}