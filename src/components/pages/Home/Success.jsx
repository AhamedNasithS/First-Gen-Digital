import { Code, Palette, Sparkles, Tablet } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";
import BorderGlow from '../../utils/ui/BorderGlow';

export default function Success() {
  const items = [
    { icon: <Palette className='size-[20px]' />, color: "#0066FF", title: "Modern Design", desc: "Crafted with creativity, precision, and timeless aesthetics for every space." },
    { icon: <Tablet className='size-[20px]' />, color: "#9D4EDD", title: "Affordable Pricing", desc: "Premium-quality solutions at competitive prices with complete transparency." },
    { icon: <Code className='size-[20px]' />, color: "#00D98C", title: "Mobile Responsive", desc: "Seamless performance across desktop, tablet, and mobile devices." },
    { icon: <Sparkles className='size-[20px]' />, color: "#FF6B6B", title: "Fast Delivery", desc: "Quick turnaround without compromising on quality or attention to detail." },
  ]
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: false }} className='mb-5 md:mb-10 lg:mb-16 p-[20px] text-center'>
      <h3 className='font-asap text-[22px] md:text-[50px] font-bold'>Why Choose FirstGen Digital?</h3>
      <p className="text-[#FFFFFFB2] font-normal text-[12px] md:text-[20px] mt-3 md:mt-6">We combine creativity, strategy, and technology to deliver <br className="hidden md:block" /> websites that are visually stunning, fast, and built for growth.</p>
      <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3 md:mt-12'>
        {items?.map((item, index) => (
          <BorderGlow
            edgeSensitivity={85}
            glowColor="210 100 60"
            backgroundColor="#FFFFFF1A"
            borderRadius={8}
            glowRadius={20}
            glowIntensity={0.7}
            coneSpread={20}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            fillOpacity={0.2}
            className="h-full p-[1px]"
          >
            <div key={index} className='bg-[#1A1A1C] rounded-[7px] p-3 md:p-6 text-start h-full' style={{ boxShadow: "4px 6px 25px 0px #00000024" }}>
              <div className='size-[48px] rounded-[14px] flex justify-center items-center' style={{ background: `${item.color}20`, color: item.color }}>{item.icon}</div>
              <h4 className='mt-3 font-normal text-[16px]'>{item.title}</h4>
              <p className='mt-1.5 text-[#FFFFFF99] font-normal text-[14px]'>{item.desc}</p>
            </div>
          </BorderGlow>
        ))}
      </div>
    </motion.div>
  )
}
