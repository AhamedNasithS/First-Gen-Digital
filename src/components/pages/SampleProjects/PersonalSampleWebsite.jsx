import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  Menu,
  X,
  Sparkles,
  MoveRight,
} from "lucide-react";
import { LuInstagram, LuLinkedin } from "react-icons/lu";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    desc: "Helping businesses find clarity, define their voice and build a memorable digital presence.",
  },
  {
    number: "02",
    title: "Creative Direction",
    desc: "Turning ideas into meaningful visual experiences that connect with the right audience.",
  },
  {
    number: "03",
    title: "Digital Consulting",
    desc: "Guidance for individuals and brands looking to improve their online presence.",
  },
];

const projects = [
  {
    category: "BRANDING",
    title: "Luma Studio",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "DIGITAL EXPERIENCE",
    title: "The Daily Edit",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "CREATIVE STRATEGY",
    title: "Sunday Stories",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function PersonalSampleWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1C1B19] overflow-hidden">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#F5F0E8]/90 backdrop-blur-lg border-b border-[#1C1B19]/10">
        <div className="w-11/12 max-w-7xl mx-auto h-[75px] flex items-center justify-between">
          
          <button
            onClick={() => scrollToSection("home")}
            className="font-serif text-[24px] md:text-[28px] tracking-tight"
          >
            MAYA<span className="text-[#E6532E]">.</span>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-[13px]">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#E6532E] transition-colors"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-[#E6532E] transition-colors"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("work")}
              className="hover:text-[#E6532E] transition-colors"
            >
              Work
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#E6532E] transition-colors"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex items-center gap-2 bg-[#1C1B19] text-white px-5 py-3 text-[12px] hover:bg-[#E6532E] transition-colors"
          >
            Let's Talk
            <ArrowUpRight className="size-4" />
          </button>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#F5F0E8] border-b border-[#1C1B19]/10 p-6 md:hidden">
            <div className="flex flex-col gap-5 text-lg">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="text-left"
              >
                Services
              </button>

              <button
                onClick={() => scrollToSection("work")}
                className="text-left"
              >
                Work
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        
        {/* HERO */}
        <section id="home" className="relative">
          <div className="w-11/12 max-w-7xl mx-auto pt-16 md:pt-24 pb-12">
            
            <div className="flex items-center gap-2 text-[11px] tracking-[2px] text-[#E6532E]">
              <span className="size-2 rounded-full bg-[#E6532E]" />
              INDEPENDENT CREATIVE
            </div>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 mt-8 items-end">
              
              <div>
                <h1 className="font-serif text-[52px] sm:text-[70px] md:text-[100px] lg:text-[120px] leading-[0.82] tracking-[-4px]">
                  Ideas,
                  <br />
                  identity &
                  <br />
                  <span className="italic text-[#E6532E]">
                    impact.
                  </span>
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-10">
                  <p className="max-w-[400px] text-[15px] md:text-[17px] leading-7 text-[#6F6A63]">
                    I'm Maya Reed — a creative strategist helping people and
                    brands turn good ideas into meaningful digital experiences.
                  </p>

                  <button
                    onClick={() => scrollToSection("work")}
                    className="shrink-0 size-[54px] rounded-full border border-[#1C1B19] flex items-center justify-center hover:bg-[#1C1B19] hover:text-white transition-all"
                  >
                    <ArrowDownRight className="size-5" />
                  </button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-[#D9D0C4]">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                    alt="Maya Reed"
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                </div>

                <div className="absolute -bottom-5 -left-5 md:-left-8 bg-[#E6532E] text-white p-5 md:p-7 max-w-[220px]">
                  <Sparkles className="size-5" />

                  <p className="font-serif text-[20px] md:text-[25px] leading-tight mt-4">
                    Creative thinking for a digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="border-y border-[#1C1B19]/10 overflow-hidden">
          <div className="py-5 whitespace-nowrap flex gap-10 text-[12px] md:text-[14px] tracking-[2px]">
            <span>STRATEGY</span>
            <span className="text-[#E6532E]">✦</span>
            <span>CREATIVITY</span>
            <span className="text-[#E6532E]">✦</span>
            <span>STORYTELLING</span>
            <span className="text-[#E6532E]">✦</span>
            <span>DESIGN THINKING</span>
            <span className="text-[#E6532E]">✦</span>
            <span>STRATEGY</span>
            <span className="text-[#E6532E]">✦</span>
            <span>CREATIVITY</span>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-36">
            
            <div className="grid lg:grid-cols-[0.6fr_1.4fr] gap-10">
              
              <p className="text-[11px] tracking-[2px] text-[#E6532E]">
                01 — ABOUT ME
              </p>

              <div>
                <h2 className="font-serif text-[42px] md:text-[68px] leading-[0.95] tracking-[-2px]">
                  I believe great ideas deserve more than just a
                  <span className="italic text-[#E6532E]"> beautiful design.</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  <p className="text-[15px] leading-7 text-[#6F6A63]">
                    I work with ambitious people and growing brands to create
                    clarity around who they are, what they offer and how they
                    communicate online.
                  </p>

                  <p className="text-[15px] leading-7 text-[#6F6A63]">
                    My approach combines strategy, creativity and thoughtful
                    digital experiences that feel authentic and intentional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-[#1C1B19] text-[#F5F0E8]">
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14">
              <div>
                <p className="text-[11px] tracking-[2px] text-[#E6532E]">
                  02 — WHAT I DO
                </p>

                <h2 className="font-serif text-[48px] md:text-[72px] mt-4">
                  Ways we can
                  <br />
                  work together.
                </h2>
              </div>

              <p className="max-w-[320px] text-[14px] leading-7 text-[#A7A29B]">
                Strategic and creative support for people and brands building
                their next chapter.
              </p>
            </div>

            <div className="border-t border-[#F5F0E8]/20">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group grid md:grid-cols-[100px_1fr_1fr_auto] gap-5 md:gap-8 py-8 md:py-10 border-b border-[#F5F0E8]/20 items-start"
                >
                  <p className="text-[#E6532E] text-[12px]">
                    {service.number}
                  </p>

                  <h3 className="font-serif text-[28px] md:text-[38px]">
                    {service.title}
                  </h3>

                  <p className="text-[13px] md:text-[14px] leading-7 text-[#A7A29B]">
                    {service.desc}
                  </p>

                  <ArrowUpRight className="size-5 text-[#E6532E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work">
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            
            <div className="flex items-end justify-between gap-5 mb-12">
              <div>
                <p className="text-[11px] tracking-[2px] text-[#E6532E]">
                  03 — SELECTED WORK
                </p>

                <h2 className="font-serif text-[48px] md:text-[72px] mt-4">
                  A few things
                  <br />
                  I've helped shape.
                </h2>
              </div>

              <button className="hidden md:flex items-center gap-2 text-[13px] border-b border-[#1C1B19] pb-2">
                View All Work
                <MoveRight className="size-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="md:row-span-2">
                <div className="overflow-hidden bg-[#D8CEC0]">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <p className="mt-5 text-[10px] tracking-[2px] text-[#E6532E]">
                  {projects[0].category}
                </p>

                <h3 className="font-serif text-[30px] mt-2">
                  {projects[0].title}
                </h3>
              </div>

              {projects.slice(1).map((project) => (
                <div key={project.title}>
                  <div className="overflow-hidden bg-[#D8CEC0]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <p className="mt-4 text-[10px] tracking-[2px] text-[#E6532E]">
                    {project.category}
                  </p>

                  <h3 className="font-serif text-[28px] mt-2">
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="bg-[#D9D0C4]">
          <div className="w-11/12 max-w-5xl mx-auto py-24 md:py-32 text-center">
            
            <p className="text-[#E6532E] text-[11px] tracking-[2px]">
              KIND WORDS
            </p>

            <blockquote className="font-serif text-[34px] md:text-[56px] leading-[1.05] mt-7">
              “Maya helped us see our brand from a completely different
              perspective. The clarity changed everything.”
            </blockquote>

            <div className="mt-8">
              <p className="text-[13px]">JORDAN MILLER</p>
              <p className="text-[11px] text-[#6F6A63] mt-1">
                Founder, Luma Studio
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#E6532E] text-white">
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            
            <p className="text-[11px] tracking-[2px]">
              04 — LET'S CONNECT
            </p>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mt-7">
              
              <div>
                <h2 className="font-serif text-[55px] md:text-[90px] lg:text-[110px] leading-[0.85] tracking-[-4px]">
                  Have an idea?
                  <br />
                  Let's talk.
                </h2>

                <a
                  href="mailto:hello@mayareed.com"
                  className="inline-flex items-center gap-3 mt-10 text-[14px] border-b border-white pb-2"
                >
                  hello@mayareed.com
                  <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="flex gap-3">
                <a
                  href="#linkedin"
                  className="size-11 border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#E6532E] transition-colors"
                >
                  <LuLinkedin className="size-5" />
                </a>

                <a
                  href="#instagram"
                  className="size-11 border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#E6532E] transition-colors"
                >
                  <LuInstagram className="size-5" />
                </a>

                <a
                  href="#email"
                  className="size-11 border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#E6532E] transition-colors"
                >
                  <Mail className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#1C1B19] text-[#A7A29B]">
        <div className="w-11/12 max-w-7xl mx-auto py-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px]">
          <p>© 2026 MAYA REED. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED WITH INTENTION.</p>
        </div>
      </footer>
    </div>
  );
}