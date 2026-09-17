import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Palette,
  UserRound,
  BriefcaseBusiness,
  Images,
  Share2,
  Smartphone,
  Search,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function Include({ handleGetStarted }) {
  const included = [
    {
      icon: Palette,
      title: "Custom Website Design",
      desc: "A modern design tailored to your personal brand.",
    },
    {
      icon: UserRound,
      title: "About & Introduction",
      desc: "Introduce yourself and build trust with visitors.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Services Section",
      desc: "Clearly explain what you offer.",
    },
    {
      icon: Images,
      title: "Portfolio Showcase",
      desc: "Display your projects, work, or achievements.",
    },
    {
      icon: Share2,
      title: "Social Media Integration",
      desc: "Connect all your important social profiles.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      desc: "Optimized for mobile, tablet, and desktop.",
    },
    {
      icon: Search,
      title: "Basic SEO Setup",
      desc: "Essential SEO foundations for your website.",
    },
    {
      icon: MessageSquare,
      title: "Contact Section",
      desc: "Make it easy for potential clients to reach you.",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="text-center">
          <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium">WHAT'S INCLUDED</p>
          <h2 className="mt-1.5 md:mt-3 text-[22px] md:text-[48px] font-bold">Everything you need to <span className="block text-[#05AFFF]">build your online presence.</span></h2>
          <p className="max-w-[650px] mx-auto mt-2.5 md:mt-5 text-[12px] md:text-[16px] text-[#FFFFFF99]">A complete foundation to showcase who you are, what you do, and how people can work with you.</p>
        </motion.div>
        <div className="grid lg:grid-cols-[1fr_360px] gap-4 md:gap-8 mt-4 md:mt-14 items-start">
          <div className="grid sm:grid-cols-2 gap-2 md:gap-4">
            {included.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: index * 0.08 }} whileHover={{ y: -5 }} className="group relative p-3 md:p-5 rounded-[10px] md:rounded-[14px] bg-[#FFFFFF08] border border-[#FFFFFF1A] hover:border-[#05AFFF]/50 transition-colors overflow-hidden">
                  <div className="absolute -right-10 -top-10 size-[100px] bg-[#0066FF]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex gap-3">
                    <div className="shrink-0 size-[38px] md:size-[45px] rounded-[10px] bg-[#0066FF]/15 text-[#05AFFF] flex items-center justify-center">
                      <Icon className="size-[18px] md:size-[21px]" />
                    </div>
                    <div>
                      <h3 className="text-[13px] md:text-[16px] font-semibold">{item.title}</h3>
                      <p className="mt-1.5 text-[11px] md:text-[13px] leading-relaxed text-[#FFFFFF80]">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} className="sticky top-5 overflow-hidden p-3 md:p-7 rounded-[13px] md:rounded-[24px] bg-gradient-to-br from-[#0066FF]/20 via-[#FFFFFF08] to-[#05AFFF]/10 border border-[#05AFFF]/30">
            <div className="absolute -top-20 -right-20 size-[200px] rounded-full bg-[#0066FF]/20 blur-[70px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30">
                <Check className="size-2 md:size-3 text-[#05AFFF]" />
                <span className="text-[7px] md:text-[9px] text-[#A2D4FF]">PERSONAL WEBSITE PACKAGE</span>
              </div>
              <h3 className="mt-2.5 md:mt-5 text-[20px] md:text-[32px] font-bold">₹4,999</h3>
              <p className="text-[9px] md:text-[11px] text-[#FFFFFF60]"> Starting from </p>
              <div className="my-3 md:my-6 h-px bg-[#FFFFFF15]" />
              <div className="flex flex-col gap-1.5 md:gap-3">
                {["Modern Custom Design", "Professional Online Presence", "Mobile Responsive", "Basic SEO Setup", "Contact Integration"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[11px] md:text-[13px]">
                    <div className="size-[14px] md:size-[18px] rounded-full bg-[#00D98C]/15 text-[#00D98C] flex items-center justify-center">
                      <Check className="size-[8px] md:size-[11px]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <button type="button" onClick={handleGetStarted}className="w-full h-[38px] md:h-[46px] mt-3 md:mt-7 rounded-[9px] bg-gradient-to-r from-[#0371E4] to-[#05AFFF] flex items-center justify-center gap-2 text-[13px] font-medium hover:scale-[1.02] transition-transform">
                Build My Website
                <ArrowRight className="size-[15px]" />
              </button>
              <p className="text-center text-[9px] text-[#FFFFFF50] mt-3">Have a different requirement? Get a custom quote.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}