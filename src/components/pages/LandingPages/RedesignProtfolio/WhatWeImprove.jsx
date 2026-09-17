import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Smartphone,
  Zap,
  Search,
  MousePointer2,
  LayoutDashboard,
  Type,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function WhatWeImprove() {
  const improvements = [
    {
      icon: Palette,
      title: "Visual Design",
      desc: "Modern layouts, colors and visual elements that give your brand a fresh and professional look.",
      tag: "Modern UI",
    },
    {
      icon: Smartphone,
      title: "Mobile Experience",
      desc: "A responsive experience designed to work smoothly across mobile, tablet and desktop.",
      tag: "Responsive",
    },
    {
      icon: Zap,
      title: "Performance",
      desc: "Optimized layouts and assets to help create a faster and smoother browsing experience.",
      tag: "Faster",
    },
    {
      icon: MousePointer2,
      title: "User Experience",
      desc: "Clear calls-to-action and better page structure that guide visitors toward the next step.",
      tag: "Better UX",
    },
    {
      icon: Search,
      title: "SEO Foundation",
      desc: "Improved structure and essential SEO setup to help search engines understand your website.",
      tag: "SEO Ready",
    },
    {
      icon: LayoutDashboard,
      title: "Navigation & Structure",
      desc: "A clearer content hierarchy that helps visitors find what they need more easily.",
      tag: "Easy to Use",
    },
    {
      icon: Type,
      title: "Brand Consistency",
      desc: "Consistent typography, spacing and design elements across your entire website.",
      tag: "Consistent",
    },
    {
      icon: ShieldCheck,
      title: "Website Quality",
      desc: "A cleaner and more polished experience built with attention to usability and details.",
      tag: "Refined",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }}  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="max-w-[750px] mx-auto text-center">
          <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium">WHAT WE IMPROVE</p>
          <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold leading-tight">More than a new look. <span className="block text-[#05AFFF]"> A better website experience.</span></h2>
          <p className="mt-3 md:mt-5 text-[12px] md:text-[16px] leading-relaxed text-[#FFFFFF99]">We redesign the parts of your website that matter most from how it looks to how visitors experience and interact with it.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-6 md:mt-12">
          {improvements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -3,}} className="group relative overflow-hidden min-h-[180px] md:min-h-[260px] p-3 md:p-6 rounded-[12px] md:rounded-[20px] bg-[#FFFFFF08] border border-[#FFFFFF1A] hover:border-[#05AFFF]/40 transition-all duration-300">
                <div className="absolute -top-16 -right-16 size-[160px] rounded-full bg-[#05AFFF]/10 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <div className="size-[38px] md:size-[52px] rounded-[10px] md:rounded-[14px] flex items-center justify-center bg-[#05AFFF]/10 border border-[#05AFFF]/20 text-[#05AFFF] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="size-[18px] md:size-[24px]" />
                    </div>
                    <ArrowUpRight className="size-[17px] md:size-[20px] text-[#FFFFFF33] group-hover:text-[#05AFFF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"/>
                  </div>
                  <div className="md:mt-auto pt-3 md:pt-5">
                    <span className="inline-flex px-2.5 py-1 rounded-full bg-[#05AFFF]/10 border border-[#05AFFF]/15 text-[#05AFFF] text-[9px] md:text-[10px] font-medium">{item.tag}</span>
                    <h3 className="mt-3 text-[15px] md:text-[19px] font-semibold">{item.title}</h3>
                    <p className="mt-2 text-[11px] md:text-[14px] leading-relaxed text-[#FFFFFF80]">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0371E4] to-[#05AFFF] group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="mx-auto md:w-max mt-5 md:mt-10 p-3 md:p-6 rounded-[12px] md:rounded-[20px] bg-gradient-to-r from-[#0066FF]/10 via-[#05AFFF]/5 to-transparent border border-[#FFFFFF1A] text-center">
          <p className="text-[13px] md:text-[18px] text-[#FFFFFFB2]">We don't just refresh your website — <span className="text-white font-semibold">{" "}we improve how it works for your visitors and business.</span></p>
        </motion.div>
      </div>
    </section>
  );
}