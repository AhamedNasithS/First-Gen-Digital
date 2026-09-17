import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Terminal,
  X,
} from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Responsive Design", "UI Design"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "VS Code"],
  },
];

const projects = [
  {
    id: "01",
    name: "dev-commerce",
    type: "E-Commerce Website",
    desc: "A responsive shopping experience with modern UI components and product interactions.",
    tech: ["React", "Tailwind", "JavaScript"],
  },
  {
    id: "02",
    name: "task-flow",
    type: "Task Management App",
    desc: "A clean productivity application for organizing tasks and tracking daily progress.",
    tech: ["React", "Local Storage", "CSS"],
  },
  {
    id: "03",
    name: "weather-now",
    type: "Weather Application",
    desc: "A weather dashboard that displays real-time conditions with a simple user experience.",
    tech: ["JavaScript", "API", "Responsive"],
  },
];

const journey = [
  {
    year: "2026",
    title: "Building Real-World Projects",
    desc: "Focused on creating responsive and practical web applications.",
  },
  {
    year: "2025",
    title: "Learning React",
    desc: "Started building component-based frontend applications.",
  },
  {
    year: "2024",
    title: "Frontend Development Journey",
    desc: "Learned HTML, CSS, JavaScript and responsive design.",
  },
  {
    year: "2023",
    title: "Started Exploring Technology",
    desc: "Developed an interest in web development and digital products.",
  },
];

