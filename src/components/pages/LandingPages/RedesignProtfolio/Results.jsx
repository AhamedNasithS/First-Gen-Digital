import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  MousePointerClick,
  Eye,
  LayoutDashboard,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

export default function Results() {
  const results = [
    {
      icon: Smartphone,
      title: "Better Mobile Experience",
      desc: "Visitors can browse your website more comfortably across mobile, tablet and desktop.",
      value: "Responsive",
    },
    {
      icon: Zap,
      title: "Improved Performance",
      desc: "A cleaner and optimized website structure helps create a smoother browsing experience.",
      value: "Faster",
    },
    {
      icon: MousePointerClick,
      title: "Clearer User Journey",
      desc: "Better navigation and calls-to-action make it easier for visitors to take the next step.",
      value: "Simpler",
    },
    {
      icon: Eye,
      title: "Stronger First Impression",
      desc: "A modern design helps your business look more professional and trustworthy online.",
      value: "Modern",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="text-center max-w-[800px] mx-auto">
          <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium">RESULTS YOU CAN EXPECT</p>
          <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold leading-tight">A website that doesn't just <span className="block text-[#05AFFF]">look better — it works better.</span></h2>
          <p className="mt-3 md:mt-5 text-[12px] md:text-[16px] leading-relaxed text-[#FFFFFF99]">Our goal is to improve the overall experience of your website, making it clearer, faster and easier for visitors to use.</p>
        </motion.div>
        <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-3 md:gap-6 mt-6 md:mt-12">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-[12px] md:rounded-[24px] p-4 md:p-8 md:min-h-[300px] flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/20 via-[#05AFFF]/10 to-[#FFFFFF05] border border-[#05AFFF]/20">
            <div className="absolute -top-[100px] -right-[100px] size-[260px] rounded-full bg-[#05AFFF]/20 blur-[100px]"/>
            <div className="relative z-10">
              <div className="size-[48px] md:size-[60px] rounded-[14px] md:rounded-[18px] flex items-center justify-center bg-[#05AFFF]/10 border border-[#05AFFF]/25">
                <TrendingUp className="size-[24px] md:size-[30px] text-[#05AFFF]" />
              </div>
              <p className="mt-3 md:mt-6 text-[10px] md:text-[12px] text-[#05AFFF] font-medium">THE BIGGER PICTURE</p>
              <h3 className="mt-1 md:mt-2 text-[24px] md:text-[36px] font-bold leading-tight">Built to create a <span className="block text-[#05AFFF]">better digital experience.</span></h3>
              <p className="mt-2 md:mt-4 text-[12px] md:text-[15px] leading-relaxed text-[#FFFFFF99] max-w-[500px]">A redesign brings your website up to modern expectations and creates a stronger foundation for your online presence.</p>
            </div>
            <div className="relative z-10 mt-4 md:mt-8 flex items-center gap-1.5 md:gap-3">
              <div className="flex space-x-2">
                <div className="size-[8px] rounded-full bg-[#0066FF]" />
                <div className="size-[8px] rounded-full bg-[#05AFFF]" />
                <div className="size-[8px] rounded-full bg-[#00D98C]" />
              </div>
              <p className="text-[10px] md:text-[12px] text-[#FFFFFF66]">
                Designed around your visitors
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            {results.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: index * 0.1 }} whileHover={{ y: -6 }} className="group relative overflow-hidden p-3 md:p-6 rounded-[12px] md:rounded-[20px] bg-[#FFFFFF08] border border-[#FFFFFF1A] hover:border-[#05AFFF]/40 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="size-[38px] md:size-[48px] rounded-[10px] md:rounded-[14px] flex items-center justify-center bg-[#05AFFF]/10 border border-[#05AFFF]/15 text-[#05AFFF] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="size-[18px] md:size-[22px]" />
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#00D98C]/10 border border-[#00D98C]/15">
                      <span className="text-[9px] md:text-[10px] text-[#00D98C]">{item.value}</span>
                      <ArrowUpRight className="size-[11px] text-[#00D98C]" />
                    </div>
                  </div>
                  <h3 className="mt-3 md:mt-7 text-[15px] md:text-[18px] font-semibold">{item.title}</h3>
                  <p className="mt-2 text-[11px] md:text-[13px] leading-relaxed text-[#FFFFFF80]">{item.desc}</p>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0371E4] to-[#05AFFF] group-hover:w-full transition-all duration-500"/>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="mt-3 md:mt-6 grid grid-cols-3 divide-x divide-[#FFFFFF1A] rounded-[12px] md:rounded-[20px] overflow-hidden border border-[#FFFFFF1A] bg-[#FFFFFF05]">
          <div className="p-3 md:p-5 text-center">
            <LayoutDashboard className="size-[18px] md:size-[22px] text-[#05AFFF] mx-auto" />
            <p className="mt-2 text-[10px] md:text-[13px] text-[#FFFFFF99]">Modern Design</p>
          </div>
          <div className="p-3 md:p-5 text-center">
            <MousePointerClick className="size-[18px] md:size-[22px] text-[#05AFFF] mx-auto" />
            <p className="mt-2 text-[10px] md:text-[13px] text-[#FFFFFF99]">Better Experience</p>
          </div>
          <div className="p-3 md:p-5 text-center">
            <TrendingUp className="size-[18px] md:size-[22px] text-[#05AFFF] mx-auto" />
            <p className="mt-2 text-[10px] md:text-[13px] text-[#FFFFFF99]">Stronger Presence</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}