import React from "react";
import logo from "../images/logo.svg";
import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const paths = [
        { path: "/", title: "Home" },
        { path: "/student-protfolio", title: "Student Portfolio" },
        { path: "/personal-protfolio", title: "Personal Portfolio" },
        { path: "/business-protfolio", title: "Business Portfolio" },
        { path: "/redesign-protfolio", title: "Website Redesign" },
    ];

    const handlePath = (path) => {
        if (location.pathname !== path) {
            navigate(path);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="relative z-[100] bg-transparent px-4 md:px-8 py-6 md:py-12 mt-5 md:mt-20 border-t border-[#FFFFFF1A]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
                <div className="lg:col-span-2">
                    <img src={logo} alt="First Gen" loading="lazy" className="cursor-pointer" onClick={() => handlePath("/")} />
                    <p className="text-[#FFFFFF99] text-[14px] font-normal mt-4"> Building modern, responsive, and pixel-perfect websites that help brands stand out online. </p>
                </div>
                <div>
                    <p className="text-[#FFFFFF] text-[16px] font-normal"> Quick Links</p>
                    <div className="mt-4 text-[#FFFFFF99] text-[14px] font-normal flex flex-col gap-2.5">
                        {paths.map((item) => (
                            <p key={item.path} className={`cursor-pointer transition-colors hover:text-[#0066FF] ${location.pathname === item.path ? "text-[#0066FF]" : ""}`} onClick={() => handlePath(item.path)}>{item.title}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-[#FFFFFF] text-[16px] font-normal">Connect</p>
                    <div className="flex gap-4 items-center mt-4">
                        <button type="button" className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] size-[40px] rounded-[10px] flex justify-center items-center cursor-pointer text-[20px] text-[#FFF] hover:scale-105 duration-300 ease-in transition-all" style={{ boxShadow: "4px 6px 25px 0px #00000024" }} onClick={() => window.open("https://www.instagram.com/firstgendigital/", "_blank")}>
                            <LuInstagram />
                        </button>
                        <button type="button" className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] size-[40px] rounded-[10px] flex justify-center items-center cursor-pointer text-[20px] text-[#FFF] hover:scale-105 duration-300 ease-in transition-all" style={{ boxShadow: "4px 6px 25px 0px #00000024" }} onClick={() => window.open("https://www.linkedin.com/in/first-gen-digital-4941a0419/", "_blank")}>
                            <LuLinkedin />
                        </button>
                        <button type="button" className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] size-[40px] rounded-[10px] flex justify-center items-center cursor-pointer text-[20px] text-[#FFF] hover:scale-105 duration-300 ease-in transition-all" style={{ boxShadow: "4px 6px 25px 0px #00000024" }} onClick={() => window.open("https://www.facebook.com/profile.php?id=61591249651408", "_blank")}>
                            <LuFacebook />
                        </button>
                    </div>
                    <p className="mt-3 text-[#FFFFFF99] text-[14px] font-normal">Get in Touch →</p>
                </div>
            </div>
            <div className="border-t border-[#FFFFFF1A] py-4 flex flex-col md:flex-row gap-3 md:gap-6 justify-between items-center text-[#FFFFFF99] text-[13px]">
                <p>© 2026 FirstGen. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <button type="button" onClick={() => handlePath("/privacy-policy")} className="hover:text-[#0066FF] transition-colors">Privacy Policy</button>
                    <button type="button" onClick={() => handlePath("/terms-and-conditions")} className="hover:text-[#0066FF] transition-colors">Terms & Conditions</button>
                    <button type="button" onClick={() => handlePath("/refund-policy")} className="hover:text-[#0066FF] transition-colors">Refund Policy</button>
                </div>
            </div>
        </footer>
    );
}