export default function StudentSampleWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(projects[0]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#080B0A] text-[#F4F7F5] font-mono selection:bg-[#A3FF12] selection:text-black">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#A3FF12 1px, transparent 1px), linear-gradient(90deg, #A3FF12 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute top-[-200px] left-[20%] size-[500px] rounded-full bg-[#A3FF12]/[0.04] blur-[150px]" />
        <div className="absolute bottom-[-200px] right-[10%] size-[500px] rounded-full bg-[#05AFFF]/[0.05] blur-[150px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-50 border-b border-[#24302B] bg-[#080B0A]/80 backdrop-blur-xl">
        <div className="w-11/12 max-w-7xl mx-auto h-[72px] flex items-center justify-between">

          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-left"
          >
            <div className="size-9 border border-[#A3FF12]/60 bg-[#A3FF12]/10 flex items-center justify-center">
              <Terminal className="size-4 text-[#A3FF12]" />
            </div>

            <div>
              <p className="text-sm font-bold tracking-wide">MOHAMMED.OS</p>
              <p className="text-[9px] text-[#8B9690]">
                PORTFOLIO_SYSTEM v1.0
              </p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-7 text-xs text-[#8B9690]">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#A3FF12] transition-colors"
            >
              ./about
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-[#A3FF12] transition-colors"
            >
              ./skills
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-[#A3FF12] transition-colors"
            >
              ./projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#A3FF12] transition-colors"
            >
              ./contact
            </button>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden size-9 border border-[#24302B] flex items-center justify-center"
          >
            {menuOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#080B0A] border-b border-[#24302B] p-5">
            <div className="flex flex-col gap-4 text-sm text-[#8B9690]">
              <button onClick={() => scrollToSection("about")}>
                ./about
              </button>
              <button onClick={() => scrollToSection("skills")}>
                ./skills
              </button>
              <button onClick={() => scrollToSection("projects")}>
                ./projects
              </button>
              <button onClick={() => scrollToSection("contact")}>
                ./contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main id="home" className="relative z-10">

        <section className="min-h-[calc(100vh-72px)] flex items-center">
          <div className="w-11/12 max-w-7xl mx-auto py-16 md:py-24">

            <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-10 lg:gap-20 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 border border-[#24302B] bg-[#101614]/70 px-3 py-2 text-[10px] text-[#8B9690]">
                  <span className="size-1.5 rounded-full bg-[#A3FF12] animate-pulse" />
                  SYSTEM STATUS: ONLINE
                </div>

                <div className="mt-8 text-xs md:text-sm text-[#A3FF12]">
                  <span className="text-[#8B9690]">$</span> whoami
                </div>

                <h1 className="mt-4 text-[42px] sm:text-[58px] md:text-[76px] lg:text-[88px] leading-[0.9] font-bold tracking-[-4px]">
                  MOHAMMED
                  <br />
                  <span className="text-[#A3FF12]">ALI</span>
                  <span className="animate-pulse text-[#A3FF12]">_</span>
                </h1>

                <p className="mt-6 max-w-xl text-sm md:text-base leading-7 text-[#8B9690]">
                  Computer Science Student and aspiring Frontend Developer.
                  I build clean, responsive and interactive digital
                  experiences for the web.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="bg-[#A3FF12] text-black px-5 py-3 text-xs font-bold flex items-center gap-2 hover:bg-[#c0ff54] transition-colors"
                  >
                    EXPLORE_PROJECTS
                    <ArrowDown className="size-4" />
                  </button>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="border border-[#24302B] bg-[#101614]/50 px-5 py-3 text-xs text-[#F4F7F5] hover:border-[#A3FF12]/70 transition-colors"
                  >
                    CONTACT_ME
                  </button>
                </div>

                <div className="mt-12 flex items-center gap-5">
                  <a
                    href="#github"
                    className="text-[#8B9690] hover:text-[#A3FF12]"
                  >
                    <LuGithub className="size-5" />
                  </a>

                  <a
                    href="#linkedin"
                    className="text-[#8B9690] hover:text-[#A3FF12]"
                  >
                    <LuLinkedin className="size-5" />
                  </a>

                  <a
                    href="#mail"
                    className="text-[#8B9690] hover:text-[#A3FF12]"
                  >
                    <Mail className="size-5" />
                  </a>
                </div>
              </div>

              {/* Right System Card */}
              <div className="border border-[#24302B] bg-[#0C110F]/90 shadow-[0_0_100px_rgba(163,255,18,0.04)]">

                <div className="flex items-center justify-between px-4 py-3 border-b border-[#24302B]">
                  <div className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-[#FF5F56]" />
                    <span className="size-2 rounded-full bg-[#FFBD2E]" />
                    <span className="size-2 rounded-full bg-[#27C93F]" />
                  </div>

                  <span className="text-[9px] text-[#8B9690]">
                    profile.json
                  </span>
                </div>

                <div className="p-5 md:p-7 text-xs md:text-sm leading-7">
                  <p className="text-[#8B9690]">{"{"}</p>

                  <p className="pl-4">
                    <span className="text-[#05AFFF]">"name"</span>:
                    <span className="text-[#F4F7F5]"> "Mohammed Ali"</span>,
                  </p>

                  <p className="pl-4">
                    <span className="text-[#05AFFF]">"role"</span>:
                    <span className="text-[#A3FF12]">
                      {" "}
                      "Frontend Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-4">
                    <span className="text-[#05AFFF]">"status"</span>:
                    <span className="text-[#A3FF12]"> "Available"</span>,
                  </p>

                  <p className="pl-4">
                    <span className="text-[#05AFFF]">"location"</span>:
                    <span className="text-[#F4F7F5]">
                      {" "}
                      "Tamil Nadu, India"
                    </span>
                    ,
                  </p>

                  <p className="pl-4">
                    <span className="text-[#05AFFF]">"currently"</span>: [
                  </p>

                  <p className="pl-8 text-[#8B9690]">
                    "Learning React",
                  </p>

                  <p className="pl-8 text-[#8B9690]">
                    "Building Projects",
                  </p>

                  <p className="pl-8 text-[#8B9690]">
                    "Improving UI Skills"
                  </p>

                  <p className="pl-4">]</p>

                  <p className="text-[#8B9690]">{"}"}</p>
                </div>

                <div className="border-t border-[#24302B] grid grid-cols-3">
                  <div className="p-4 border-r border-[#24302B]">
                    <p className="text-xl font-bold text-[#A3FF12]">04+</p>
                    <p className="text-[9px] text-[#8B9690] mt-1">
                      PROJECTS
                    </p>
                  </div>

                  <div className="p-4 border-r border-[#24302B]">
                    <p className="text-xl font-bold text-[#A3FF12]">06</p>
                    <p className="text-[9px] text-[#8B9690] mt-1">
                      SKILLS
                    </p>
                  </div>

                  <div className="p-4">
                    <p className="text-xl font-bold text-[#A3FF12]">02</p>
                    <p className="text-[9px] text-[#8B9690] mt-1">
                      YEARS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-y border-[#24302B] bg-[#0C110F]/50"
        >
          <div className="w-11/12 max-w-7xl mx-auto py-20 md:py-28">

            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10">

              <div>
                <p className="text-[#A3FF12] text-xs">
                  <span className="text-[#8B9690]">01.</span> ABOUT_ME
                </p>

                <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                  About
                  <br />
                  <span className="text-[#8B9690]">the developer.</span>
                </h2>
              </div>

              <div className="border border-[#24302B] bg-[#101614]/40">
                <div className="border-b border-[#24302B] px-5 py-3 text-[10px] text-[#8B9690]">
                  about.txt
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-xs text-[#A3FF12]">
                    $ cat about.txt
                  </p>

                  <p className="mt-5 text-sm md:text-base text-[#8B9690] leading-8">
                    Hello! I'm Mohammed, a Computer Science student with a strong
                    interest in frontend development and user interface design.
                    I enjoy turning ideas into responsive, user-friendly
                    websites.
                  </p>

                  <p className="mt-4 text-sm md:text-base text-[#8B9690] leading-8">
                    Currently, I'm focused on improving my React skills,
                    building practical projects and learning how great digital
                    experiences are designed.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3 mt-8">

                    <div className="border border-[#24302B] p-4">
                      <GraduationCap className="size-5 text-[#A3FF12]" />
                      <p className="mt-4 text-xs">Education</p>
                      <p className="mt-1 text-[10px] text-[#8B9690]">
                        Computer Science
                      </p>
                    </div>

                    <div className="border border-[#24302B] p-4">
                      <MapPin className="size-5 text-[#A3FF12]" />
                      <p className="mt-4 text-xs">Location</p>
                      <p className="mt-1 text-[10px] text-[#8B9690]">
                        Tamil Nadu, India
                      </p>
                    </div>

                    <div className="border border-[#24302B] p-4">
                      <BriefcaseBusiness className="size-5 text-[#A3FF12]" />
                      <p className="mt-4 text-xs">Goal</p>
                      <p className="mt-1 text-[10px] text-[#8B9690]">
                        Frontend Developer
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="w-11/12 max-w-7xl mx-auto py-20 md:py-28">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
              <div>
                <p className="text-[#A3FF12] text-xs">
                  <span className="text-[#8B9690]">02.</span> SKILL_MATRIX
                </p>

                <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                  Tech stack
                  <span className="text-[#8B9690]">_</span>
                </h2>
              </div>

              <p className="max-w-md text-xs md:text-sm leading-6 text-[#8B9690]">
                Technologies and tools currently used for building modern web
                experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">

              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="border border-[#24302B] bg-[#101614]/40 p-6"
                >
                  <div className="flex items-center gap-3">
                    <Code2 className="size-5 text-[#A3FF12]" />

                    <p className="text-sm">{skill.category}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-7">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="border border-[#24302B] px-3 py-2 text-[10px] text-[#8B9690] hover:border-[#A3FF12]/60 hover:text-[#A3FF12] transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-y border-[#24302B] bg-[#0C110F]/50"
        >
          <div className="w-11/12 max-w-7xl mx-auto py-20 md:py-28">

            <p className="text-[#A3FF12] text-xs">
              <span className="text-[#8B9690]">03.</span> PROJECT_EXPLORER
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
              Selected projects<span className="text-[#A3FF12]">.</span>
            </h2>

            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-0 mt-12 border border-[#24302B]">

              {/* File Explorer */}
              <div className="border-b lg:border-b-0 lg:border-r border-[#24302B] bg-[#080B0A]/70">

                <div className="px-5 py-4 border-b border-[#24302B] text-[10px] text-[#8B9690]">
                  📁 PROJECTS_DIRECTORY
                </div>

                <div className="p-3">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveProject(project)}
                      className={`w-full text-left p-4 transition-all ${activeProject.id === project.id
                          ? "bg-[#A3FF12]/10 border border-[#A3FF12]/30 text-[#A3FF12]"
                          : "border border-transparent text-[#8B9690] hover:bg-[#FFFFFF03]"
                        }`}
                    >
                      <p className="text-[10px]">
                        📂 {project.id}_{project.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div>
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#24302B]">
                  <span className="text-[10px] text-[#8B9690]">
                    {activeProject.name}/README.md
                  </span>

                  <ExternalLink className="size-4 text-[#8B9690]" />
                </div>

                <div className="p-6 md:p-10 min-h-[350px] flex flex-col justify-between">

                  <div>
                    <p className="text-[#A3FF12] text-xs">
                      PROJECT_{activeProject.id}
                    </p>

                    <h3 className="mt-4 text-3xl md:text-5xl font-bold">
                      {activeProject.name}
                    </h3>

                    <p className="mt-2 text-xs text-[#05AFFF]">
                      {activeProject.type}
                    </p>

                    <p className="max-w-xl mt-7 text-sm md:text-base leading-7 text-[#8B9690]">
                      {activeProject.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-7">
                      {activeProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] border border-[#24302B] px-3 py-2 text-[#8B9690]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="mt-10 flex items-center gap-2 text-xs text-[#A3FF12] hover:gap-3 transition-all">
                    VIEW_PROJECT
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section>
          <div className="w-11/12 max-w-7xl mx-auto py-20 md:py-28">

            <p className="text-[#A3FF12] text-xs">
              <span className="text-[#8B9690]">04.</span> JOURNEY.LOG
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Learning journey<span className="text-[#8B9690]">.</span>
            </h2>

            <div className="mt-12 max-w-4xl">
              {journey.map((item, index) => (
                <div
                  key={item.year}
                  className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-5 border-l border-[#24302B] relative pl-6 pb-10 last:pb-0"
                >
                  <span className="absolute -left-[5px] top-0 size-2 rounded-full bg-[#A3FF12]" />

                  <p className="text-sm md:text-lg text-[#A3FF12]">
                    {item.year}
                  </p>

                  <div>
                    <h3 className="text-sm md:text-lg">{item.title}</h3>

                    <p className="mt-2 text-xs md:text-sm leading-6 text-[#8B9690]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume */}
        <section className="border-y border-[#24302B] bg-[#A3FF12] text-black">
          <div className="w-11/12 max-w-7xl mx-auto py-14 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

            <div>
              <p className="text-[10px] font-bold opacity-60">
                COMPLETE_PROFILE.PDF
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
                Want the complete profile?
              </h2>
            </div>

            <button className="border border-black px-6 py-4 text-xs font-bold flex items-center gap-3 hover:bg-black hover:text-[#A3FF12] transition-colors">
              DOWNLOAD_RESUME
              <Download className="size-4" />
            </button>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="w-11/12 max-w-5xl mx-auto py-20 md:py-28">

            <div className="text-center">
              <p className="text-[#A3FF12] text-xs">
                <span className="text-[#8B9690]">05.</span> CONTACT_TERMINAL
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                Let's build something<span className="text-[#A3FF12]">.</span>
              </h2>
            </div>

            <div className="mt-12 border border-[#24302B] bg-[#101614]/40">

              <div className="flex items-center gap-2 px-5 py-4 border-b border-[#24302B] text-[10px] text-[#8B9690]">
                <Terminal className="size-4 text-[#A3FF12]" />
                send-message.sh
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="p-6 md:p-10 space-y-6"
              >
                <div>
                  <label className="block text-[10px] text-[#A3FF12] mb-3">
                    $ NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="w-full bg-transparent border-b border-[#24302B] pb-3 outline-none text-sm placeholder:text-[#4E5953] focus:border-[#A3FF12]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-[#A3FF12] mb-3">
                    $ EMAIL
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="w-full bg-transparent border-b border-[#24302B] pb-3 outline-none text-sm placeholder:text-[#4E5953] focus:border-[#A3FF12]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-[#A3FF12] mb-3">
                    $ MESSAGE
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Type your message..."
                    className="w-full resize-none bg-transparent border-b border-[#24302B] pb-3 outline-none text-sm placeholder:text-[#4E5953] focus:border-[#A3FF12]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#A3FF12] text-black px-6 py-4 text-xs font-bold flex items-center justify-center gap-3 hover:bg-[#c0ff54] transition-colors"
                >
                  EXECUTE_MESSAGE
                  <ArrowUpRight className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#24302B]">
        <div className="w-11/12 max-w-7xl mx-auto py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#8B9690]">
          <p>© 2026 MOHAMMED.OS — ALL SYSTEMS OPERATIONAL</p>

          <p>
            BUILT_WITH <span className="text-[#A3FF12]">REACT</span> +
            PASSION
          </p>
        </div>
      </footer>
    </div>
  );
}