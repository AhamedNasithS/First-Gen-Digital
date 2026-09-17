import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  MessageCircle,
  MapPin,
  Smartphone,
  Search,
  ArrowUpRight,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Palette,
      title: "Professional UI/UX",
      desc: "A clean, modern and user-friendly design that represents your business professionally and creates a strong first impression.",
      className: "md:row-span-2",
      large: true,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Integration",
      desc: "Let customers contact your business instantly.",
    },
    {
      icon: MapPin,
      title: "Google Maps",
      desc: "Help customers easily find your business location.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      desc: "A seamless experience across mobile, tablet and desktop.",
    },
    {
      icon: Search,
      title: "Basic SEO",
      desc: "Help search engines understand and discover your business.",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false }} className="text-center max-w-[800px] mx-auto">
          <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium"> KEY FEATURES</p>
          <h2 className="mt-1.5 md:mt-3 text-[18px] md:text-[48px] font-bold leading-tight"> Everything your business needs to <span className="block text-[#05AFFF]"> create a professional online presence. </span></h2>
          <p className="mt-2 md:mt-5 text-[12px] md:text-[16px] text-[#FFFFFF99]"> Built with the essential features your customers need to discover, explore and connect with your business.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-6 md:mt-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.45, delay: index * 0.1 }} whileHover={{ y: -6, scale: 1.01 }} className={`group relative overflow-hidden rounded-[12px] md:rounded-[20px] bg-[#FFFFFF08] border border-[#FFFFFF1A] p-3 md:p-6 transition-all duration-300 hover:border-[#05AFFF]/50 ${item.large ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-1"}`}>
                <div className="absolute -top-20 -right-20 size-[180px] rounded-full bg-[#0066FF]/10 blur-[70px] group-hover:bg-[#05AFFF]/20 transition-all duration-500"/>
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`size-[42px] md:size-[52px] rounded-[10px] md:rounded-[14px] flex items-center justify-center  bg-[#0066FF]/15 text-[#05AFFF] border border-[#05AFFF]/20 transition-transform duration-300 group-hover:scale-110 ${item.large ? "md:size-[100px]" : ""}`}>
                    <Icon className={ item.large ? "size-[20px] md:size-[50px]" : "size-[20px] md:size-[24px]"}/>
                  </div>
                  <div className={item.large ? "mt-2 md:mt-5 md:mt-auto" : "mt-2 md:mt-4"}>
                    <h3 className={`font-semibold ${ item.large ? "text-[15px] md:text-[28px]" : "text-[15px] md:text-[18px]"}`}>{item.title}</h3>
                    <p className={`mt-2 text-[#FFFFFF99] leading-relaxed ${ item.large ? "text-[12px] md:text-[16px] max-w-[500px]" : "text-[12px] md:text-[14px]" }`}>{item.desc}</p>
                  </div>
                  {item.large && (
                    <div className="hidden md:flex absolute right-0 bottom-0 size-[45px] rounded-[12px] items-center justify-center bg-[#05AFFF]/10 text-[#05AFFF]">
                      <ArrowUpRight className="size-[20px]" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}