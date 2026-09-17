import React from "react";
import { motion } from "framer-motion";
import { Palette, Smartphone, Zap, Navigation, MousePointerClick, Layers3, AlertTriangle } from "lucide-react";

export default function Problems({ handleGetStarted }) {
  const problems = [
    {
      icon: Palette,
      title: "Outdated Design",
      desc: "Your website looks old and no longer represents your current business or brand.",
    },
    {
      icon: Smartphone,
      title: "Poor Mobile Experience",
      desc: "Your website is difficult to use or doesn't look right on mobile devices.",
    },
    {
      icon: Zap,
      title: "Slow Loading",
      desc: "Visitors may leave before your website has a chance to make an impression.",
    },
    {
      icon: Navigation,
      title: "Confusing Navigation",
      desc: "Customers struggle to find important information, services or contact details.",
    },
    {
      icon: MousePointerClick,
      title: "Low Engagement",
      desc: "Visitors browse your website but aren't encouraged to take the next step.",
    },
    {
      icon: Layers3,
      title: "Inconsistent Branding",
      desc: "Your colors, typography and visuals don't create a clear brand identity.",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="text-center max-w-[850px] mx-auto">
          <div className="inline-flex items-center gap-1 md:gap-2 px-1.5 md:px-3 py-1 md:py-1.5 rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/20">
            <AlertTriangle className="size-[10px] md:size-[13px] text-[#FF6B6B]" />
            <span className="text-[10px] md:text-[12px] font-medium text-[#FF8A8A]">DOES THIS SOUND FAMILIAR?</span>
          </div>
          <h2 className="mt-3 md:mt-5 text-[22px] md:text-[48px] font-bold leading-tight">Your website might be <span className="block text-[#FF6B6B]">holding your business back.</span></h2>
          <p className="mt-3 md:mt-5 text-[12px] md:text-[16px] leading-relaxed text-[#FFFFFF99]"> If your current website has one or more of these problems, it may be time for a modern redesign.</p>
        </motion.div>
        <div className="relative mt-6 md:mt-12">
          <div className="absolute left-1/2 top-[20%] -translate-x-1/2 size-[400px] rounded-full bg-[#FF6B6B]/5 blur-[120px]" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {problems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-[12px] md:rounded-[20px] bg-[#FFFFFF08] border border-[#FFFFFF1A] p-3 md:p-6 hover:border-[#FF6B6B]/40 transition-all duration-300">
                  <div className="absolute -top-12 -right-12 size-[150px] rounded-full bg-[#FF6B6B]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="size-[42px] md:size-[52px] rounded-[10px] md:rounded-[14px] flex items-center justify-center bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 text-[#FF6B6B] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-[20px] md:size-[24px]" />
                      </div>
                      <span className="text-[28px] md:text-[38px] font-bold text-[#FFFFFF]">0{index + 1}</span>
                    </div>
                    <h3 className="mt-3 md:mt-5 text-[15px] md:text-[19px] font-semibold">{item.title}</h3>
                    <p className="mt-1.5 md:mt-3 text-[12px] md:text-[14px] leading-relaxed text-[#FFFFFF99]">{item.desc}</p>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF6B6B] to-[#FF9A6B] group-hover:w-full transition-all duration-500" />
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