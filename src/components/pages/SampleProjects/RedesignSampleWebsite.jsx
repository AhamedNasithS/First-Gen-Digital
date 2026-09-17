import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Coffee,
  Menu,
  Search,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const problems = [
  {
    icon: Smartphone,
    title: "Poor Mobile Experience",
    desc: "The previous layout was difficult to navigate and not optimized for smaller screens.",
  },
  {
    icon: Zap,
    title: "Slow & Outdated",
    desc: "Heavy layouts and an outdated structure created a poor user experience.",
  },
  {
    icon: Search,
    title: "Weak Visual Hierarchy",
    desc: "Important information was difficult to find and the content lacked clear structure.",
  },
];

const improvements = [
  "Modern and responsive user interface",
  "Clearer navigation and user journey",
  "Improved mobile experience",
  "Better visual hierarchy",
  "Stronger calls-to-action",
  "Optimized performance structure",
];

export default function RedesignSampleWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState("after");
  const [activeFaq, setActiveFaq] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const faqs = [
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes. We can analyze your current website and redesign the visual experience, structure and user journey.",
    },
    {
      question: "Do I need to rebuild everything?",
      answer:
        "Not always. Depending on your existing website, we can redesign selected pages or rebuild the complete experience.",
    },
    {
      question: "Will the redesigned website work on mobile?",
      answer:
        "Yes. Every redesign is created with responsive layouts to provide a better experience across desktop, tablet and mobile devices.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#181818] overflow-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#F7F7F5]/90 backdrop-blur-xl border-b border-black/10">
        <div className="w-11/12 max-w-7xl mx-auto h-[76px] flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 font-bold text-lg"
          >
            <div className="size-9 rounded-full bg-[#181818] text-white flex items-center justify-center">
              <Sparkles className="size-4" />
            </div>

            REVIVE.
          </button>

          <nav className="hidden md:flex items-center gap-8 text-[12px]">
            <button
              onClick={() => scrollToSection("before-after")}
              className="hover:text-[#635BFF]"
            >
              Transformation
            </button>

            <button
              onClick={() => scrollToSection("problems")}
              className="hover:text-[#635BFF]"
            >
              Problems
            </button>

            <button
              onClick={() => scrollToSection("results")}
              className="hover:text-[#635BFF]"
            >
              Results
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex items-center gap-2 bg-[#635BFF] text-white px-5 py-3 rounded-full text-[12px] hover:scale-105 transition-transform"
          >
            Redesign My Website
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
          <div className="absolute top-full left-0 right-0 bg-[#F7F7F5] border-b border-black/10 p-6 md:hidden">
            <div className="flex flex-col gap-5">
              <button
                onClick={() => scrollToSection("before-after")}
                className="text-left"
              >
                Transformation
              </button>

              <button
                onClick={() => scrollToSection("problems")}
                className="text-left"
              >
                Problems
              </button>

              <button
                onClick={() => scrollToSection("results")}
                className="text-left"
              >
                Results
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative">
          <div className="w-11/12 max-w-7xl mx-auto py-20 md:py-32">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-[11px] font-medium">
                <Sparkles className="size-4" />
                WEBSITE REDESIGN CASE STUDY
              </div>

              <h1 className="mt-7 text-[52px] sm:text-[70px] md:text-[100px] lg:text-[120px] font-bold tracking-[-5px] leading-[0.85]">
                From
                <span className="text-black/20"> outdated</span>
                <br />
                to <span className="text-[#635BFF]">outstanding.</span>
              </h1>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10">
                <p className="max-w-[520px] text-[15px] md:text-[18px] leading-8 text-black/55">
                  A complete transformation of an outdated café website into a
                  modern digital experience designed for today's customers.
                </p>

                <button
                  onClick={() => scrollToSection("before-after")}
                  className="flex items-center gap-3 bg-[#181818] text-white px-6 py-4 rounded-full text-[12px] w-fit"
                >
                  See The Transformation
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section id="before-after">
          <div className="w-11/12 max-w-7xl mx-auto pb-24 md:pb-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
              <div>
                <p className="text-[11px] tracking-[2px] text-[#635BFF]">
                  01 — THE TRANSFORMATION
                </p>

                <h2 className="text-[38px] md:text-[60px] font-bold tracking-[-3px] mt-3">
                  One business.
                  <br />
                  Two completely different experiences.
                </h2>
              </div>

              <div className="flex bg-black/5 rounded-full p-1 w-fit">
                <button
                  onClick={() => setView("before")}
                  className={`px-5 py-2 rounded-full text-[11px] transition-all ${
                    view === "before"
                      ? "bg-[#181818] text-white"
                      : "text-black/50"
                  }`}
                >
                  BEFORE
                </button>

                <button
                  onClick={() => setView("after")}
                  className={`px-5 py-2 rounded-full text-[11px] transition-all ${
                    view === "after"
                      ? "bg-[#635BFF] text-white"
                      : "text-black/50"
                  }`}
                >
                  AFTER
                </button>
              </div>
            </div>

            {/* OLD WEBSITE */}
            {view === "before" && (
              <div className="border-[8px] border-[#D6D6D6] bg-[#EFEFEF] shadow-xl">
                <div className="bg-[#D6D6D6] px-3 py-2 flex gap-2">
                  <span className="size-2 rounded-full bg-red-400" />
                  <span className="size-2 rounded-full bg-yellow-400" />
                  <span className="size-2 rounded-full bg-green-400" />
                </div>

                <div className="bg-white text-[#222]">
                  <div className="bg-[#5A3A25] px-5 md:px-10 py-4 flex justify-between items-center">
                    <h3 className="font-serif text-white text-xl">
                      LUMA CAFÉ
                    </h3>

                    <div className="hidden md:flex gap-6 text-[11px] text-white/70">
                      <span>HOME</span>
                      <span>ABOUT</span>
                      <span>MENU</span>
                      <span>CONTACT</span>
                    </div>
                  </div>

                  <div className="text-center py-14 md:py-24 px-5">
                    <h1 className="font-serif text-[40px] md:text-[70px]">
                      Welcome to Luma Café
                    </h1>

                    <p className="mt-5 text-sm text-gray-500">
                      The best coffee and food in town.
                    </p>

                    <button className="mt-6 bg-[#7C4A2D] text-white px-6 py-3 text-sm">
                      Click Here
                    </button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 px-5 md:px-10 pb-10">
                    {[
                      "Coffee",
                      "Breakfast",
                      "Desserts",
                    ].map((item) => (
                      <div
                        key={item}
                        className="border border-gray-300 p-5 text-center"
                      >
                        <div className="h-24 bg-gray-200 mb-4" />
                        <h4 className="font-serif text-lg">{item}</h4>
                        <p className="text-xs text-gray-500 mt-2">
                          Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* NEW WEBSITE */}
            {view === "after" && (
              <div className="rounded-[24px] overflow-hidden bg-[#151B16] text-white shadow-2xl">
                <div className="px-5 md:px-10 py-5 flex justify-between items-center border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Coffee className="size-5 text-[#D6A76A]" />

                    <div>
                      <p className="text-sm tracking-[3px]">LUMA</p>
                      <p className="text-[8px] tracking-[4px] text-white/40">
                        COFFEE HOUSE
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex gap-8 text-[10px] tracking-[1px] text-white/60">
                    <span>OUR STORY</span>
                    <span>MENU</span>
                    <span>LOCATION</span>
                  </div>

                  <button className="border border-[#D6A76A] text-[#D6A76A] px-4 py-2 text-[10px]">
                    RESERVE A TABLE
                  </button>
                </div>

                <div className="relative min-h-[500px] md:min-h-[600px] flex items-end p-6 md:p-14">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=80"
                    alt="Luma Cafe"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#151B16] via-[#151B16]/20 to-transparent" />

                  <div className="relative z-10 max-w-3xl">
                    <p className="text-[#D6A76A] text-[10px] tracking-[3px]">
                      SLOW DOWN. STAY A WHILE.
                    </p>

                    <h1 className="mt-4 text-[52px] md:text-[90px] font-serif leading-[0.9]">
                      Coffee for
                      <br />
                      <span className="italic text-[#D6A76A]">
                        good moments.
                      </span>
                    </h1>

                    <button className="mt-8 bg-[#D6A76A] text-[#151B16] px-6 py-4 text-[11px] font-semibold">
                      EXPLORE OUR MENU
                    </button>
                  </div>
                </div>
              </div>
            )}

            <p className="text-center mt-6 text-[11px] text-black/40">
              Click BEFORE and AFTER to compare the redesign.
            </p>
          </div>
        </section>

        {/* PROBLEMS */}
        <section id="problems" className="bg-[#181818] text-white">
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            <p className="text-[11px] tracking-[2px] text-[#8E88FF]">
              02 — WHAT WASN'T WORKING
            </p>

            <h2 className="mt-5 text-[45px] md:text-[72px] font-bold tracking-[-4px] leading-[0.9] max-w-4xl">
              The old website was
              <span className="text-white/30"> holding the business back.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-5 mt-16">
              {problems.map((problem) => {
                const Icon = problem.icon;

                return (
                  <div
                    key={problem.title}
                    className="border border-white/10 p-7 md:p-9"
                  >
                    <div className="size-11 rounded-full bg-[#635BFF]/15 text-[#8E88FF] flex items-center justify-center">
                      <Icon className="size-5" />
                    </div>

                    <h3 className="text-xl font-semibold mt-8">
                      {problem.title}
                    </h3>

                    <p className="text-[13px] leading-7 text-white/45 mt-4">
                      {problem.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section>
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-[11px] tracking-[2px] text-[#635BFF]">
                  03 — THE REDESIGN
                </p>

                <h2 className="mt-5 text-[48px] md:text-[70px] font-bold tracking-[-4px] leading-[0.9]">
                  Designed for
                  <br />
                  <span className="text-[#635BFF]">
                    today's customer.
                  </span>
                </h2>

                <p className="mt-8 max-w-[480px] text-[15px] leading-8 text-black/55">
                  The redesign focused on creating a clear visual identity,
                  improving the customer journey and making every important
                  action easier to find.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {improvements.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 border-b border-black/10 pb-5"
                  >
                    <div className="shrink-0 size-6 rounded-full bg-[#635BFF] text-white flex items-center justify-center">
                      <Check className="size-4" />
                    </div>

                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="bg-[#635BFF] text-white">
          <div className="w-11/12 max-w-7xl mx-auto py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-[11px] tracking-[2px] text-white/60">
                04 — THE IMPACT
              </p>

              <h2 className="mt-5 text-[48px] md:text-[76px] font-bold tracking-[-4px] leading-[0.9]">
                A better website
                <br />
                creates a better
                <span className="text-white/50"> first impression.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
              {[
                ["Modern", "VISUAL IDENTITY"],
                ["Mobile", "OPTIMIZED"],
                ["Faster", "USER JOURNEY"],
                ["Clearer", "CALLS TO ACTION"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-t border-white/30 pt-5"
                >
                  <p className="text-2xl md:text-4xl font-bold">
                    {value}
                  </p>

                  <p className="text-[9px] tracking-[1.5px] text-white/55 mt-2">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="w-11/12 max-w-4xl mx-auto py-24 md:py-32">
            <p className="text-[11px] tracking-[2px] text-[#635BFF]">
              QUESTIONS
            </p>

            <h2 className="mt-4 text-[45px] md:text-[65px] font-bold tracking-[-3px]">
              Thinking about a redesign?
            </h2>

            <div className="mt-12 border-t border-black/10">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border-b border-black/10"
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
                      className={`size-5 text-[#635BFF] transition-transform ${
                        activeFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeFaq === index && (
                    <p className="pb-6 text-[13px] leading-7 text-black/55">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="w-11/12 max-w-7xl mx-auto mb-16 md:mb-24"
        >
          <div className="relative overflow-hidden rounded-[24px] bg-[#181818] text-white px-7 py-16 md:p-16">
            <div className="absolute size-[400px] bg-[#635BFF] rounded-full blur-[150px] opacity-40 top-[-200px] right-[-100px]" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-[11px] tracking-[2px] text-[#8E88FF]">
                READY FOR A CHANGE?
              </p>

              <h2 className="mt-5 text-[48px] md:text-[75px] font-bold tracking-[-4px] leading-[0.9]">
                Your website
                <br />
                deserves better.
              </h2>

              <p className="mt-7 text-[15px] text-white/50 leading-7">
                Let's transform your existing website into a modern digital
                experience your customers will actually enjoy using.
              </p>

              <button className="mt-9 bg-[#635BFF] px-7 py-4 rounded-full text-[12px] flex items-center gap-3 hover:scale-105 transition-transform">
                Start Your Redesign
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-black/10">
        <div className="w-11/12 max-w-7xl mx-auto py-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-bold text-sm">REVIVE.</p>

          <p className="text-[10px] text-black/40">
            WEBSITE REDESIGN CASE STUDY — 2026
          </p>

          <p className="text-[10px] text-[#635BFF]">
            BEFORE → AFTER
          </p>
        </div>
      </footer>
    </div>
  );
}