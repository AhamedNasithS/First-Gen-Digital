import React from "react";
import { motion } from "framer-motion";
import {
  X,
  Check,
  Eye,
  ShieldCheck,
  Clock3,
  TrendingUp,
} from "lucide-react";

export default function Comparison() {
  const comparisons = [
    {
      icon: Eye,
      without: "Customers may struggle to find clear information about your business.",
      with: "Customers can quickly understand your business, services and offerings.",
    },
    {
      icon: ShieldCheck,
      without: "Your business may appear less established to new customers.",
      with: "A professional website helps create a stronger first impression.",
    },
    {
      icon: Clock3,
      without: "Customers may need to wait for a reply to get basic information.",
      with: "Your website can provide important business information anytime.",
    },
    {
      icon: TrendingUp,
      without: "You may rely only on social media or word-of-mouth for visibility.",
      with: "Your website gives your business an additional online presence.",
    },
  ];

  return (
    <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
      <div className="w-full md:w-11/12 mx-auto">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="text-center max-w-[850px] mx-auto">
          <p className="text-[#05AFFF] text-[10px] md:text-[13px] font-medium">WHY YOUR BUSINESS NEEDS A WEBSITE</p>
          <h2 className="mt-1.5 md:mt-3 text-[20px] md:text-[48px] font-bold leading-tight">Your customers are already online. <span className="block text-[#05AFFF]">Make sure your business is too.</span></h2>
          <p className="mt-3 md:mt-5 text-[12px] md:text-[16px] leading-relaxed text-[#FFFFFF99]">A website gives your business a professional space where customers can discover, understand and connect with you.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="mt-6 md:mt-12 rounded-[12px] md:rounded-[24px] overflow-hidden border border-[#FFFFFF1A] bg-[#FFFFFF05]">
          <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[0.8fr_1fr_1fr] border-b border-[#FFFFFF1A]">
            <div className="hidden md:block p-5 border-r border-[#FFFFFF1A]" />
            <div className="p-3 md:p-5 border-r border-[#FFFFFF1A] bg-[#FF4D4D]/5">
              <div className="flex items-center gap-2">
                <div className="size-[28px] md:size-[34px] rounded-full flex items-center justify-center bg-[#FF4D4D]/10 text-[#FF6B6B]">
                  <X className="size-[15px] md:size-[18px]" />
                </div>
                <div>
                  <p className="text-[10px] md:text-[12px] text-[#FFFFFF66]"> WITHOUT</p>
                  <h3 className="text-[13px] md:text-[17px] font-semibold">A Website</h3>
                </div>
              </div>
            </div>
            <div className="p-3 md:p-5 bg-[#05AFFF]/5">
              <div className="flex items-center gap-2">
                <div className="size-[28px] md:size-[34px] rounded-full flex items-center justify-center bg-[#05AFFF]/10 text-[#05AFFF]">
                  <Check className="size-[15px] md:size-[18px]" />
                </div>
                <div>
                  <p className="text-[10px] md:text-[12px] text-[#FFFFFF66]"> WITH</p>
                  <h3 className="text-[13px] md:text-[17px] font-semibold">A Website</h3>
                </div>
              </div>
            </div>
          </div>
          {comparisons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: index * 0.08 }} className={`grid grid-cols-2 md:grid-cols-[0.8fr_1fr_1fr] ${index !== comparisons.length - 1 ? "border-b border-[#FFFFFF1A]" : ""}`}>
                <div className="hidden md:flex items-center justify-center border-r border-[#FFFFFF1A]">
                  <div className="size-[42px] rounded-[12px] flex items-center justify-center bg-[#FFFFFF08] text-[#05AFFF]">
                    <Icon className="size-[20px]" />
                  </div>
                </div>
                <div className="relative p-4 md:p-6 border-r border-[#FFFFFF1A] bg-[#FF4D4D]/[0.02] group">
                  <p className="pr-3 text-[11px] md:text-[14px] leading-relaxed text-[#FFFFFF80]">{item.without}</p>
                </div>
                <div className="relative p-4 md:p-6 bg-[#05AFFF]/[0.02] group">
                  <p className="pr-3 text-[11px] md:text-[14px] leading-relaxed text-[#FFFFFFCC]">{item.with}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}