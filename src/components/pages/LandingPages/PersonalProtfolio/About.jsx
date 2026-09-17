import { ArrowRight } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";
import GlareHover from '../../../utils/ui/GlareHover';

export default function About({ handleGetStarted }) {
    return (
        <section className="mb-[20px] md:mb-[50px] lg:mb-[70px] px-[20px] md:px-0">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="relative mx-auto mb-5 md:mb-10 lg:mb-16 p-5 md:p-7 lg:p-12 text-center md:w-10/12 lg:w-9/12 xl:w-7/12 bg-gradient-to-r from-[#0066FF33] to-[#00D98C33] border border-[#FFFFFF33] rounded-[12px] md:rounded-[24px]">
                <h3 className='font-asap text-[20px] md:text-[50px] font-bold'>Your personal brand deserves its own space.</h3>
                <p className="text-[#FFFFFFB2] font-normal text-[12px] md:text-[20px] mt-2 md:mt-6"> Bring everything together with one professional website.</p>
                <GlareHover
                    width="170px"
                    height="38px"
                    background="linear-gradient(to right, #0371E4, #05AFFF)"
                    borderRadius="8px"
                    borderColor="#0066FF"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                    className="mx-auto mt-4 md:mt-8"
                    style={{
                        boxShadow:
                            "0px 0px 40px 0px #0066FF1A, 0px 0px 20px 0px #0066FF4D",
                    }}
                >
                    <button
                        type="button"
                        className="w-full h-full rounded-[8px] flex gap-2 items-center justify-center text-[14px] font-normal text-white"
                        onClick={handleGetStarted}
                    >
                        Get Started
                        <ArrowRight className="size-[14px]" />
                    </button>
                </GlareHover>
            </motion.div>
        </section>
    )
}
