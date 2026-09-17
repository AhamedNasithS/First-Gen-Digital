import React from "react";
import { ArrowUpRight, GraduationCap, User, Building2, RefreshCcw } from "lucide-react";
import student from "../../images/student-website.webp";
import personal from "../../images/personal-website.webp";
import business from "../../images/business-website.webp";
import redesign from "../../images/redesign-website.webp";
import { useNavigate } from "react-router-dom";


const projects = [
    {
        id: 1,
        service: "Student Portfolio",
        title: "MOHAMMED.OS",
        subtitle: "Developer Portfolio for a Modern Student",
        description:
            "A futuristic portfolio website designed for students to showcase their skills, projects, achievements, certificates and resume.",
        icon: GraduationCap,
        image: student,
        tags: ["Portfolio", "Projects", "Resume"],
        gradient: "from-[#6D5DFB] to-[#A855F7]",
        link: "/sample-project/student-website",
    },
    {
        id: 2,
        service: "Personal Website",
        title: "Maya Reed",
        subtitle: "Creative Strategist & Digital Consultant",
        description:
            "An editorial-style personal website built to showcase personal branding, services, creative work and professional identity.",
        icon: User,
        image: personal,
        tags: ["Personal Brand", "Services", "Work"],
        gradient: "from-[#E6532E] to-[#F59A62]",
        link: "/sample-project/personals-website",
    },
    {
        id: 3,
        service: "Business Website",
        title: "Nova Builders",
        subtitle: "Architecture, Interiors & Construction",
        description:
            "A professional business website designed to showcase services, completed projects, client trust and generate new enquiries.",
        icon: Building2,
        image: business,
        tags: ["Business", "Projects", "Enquiries"],
        gradient: "from-[#E8793B] to-[#F59A62]",
        link: "/sample-project/business-website",
    },
    {
        id: 4,
        service: "Website Redesign",
        title: "Luma Café",
        subtitle: "From Outdated to Outstanding",
        description:
            "An interactive before-and-after redesign case study showing how an outdated website can become modern, clear and mobile-friendly.",
        icon: RefreshCcw,
        image: redesign,
        tags: ["Before & After", "Modern UI", "UX"],
        gradient: "from-[#635BFF] to-[#A78BFA]",
        link: "/sample-project/redesign-website",
    },
];

export default function Projects() {
    const navigate = useNavigate();
    return (
        <div className="mb-5 md:mb-10 lg:mb-16 p-[20px] text-center relative overflow-hidden">
            <div className="absolute top-[20%] left-[-150px] size-[350px] bg-[#0066FF]/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-150px] size-[350px] bg-[#00D98C]/10 blur-[150px] rounded-full" />
            <div className="relative w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <p className="text-[#05AFFF] text-[12px] md:text-[14px] uppercase tracking-[3px] font-medium mb-3">Sample Projects</p>
                    <h2 className="font-asap font-bold text-[30px] md:text-[48px] lg:text-[58px] leading-tight">See What We Can<span className="block bg-gradient-to-r from-[#0371E4] to-[#05AFFF] bg-clip-text text-transparent">Build For You</span></h2>
                    <p className="max-w-[650px] mx-auto mt-4 md:mt-6 text-[13px] md:text-[17px] text-[#FFFFFF99] leading-relaxed">Explore sample websites created to demonstrate how each service can transform your ideas into a professional online presence.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                    {projects.map((project) => {
                        const Icon = project.icon;
                        return (
                            <div key={project.id} className="group relative overflow-hidden rounded-[10px] md:rounded-[24px] bg-[#FFFFFF05] border border-[#FFFFFF1A] hover:border-[#05AFFF80] transition-all duration-500 hover:-translate-y-2"
                                onClick={() => {
                                    navigate(project.link);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
                                <div className="relative h-[230px] md:h-[280px] overflow-hidden bg-[#0D1B3A]">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                                        <Icon className="size-[14px] text-[#05AFFF]" />
                                        <span className="text-[11px] md:text-[12px] text-white">{project.service}</span>
                                    </div>
                                    <button className="absolute top-4 right-4 size-[40px] rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                                        <ArrowUpRight className="size-[18px]" />
                                    </button>
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <p className="text-[12px] md:text-[13px] text-white/90 drop-shadow-md">{project.subtitle}</p>
                                        <h3 className="font-asap font-bold text-[26px] md:text-[34px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{project.title}</h3>
                                    </div>
                                </div>
                                <div className="p-5 md:p-7">
                                    <p className="text-[#FFFFFF99] text-[13px] md:text-[15px] leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1.5 text-[11px] rounded-full bg-[#FFFFFF08] border border-[#FFFFFF14] text-[#FFFFFF99]">{tag}</span>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-2 mt-6 text-[#05AFFF] text-[13px] md:text-[15px] font-medium group/btn">
                                        View Sample Project
                                        <ArrowUpRight className="size-[16px] transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </button>
                                </div>
                                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}