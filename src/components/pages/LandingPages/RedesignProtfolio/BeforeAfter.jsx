import React from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight, Palette, Smartphone, Zap, Navigation } from "lucide-react";

export default function BeforeAfter() {
  const transformations = [
    {
      icon: Palette,
      before: "Outdated visual design",
      after: "Modern, professional design",
    },
    {
      icon: Smartphone,
      before: "Poor mobile experience",
      after: "Fully responsive experience",
    },
    {
      icon: Zap,
      before: "Slow and heavy experience",
      after: "Improved performance",
    },
    {
      icon: Navigation,
      before: "Confusing navigation",
      after: "Clear and user-friendly structure",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="text-center max-w-[850px] mx-auto">
          <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium"> THE TRANSFORMATION</p>
          <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold leading-tight">From outdated to <span className="block text-[#05AFFF]">built for today.</span></h2>
          <p className="mt-3 md:mt-5 text-[12px] md:text-[16px] leading-relaxed text-[#FFFFFF99]">A redesign isn't just about changing colors. It's about creating a better experience for your visitors and a stronger presence for your business.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="relative mt-6 md:mt-12">
          <div className="relative overflow-hidden rounded-[12px] md:rounded-[28px] border border-[#FFFFFF1A] bg-[#FFFFFF05]">
            <div className="grid grid-cols-2 border-b border-[#FFFFFF1A]">
              <div className="p-3 md:p-6 border-r border-[#FFFFFF1A] bg-[#FF6B6B]/[0.04]">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="size-[24px] md:size-[40px] rounded-full shrink-0 flex items-center justify-center bg-[#FF6B6B]/10 border border-[#FF6B6B]/20">
                    <X className="size-[12px] md:size-[20px] text-[#FF6B6B]" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[11px] text-[#FFFFFF66]">BEFORE</p>
                    <h3 className="text-[14px] md:text-[20px] font-semibold">Your Current Website</h3>
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-6 bg-[#05AFFF]/[0.04]">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="size-[24px] md:size-[40px] rounded-full shrink-0 flex items-center justify-center bg-[#05AFFF]/10 border border-[#05AFFF]/20">
                    <Check className="size-[12px] md:size-[20px] text-[#05AFFF]" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[11px] text-[#FFFFFF66]">AFTER</p>
                    <h3 className="text-[14px] md:text-[20px] font-semibold">Redesigned Website</h3>
                  </div>
                </div>
              </div>
            </div>
            {transformations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: index * 0.1 }} className={`relative grid grid-cols-[1fr_1fr] ${index !== transformations.length - 1 ? "border-b border-[#FFFFFF1A]" : ""}`}>
                  <div className="hidden md:flex absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[42px] rounded-full bg-[#0A0E27] border border-[#FFFFFF1F] items-center justify-center text-[#05AFFF]">
                    <Icon className="size-[18px]" />
                  </div>
                  <div className="relative p-3 md:p-7 border-r border-[#FFFFFF1A] bg-[#FF6B6B]/[0.015]">
                    <div className="flex items-start gap-2 md:gap-3">
                      <p className="text-[11px] md:text-[15px] leading-relaxed text-[#FFFFFF80]">{item.before}</p>
                    </div>
                  </div>
                  <div className="relative p-3 md:p-7 bg-[#05AFFF]/[0.015]">
                    <div className="flex items-start gap-2 md:gap-3">
                      <p className="text-[11px] md:text-[15px] leading-relaxed text-[#FFFFFFCC]">{item.after}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.5 }} className="relative mx-auto mt-4 md:mt-8 flex items-center justify-center gap-3">
            <span className="text-[12px] md:text-[15px] text-[#FFFFFF80]">Your old website</span>
            <div className="size-[24px] md:size-[42px] rounded-full flex items-center justify-center bg-[#05AFFF]/10 border border-[#05AFFF]/20">
              <ArrowRight className="size-[12px] md:size-[20px] text-[#05AFFF]" />
            </div>
            <span className="text-[12px] md:text-[15px] font-medium text-[#05AFFF]">A better digital experience</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}