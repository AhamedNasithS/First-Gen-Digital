import React from 'react'
import Header from '../../header'
import Banner from './Banner'
import Success from './Success';
import About from './About';
import Services from './Services';
import OurProcess from './OurProcess';
import { ArrowRight } from 'lucide-react';
import Footer from '../../footer';
import BookingForm from '../Forms/BookingForm';
import BookingFormSuccess from '../SuccessPages/BookingFormSuccess';
import FAQ from './Faq';
import SplashCursor from '../../utils/ui/SplashCursor';
import GlareHover from '../../utils/ui/GlareHover';
import Projects from './Projects';
import { motion, useScroll, useSpring } from "framer-motion";


export default function Home({ country, loading, }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [websiteType, setWebType] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState(false);
  const scrollContainerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  React.useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [success]);

  return (
    <div ref={scrollContainerRef} className='relative overflow-y-scroll scroll-smooth bg-gradient-to-br from-[#0A0E27] via-[#000000] to-[#0D1B3A] h-screen [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#000000] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#0D1B3A]'>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9999] h-[3px] origin-left"
        style={{
          scaleX: smoothProgress,
          background:
            "linear-gradient(90deg, #0371E4 0%, #05AFFF 50%, #00D98C 100%)",
          boxShadow: "0 0 10px #05AFFF",
        }}
      />
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={5000}
        COLOR_UPDATE_SPEED={8}
        SHADING={true}
        RAINBOW_MODE={false}
        COLOR="#05AFFF"
      />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} setFormOpen={setFormOpen} />
      {isOpen && (<div className='fixed z-40 bg-[#000000ba] inset-0'></div>)}
      <section id='home'>
        <Banner setFormOpen={setFormOpen} />
      </section>
      <section id='work'>
        <Success />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='services'>
        <Services setWebType={setWebType} setFormOpen={setFormOpen} />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id='process'>
        <OurProcess />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <div className="relative mx-auto mb-5 md:mb-10 lg:mb-16 p-5 md:p-7 lg:p-12 text-center w-11/12 md:w-10/12 lg:w-9/12 xl:w-7/12 bg-gradient-to-r from-[#0066FF33] to-[#00D98C33] border border-[#FFFFFF33] rounded-[12px] md:rounded-[24px]">
          <h3 className='font-asap text-[20px] md:text-[50px] font-bold'>Ready to build your website?</h3>
          <p className="text-[#FFFFFFB2] font-normal text-[12px] md:text-[20px] mt-2 md:mt-6">Let's collaborate to bring your vision to life with expert design and <br className="hidden md:block" /> development.</p>
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
              onClick={() => {
                setFormOpen(true);
              }}
            >
              Contact Us
              <ArrowRight className="size-[14px]" />
            </button>
          </GlareHover>
        </div>
      </section>
      <Footer />
      {formOpen && (
        <BookingForm setFormOpen={setFormOpen} country={country} websiteType={websiteType} setWebType={setWebType} setSuccess={setSuccess} />
      )}
      {success && (
        <BookingFormSuccess />
      )}
    </div>
  )
}
