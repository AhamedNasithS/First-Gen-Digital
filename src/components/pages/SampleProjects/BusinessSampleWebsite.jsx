import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  X,
} from "lucide-react";
import { LuInstagram, LuLinkedin } from "react-icons/lu";

const services = [
  {
    number: "01",
    title: "Residential Construction",
    desc: "Thoughtfully designed homes built around your lifestyle, needs and future.",
  },
  {
    number: "02",
    title: "Interior Design",
    desc: "Functional and beautiful interiors that bring personality into every space.",
  },
  {
    number: "03",
    title: "Commercial Spaces",
    desc: "Modern spaces designed to help businesses make a lasting impression.",
  },
];

const projects = [
  {
    title: "The Horizon House",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Studio 47",
    category: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "The Work Loft",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Nova Builders transformed our ideas into a home that feels exactly like us. Every detail was thoughtfully handled.",
    name: "Rahul & Priya",
    role: "Homeowners",
  },
  {
    quote:
      "Professional, transparent and incredibly easy to work with. The final space exceeded our expectations.",
    name: "Arun Kumar",
    role: "Business Owner",
  },
];

export default function BusinessSampleWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const faqs = [
    {
      question: "What type of projects do you handle?",
      answer:
        "We handle residential construction, interior design and commercial space projects.",
    },
    {
      question: "How do I get a project estimate?",
      answer:
        "You can contact us through WhatsApp or our enquiry form to discuss your requirements and receive an estimate.",
    },
    {
      question: "Do you handle projects from design to completion?",
      answer:
        "Yes. We can support your project from initial planning and design through execution and completion.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#151515] text-[#F5F2ED] overflow-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#151515]/90 backdrop-blur-xl">
        <div className="w-11/12 max-w-7xl mx-auto h-[76px] flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >
            <div className="size-10 bg-[#E8793B] text-black flex items-center justify-center">
              <Building2 className="size-5" />
            </div>

            <div className="text-left">
              <p className="font-bold tracking-[2px] text-sm">
                NOVA
              </p>
              <p className="text-[8px] tracking-[3px] text-white/40">
                BUILDERS
              </p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-[12px] text-white/60">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#E8793B] transition-colors"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-[#E8793B] transition-colors"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-[#E8793B] transition-colors"
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#E8793B] transition-colors"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex items-center gap-2 bg-[#E8793B] text-black px-5 py-3 text-[11px] font-semibold hover:bg-[#F59A62] transition-colors"
          >
            Start a Project
            <ArrowUpRight className="size-4" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden size-10 border border-white/10 flex items-center justify-center"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#151515] border-b border-white/10 p-6">
            <div className="flex flex-col gap-5 text-sm">
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
                onClick={() => scrollToSection("projects")}
                className="text-left"
              >
                Projects
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
        <section id="home" className="relative md:min-h-[700px] lg:min-h-[760px]">
          <img
            src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=2000&q=80"
            alt="Modern architecture"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#151515] via-[#151515]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />

          <div className="relative z-10 w-11/12 max-w-7xl mx-auto min-h-[500px] md:min-h-[700px] lg:min-h-[760px] flex flex-col justify-end pb-16 md:pb-20">
            <div className="max-w-4xl">
              <p className="text-[#E8793B] text-[11px] tracking-[3px] mb-5">
                ARCHITECTURE • INTERIORS • CONSTRUCTION
              </p>

              <h1 className="text-[48px] sm:text-[65px] md:text-[85px] lg:text-[110px] font-bold tracking-[-4px] leading-[0.86]">
                Spaces built
                <br />
                for <span className="text-[#E8793B]">living.</span>
              </h1>

              <p className="max-w-[520px] mt-8 text-[14px] md:text-[17px] leading-7 text-white/65">
                We design and build thoughtful spaces that balance modern
                architecture, functionality and the way you actually live.
              </p>

              <div className="flex flex-wrap gap-3 mt-9">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-[#E8793B] text-black px-6 py-4 text-[12px] font-semibold flex items-center gap-3"
                >
                  Explore Projects
                  <ArrowRight className="size-4" />
                </button>

                <button
                  className="border border-white/20 px-6 py-4 text-[12px] flex items-center gap-3 hover:bg-white hover:text-black transition-colors"
                >
                  <Play className="size-4 fill-current" />
                  Our Story
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-white/10">
          <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {[
              ["120+", "PROJECTS COMPLETED"],
              ["10+", "YEARS EXPERIENCE"],
              ["35+", "DESIGN EXPERTS"],
              ["12", "INDUSTRY AWARDS"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="py-8 md:py-12 border-r last:border-r-0 border-white/10 px-4 md:px-8"
              >
                <p className="text-2xl md:text-4xl font-bold text-[#E8793B]">
                  {number}
                </p>
                <p className="text-[9px] md:text-[10px] tracking-[1.5px] text-white/40 mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-20">
              <p className="text-[11px] text-[#E8793B] tracking-[2px]">
                01 — WHO WE ARE
              </p>

              <div>
                <h2 className="text-[42px] md:text-[64px] lg:text-[76px] font-bold tracking-[-3px] leading-[0.95]">
                  We don't just construct buildings.
                  <span className="block text-white/35">
                    We create experiences.
                  </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  <p className="text-[14px] md:text-[16px] leading-7 text-white/55">
                    Nova Builders is a multidisciplinary construction and
                    design studio focused on creating spaces that feel
                    timeless, functional and personal.
                  </p>

                  <p className="text-[14px] md:text-[16px] leading-7 text-white/55">
                    From the first conversation to the final detail, our team
                    works closely with you to bring your vision into reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-[#1D1D1D]">
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            <p className="text-[11px] text-[#E8793B] tracking-[2px]">
              02 — WHAT WE DO
            </p>

            <h2 className="mt-5 text-[45px] md:text-[70px] font-bold tracking-[-3px]">
              Built around
              <span className="text-[#E8793B]"> your vision.</span>
            </h2>

            <div className="mt-14 border-t border-white/10">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group grid md:grid-cols-[100px_1fr_1fr_auto] gap-5 md:gap-10 py-8 md:py-10 border-b border-white/10 hover:px-3 transition-all duration-300"
                >
                  <p className="text-[#E8793B] text-sm">
                    {service.number}
                  </p>

                  <h3 className="text-[26px] md:text-[38px] font-semibold">
                    {service.title}
                  </h3>

                  <p className="text-[13px] md:text-[14px] leading-7 text-white/50">
                    {service.desc}
                  </p>

                  <ArrowUpRight className="size-5 text-[#E8793B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
              <div>
                <p className="text-[11px] text-[#E8793B] tracking-[2px]">
                  03 — FEATURED WORK
                </p>

                <h2 className="mt-5 text-[45px] md:text-[70px] font-bold tracking-[-3px]">
                  Spaces we've
                  <span className="text-white/35"> brought to life.</span>
                </h2>
              </div>

              <button className="flex items-center gap-2 text-[12px] text-[#E8793B]">
                View All Projects
                <ArrowRight className="size-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="md:row-span-2">
                <div className="overflow-hidden">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <p className="mt-5 text-[10px] tracking-[2px] text-[#E8793B]">
                  {projects[0].category}
                </p>

                <h3 className="mt-2 text-2xl md:text-3xl">
                  {projects[0].title}
                </h3>
              </div>

              {projects.slice(1).map((project) => (
                <div key={project.title}>
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <p className="mt-4 text-[10px] tracking-[2px] text-[#E8793B]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl md:text-2xl">
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#E8793B] text-black">
          <div className="w-11/12 max-w-7xl mx-auto py-20 md:py-28">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10">
              <div>
                <p className="text-[11px] tracking-[2px]">
                  HOW WE WORK
                </p>

                <h2 className="mt-4 text-[45px] md:text-[65px] font-bold tracking-[-3px] leading-[0.9]">
                  From idea
                  <br />
                  to reality.
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  ["01", "Discover", "We understand your vision, needs and project goals."],
                  ["02", "Design", "We turn your ideas into a clear design direction."],
                  ["03", "Build", "Our team brings every detail to life with care."],
                ].map(([number, title, desc]) => (
                  <div
                    key={number}
                    className="border-t border-black/30 pt-5"
                  >
                    <p className="text-sm">{number}</p>
                    <h3 className="text-xl font-bold mt-6">{title}</h3>
                    <p className="text-sm leading-6 mt-3 text-black/65">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section>
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            <p className="text-[11px] text-[#E8793B] tracking-[2px]">
              CLIENT STORIES
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="border border-white/10 p-7 md:p-10"
                >
                  <p className="text-xl md:text-2xl leading-9 text-white/85">
                    “{item.quote}”
                  </p>

                  <div className="mt-10">
                    <p className="text-sm">{item.name}</p>
                    <p className="text-[11px] text-white/40 mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#1D1D1D]">
          <div className="w-11/12 max-w-5xl mx-auto py-24 md:py-32">
            <p className="text-[11px] text-[#E8793B] tracking-[2px]">
              QUESTIONS
            </p>

            <h2 className="mt-5 text-[42px] md:text-[60px] font-bold tracking-[-2px]">
              Good to know.
            </h2>

            <div className="mt-12 border-t border-white/10">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border-b border-white/10"
                >
                  <button
                    onClick={() =>
                      setActiveFaq(
                        activeFaq === index ? null : index
                      )
                    }
                    className="w-full py-6 flex items-center justify-between gap-5 text-left"
                  >
                    <span className="text-sm md:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`size-5 text-[#E8793B] transition-transform ${
                        activeFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeFaq === index && (
                    <p className="pb-6 max-w-2xl text-[13px] leading-7 text-white/50">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-14">
              <div>
                <p className="text-[11px] text-[#E8793B] tracking-[2px]">
                  START A PROJECT
                </p>

                <h2 className="mt-5 text-[52px] md:text-[75px] font-bold tracking-[-4px] leading-[0.88]">
                  Let's build
                  <br />
                  something
                  <br />
                  <span className="text-[#E8793B]">remarkable.</span>
                </h2>

                <div className="space-y-4 mt-12 text-sm text-white/60">
                  <p className="flex items-center gap-3">
                    <Phone className="size-4 text-[#E8793B]" />
                    +91 98765 43210
                  </p>

                  <p className="flex items-center gap-3">
                    <Mail className="size-4 text-[#E8793B]" />
                    hello@novabuilders.com
                  </p>

                  <p className="flex items-center gap-3">
                    <MapPin className="size-4 text-[#E8793B]" />
                    Chennai, Tamil Nadu
                  </p>
                </div>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="border border-white/10 p-6 md:p-9"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] text-white/40">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      className="w-full mt-3 bg-transparent border-b border-white/15 py-3 outline-none focus:border-[#E8793B]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-white/40">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      className="w-full mt-3 bg-transparent border-b border-white/15 py-3 outline-none focus:border-[#E8793B]"
                    />
                  </div>
                </div>

                <div className="mt-7">
                  <label className="text-[10px] text-white/40">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    className="w-full mt-3 bg-transparent border-b border-white/15 py-3 outline-none focus:border-[#E8793B]"
                  />
                </div>

                <div className="mt-7">
                  <label className="text-[10px] text-white/40">
                    TELL US ABOUT YOUR PROJECT
                  </label>
                  <textarea
                    rows="4"
                    className="resize-none w-full mt-3 bg-transparent border-b border-white/15 py-3 outline-none focus:border-[#E8793B]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full bg-[#E8793B] text-black py-4 text-[12px] font-semibold flex items-center justify-center gap-3 hover:bg-[#F59A62]"
                >
                  Send Enquiry
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING WHATSAPP */}
      <a
        href="#whatsapp"
        className="fixed bottom-5 right-5 z-40 size-12 bg-[#25D366] text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <Phone className="size-5" />
      </a>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="w-11/12 max-w-7xl mx-auto py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Building2 className="size-4 text-[#E8793B]" />
            <span className="text-[11px] tracking-[2px]">
              NOVA BUILDERS
            </span>
          </div>

          <p className="text-[10px] text-white/35">
            © 2026 NOVA BUILDERS. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-4 text-white/50">
            <LuInstagram className="size-4 hover:text-[#E8793B] cursor-pointer" />
            <LuLinkedin className="size-4 hover:text-[#E8793B] cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}