import React from "react";
import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Palette,
  MessageCircle,
  MapPin,
  Mail,
  Search,
  CheckCircle2,
} from "lucide-react";

export default function Included({ handleGetStarted }) {
  const included = [
    {
      icon: LayoutTemplate,
      title: "Up to 5 Pages",
      desc: "Essential pages structured around your business and customer needs.",
    },
    {
      icon: Palette,
      title: "Professional UI/UX",
      desc: "A modern, clean design that represents your business professionally.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Integration",
      desc: "Allow customers to contact your business instantly and easily.",
    },
    {
      icon: MapPin,
      title: "Google Maps",
      desc: "Help customers quickly find your business location.",
    },
    {
      icon: Mail,
      title: "Contact Form",
      desc: "Collect customer enquiries directly through your website.",
    },
    {
      icon: Search,
      title: "Basic SEO Setup",
      desc: "Set up the essential foundations to help search engines understand your website.",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="text-center max-w-[850px] mx-auto">
          <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium"> WHAT'S INCLUDED</p>
          <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold leading-tight">Everything you need to <span className="block text-[#05AFFF]">build your business online.</span></h2>
          <p className="mt-3 md:mt-5 text-[12px] md:text-[16px] leading-relaxed text-[#FFFFFF99]">A complete foundation designed to help your business look professional, build trust and make it easy for customers to connect.</p>
        </motion.div>
        <div className="grid lg:grid-cols-[1.7fr_0.8fr] gap-5 md:gap-7 mt-6 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {included.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: index * 0.08 }} whileHover={{ y: -5, borderColor: "rgba(5,175,255,0.5)" }} className="group relative overflow-hidden rounded-[12px] md:rounded-[18px] bg-[#FFFFFF08] border border-[#FFFFFF1A] p-3 md:p-5">
                  <div className="absolute -top-12 -right-12 size-[130px] rounded-full bg-[#0066FF]/10 blur-[55px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                  <div className="relative z-10">
                    <div className="size-[38px] md:size-[48px] rounded-[10px] md:rounded-[12px] flex items-center justify-center bg-[#0066FF]/15 border border-[#05AFFF]/20 text-[#05AFFF] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="size-[18px] md:size-[23px]" />
                    </div>
                    <h3 className="mt-2 md:mt-4 text-[15px] md:text-[17px] font-semibold">{item.title}</h3>
                    <p className="mt-1 md:mt-2 text-[12px] md:text-[13px] leading-relaxed text-[#FFFFFF99]">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-[12px] md:rounded-[24px] p-3 md:p-7 bg-gradient-to-br from-[#0066FF]/25 via-[#FFFFFF08] to-[#00D98C]/15 border border-[#FFFFFF1F]">
            <div className="absolute -top-20 -right-20 size-[220px] rounded-full bg-[#0066FF]/20 blur-[80px]" />
            <div className="relative z-10 flex flex-col h-full">
              <div>
                <div className="inline-flex items-center gap-1 md:gap-2 px-1.5 md:px-3 py-1 rounded-full bg-[#05AFFF]/10 border border-[#05AFFF]/20">
                  <CheckCircle2 className="size-[12px] md:size-[14px] text-[#05AFFF]" />
                  <span className="text-[9px] md:text-[12px] text-[#A2D4FF]"> BUSINESS WEBSITE </span>
                </div>
                <h3 className="mt-2.5 md:mt-5 text-[24px] md:text-[32px] font-bold">Built for your <span className="block text-[#05AFFF]"> business growth.</span></h3>
                <p className="mt-1.5 md:mt-3 text-[13px] md:text-[15px] leading-relaxed text-[#FFFFFF99]">Everything is designed to give your business a strong, professional online presence from the start.</p>
              </div>
              <div className="mt-3 md:mt-6 space-y-3">
                <div className="flex items-center gap-2 text-[12px] md:text-[14px] text-[#FFFFFFCC]">
                  <CheckCircle2 className="size-[12px] md:size-[16px] text-[#05AFFF]" />
                  Mobile-friendly design
                </div>
                <div className="flex items-center gap-2 text-[12px] md:text-[14px] text-[#FFFFFFCC]">
                  <CheckCircle2 className="size-[12px] md:size-[16px] text-[#05AFFF]" />
                  Easy customer contact
                </div>
                <div className="flex items-center gap-2 text-[12px] md:text-[14px] text-[#FFFFFFCC]">
                  <CheckCircle2 className="size-[12px] md:size-[16px] text-[#05AFFF]" />
                  Professional online presence
                </div>
              </div>
              <button type="button" onClick={handleGetStarted} className="w-full mt-3 md:mt-7 lg:mt-auto h-[38px] md:h-[48px] rounded-[10px] bg-gradient-to-r from-[#0371E4] to-[#05AFFF] text-[12px] md:text-[15px] font-medium hover:scale-[1.02] transition-all duration-300"> Grow My Business</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}