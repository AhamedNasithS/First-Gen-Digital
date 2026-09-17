import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Palette,
  Smartphone,
  Zap,
  Search,
  MousePointer2,
  LayoutDashboard,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Included({ handleGetStarted }) {
  const features = [
    {
      icon: Palette,
      title: "Modern UI/UX Redesign",
      desc: "A fresh visual direction with improved layout, spacing and hierarchy.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive Design",
      desc: "A smoother experience across mobile, tablet and desktop devices.",
    },
    {
      icon: Zap,
      title: "Performance Improvements",
      desc: "Optimization focused on creating a faster and smoother experience.",
    },
    {
      icon: LayoutDashboard,
      title: "Improved Website Structure",
      desc: "Clearer navigation and content organization for easier browsing.",
    },
    {
      icon: MousePointer2,
      title: "Better User Experience",
      desc: "Improved interactions and calls-to-action that guide visitors.",
    },
    {
      icon: Search,
      title: "Basic SEO Improvements",
      desc: "Essential structure and optimization to support search visibility.",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="max-w-[750px]">
          <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium">WHAT'S INCLUDED</p>
          <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold leading-tight">Everything you need for a <span className="block text-[#05AFFF]">better website experience.</span></h2>
          <p className="mt-3 md:mt-5 text-[12px] md:text-[16px] leading-relaxed text-[#FFFFFF99]">Our redesign service focuses on improving how your website looks, works and feels for your visitors.</p>
        </motion.div>
        <div className="grid lg:grid-cols-[1.5fr_0.8fr] gap-4 md:gap-8 mt-6 md:mt-12">
          <div className="rounded-[16px] md:rounded-[24px] border border-[#FFFFFF1A] bg-[#FFFFFF06] overflow-hidden">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: index * 0.08 }} className={`group flex gap-3 md:gap-5 p-3 md:p-6 hover:bg-[#FFFFFF05] transition-all duration-300 ${index !== features.length - 1 ? "border-b border-[#FFFFFF12]" : ""}`}>
                  <div className="shrink-0 size-[38px] md:size-[48px] rounded-[10px] md:rounded-[14px] flex items-center justify-center bg-[#05AFFF]/10 text-[#05AFFF] border border-[#05AFFF]/15 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="size-[18px] md:size-[22px]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[14px] md:text-[18px] font-semibold">{item.title}</h3>
                      <Check className="shrink-0 size-[16px] md:size-[19px] text-[#00D98C]" />
                    </div>
                    <p className="mt-1.5 md:mt-2 text-[11px] md:text-[14px] leading-relaxed text-[#FFFFFF80]">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.3 }} className="relative overflow-hidden rounded-[12px] md:rounded-[24px] p-3 md:p-8 flex flex-col bg-gradient-to-br from-[#0066FF]/25 via-[#05AFFF]/10 to-[#00D98C]/10 border border-[#05AFFF]/25">
            <div className="absolute -top-[100px] -right-[100px] size-[250px] rounded-full bg-[#05AFFF]/20 blur-[100px]" />
            <div className="relative z-10">
              <div className="size-[52px] md:size-[64px] rounded-[14px] md:rounded-[18px] bg-[#05AFFF]/15 border border-[#05AFFF]/25 flex items-center justify-center">
                <ShieldCheck className="size-[25px] md:size-[32px] text-[#05AFFF]" />
              </div>
              <p className="mt-5 text-[#05AFFF] text-[10px] md:text-[12px] font-medium">REDESIGN PACKAGE</p>
              <h3 className="mt-2 text-[20px] md:text-[28px] font-bold leading-tight">Your website, <span className="block text-[#05AFFF]">redesigned for today.</span></h3>
              <p className="mt-4 text-[12px] md:text-[15px] leading-relaxed text-[#FFFFFF99]">Starting from</p>
              <p className="mt-1 text-[30px] md:text-[42px] font-bold">₹4,999</p>
              <p className="mt-1 text-[11px] md:text-[13px] text-[#FFFFFF66]">Final pricing depends on your current website and redesign requirements.</p>
            </div>
            <button type="button" onClick={handleGetStarted} className="relative z-10 w-full mt-4 md:mt-8 h-[46px] md:h-[52px] rounded-[10px] flex items-center justify-center gap-2 bg-gradient-to-r from-[#0371E4] to-[#05AFFF] text-white text-[13px] md:text-[15px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Redesign My Website
              <ArrowRight className="size-[17px]" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}