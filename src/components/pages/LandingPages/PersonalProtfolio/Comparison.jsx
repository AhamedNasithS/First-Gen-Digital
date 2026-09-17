import React from "react";
import { motion } from "framer-motion";
import {
  X,
  Check,
  Globe2,
} from "lucide-react";
import { LuInstagram } from "react-icons/lu";

export default function Comparison() {

  const comparison = [
    {
      social: "Limited customization",
      website: "A design built around your personal brand",
    },
    {
      social: "Platform controls your content",
      website: "You control your own digital presence",
    },
    {
      social: "Visitors move between multiple links",
      website: "Everything is organized in one place",
    },
    {
      social: "Your profile looks similar to everyone else",
      website: "A unique space that represents you",
    },
    {
      social: "Content can easily get lost in feeds",
      website: "Your important information is always accessible",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 max-w-[1100px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="text-center">
          <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium">WHY YOU NEED YOUR OWN WEBSITE</p>
          <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold">Social media is important.<span className="block text-[#05AFFF]">But it shouldn't be your entire online presence.</span></h2>
          <p className="max-w-[650px] mx-auto mt-2.5 md:mt-5 text-[12px] md:text-[16px] text-[#FFFFFF99]">Social platforms help people discover you. Your website gives them one professional place to understand, trust, and connect with you.</p>
        </motion.div>
        <div className="relative grid md:grid-cols-2 gap-4 md:gap-0 mt-5 md:mt-14">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="relative p-3 md:p-8 rounded-[12px] md:rounded-r-none md:rounded-l-[24px] bg-[#FFFFFF06] border border-[#FFFFFF15]">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="size-[42px] md:size-[52px] rounded-[12px] bg-[#FFFFFF08] flex items-center justify-center">
                <LuInstagram className="size-[20px] md:size-[25px] text-[#FFFFFF80]" />
              </div>
              <div>
                <p className="text-[10px] md:text-[12px] text-[#FFFFFF60]"> ONLY</p>
                <h3 className="text-[18px] md:text-[24px] font-semibold">Social Media</h3>
              </div>
            </div>
            <div className="mt-3 md:mt-7 flex flex-col gap-2 md:gap-4">
              {comparison.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.08 }} className="flex items-center gap-1.5 md:gap-3">
                  <div className="mt-0.5 shrink-0 size-[16px] md:size-[20px] rounded-full bg-[#FF5F57]/10 text-[#FF5F57] flex items-center justify-center">
                    <X className="size-[8px] md:size-[12px]" />
                  </div>
                  <p className="text-[10px] md:text-[14px] text-[#FFFFFF70]">{item.social}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="relative p-3 md:p-8 rounded-[12px] md:rounded-l-none md:rounded-r-[24px] bg-gradient-to-br from-[#0066FF]/20 to-[#05AFFF]/10 border border-[#05AFFF]/40">
            <div className="absolute inset-[15%] bg-[#0066FF]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative flex items-center gap-2 md:gap-3">
              <div className="size-[42px] md:size-[52px] rounded-[12px] bg-[#0066FF]/20 text-[#05AFFF] flex items-center justify-center border border-[#05AFFF]/20">
                <Globe2 className="size-[20px] md:size-[25px]" />
              </div>
              <div>
                <p className="text-[10px] md:text-[12px] text-[#05AFFF]">YOUR OWN</p>
                <h3 className="text-[18px] md:text-[24px] font-semibold">Personal Website</h3>
              </div>
            </div>
            <div className="relative mt-3 md:mt-7 flex flex-col gap-2 md:gap-4">
              {comparison.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.08 }} className="flex items-center gap-1.5 md:gap-3">
                  <div className="mt-0.5 shrink-0 size-[16px] rounded-full bg-[#00D98C]/15 text-[#00D98C] flex items-center justify-center">
                    <Check className="size-[8px] md:size-[12px]" />
                  </div>
                  <p className="text-[10px] md:text-[14px] text-white">{item.website}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}