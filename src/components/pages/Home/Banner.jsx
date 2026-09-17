import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import GlareHover from "../../utils/ui/GlareHover";
import Galaxy from "../../utils/ui/Galaxy";

export default function Banner({ setFormOpen }) {
    return (
        <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: false }} className="relative w-full overflow-hidden md:h-screen bg-[#0A0A0E] px-5 pt-5 mb-5 md:mb-10 lg:mb-16">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Galaxy
                    mouseInteraction={false}
                    mouseRepulsion={false}
                    density={0.55}
                    glowIntensity={0.18}
                    saturation={0.35}
                    hueShift={210}
                    twinkleIntensity={0.15}
                    rotationSpeed={0.015}
                    starSpeed={0.2}
                    speed={0.35}
                    transparent={true}
                />
            </div>
            <motion.div className="absolute top-[8%] left-[10%] md:top-[24%] md:left-[8%] z-[6]">
                <motion.div className="absolute rounded-full size-[100px] md:size-[180px] top-1/2 left-1/2 blur-[18px]" style={{ translate: "-50% -50%", background: "radial-gradient(circle, rgba(255,200,80,0.12) 0%, rgba(255,140,30,0.07) 50%, transparent 75%)" }} animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute rounded-full size-[60px] md:size-[80px] top-1/2 left-1/2 blur-[10px]" style={{ translate: "-50% -50%", background: "radial-gradient(circle, rgba(255,220,130,0.35) 0%, rgba(255,160,40,0.18) 50%, transparent 100%)" }} animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="relative rounded-full size-[32px] md:size-[42px]" style={{ background: "radial-gradient(circle at 38% 36%, #FFFFF5 0%, #FFF9E0 35%, #FFE8A0 70%, #FFC850 100%)", boxShadow: "0 0 24px 10px rgba(255,210,80,0.55), 0 0 60px 25px rgba(255,160,30,0.25), 0 0 100px 50px rgba(255,120,20,0.10)" }} animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
            </motion.div>
            <div className="relative z-[10] md:pt-[130px] text-center">
                <div className="bg-[#FFFFFF0D] py-1 px-2 md:py-2.5 md:px-3.5 rounded-full flex gap-2 items-center text-[#FFFFFFE5] font-normal text-[10px] md:text-[14px] w-max mx-auto border border-[#FFFFFF1A]" style={{ boxShadow: "4px 6px 25px 0px #00000024" }}>
                    <Sparkles className="size-[10px] md:size-[14px] text-[#00D98C]" />
                    <p>Premium Digital Design Agency</p>
                </div>
                <div className="font-bold text-[30px] md:text-[60px] lg:text-[80px] xl:text-[104px] font-asap mt-5">
                    <h1>Building Websites</h1>
                    <h2 className="md:-mt-[30px]">That Open Opportunities</h2>
                </div>
                <p className="text-[#FFFFFFB2] font-normal text-[15px] md:text-[24px] mt-3 md:mt-6">Professional portfolio and business websites designed to <br className="hidden md:block" /> help students, professionals, and businesses establish a <br className="hidden md:block" /> strong online presence.</p>
                <div className="relative z-[1000]">
                    <GlareHover
                        width="200px"
                        height="45px"
                        background="#0066FF"
                        borderRadius="10px"
                        borderColor="#0066FF"
                        glareColor="#ffffff"
                        glareOpacity={0.3}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}
                        className="mx-auto mt-3 md:mt-6 mb-[60px] md:mb-0"
                        style={{
                            boxShadow:
                                "0px 0px 52.81px 0px #0066FF1A, 0px 0px 26.4px 0px #0066FF4D",
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => setFormOpen(true)}
                            className="w-full h-full flex items-center justify-center gap-1 text-white font-bold text-[14px]"
                        >
                            Get Free Consultation
                            <ArrowRight className="size-[14px]" />
                        </button>
                    </GlareHover>
                </div>
            </div>
        </motion.div>
    );
}
