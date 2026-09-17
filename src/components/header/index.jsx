import React from "react";
import logo from "../images/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header({isOpen, setIsOpen, setFormOpen }) {
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
        setIsOpen(false);
        if (location.pathname !== path) {
            navigate(path);
        }
    };

    return (
        <header className="sticky top-0 left-0 w-full z-50 bg-[#000000CC] backdrop-blur-xl border-y border-[#FFFFFF1A] px-4 py-2 md:px-8 md:py-4 flex justify-between items-center lg:fixed lg:top-6 lg:left-1/2 lg:-translate-x-1/2 lg:w-[calc(100%-80px)] lg:max-w-[1400px] lg:rounded-2xl lg:border" style={{ boxShadow: "4px 6px 25px 0px #00000024" }}>
            <button type="button" className="p-2 rounded-[8px] cursor-pointer" onClick={() => handlePath("/")}>
                <img src={logo} alt="First Gen" className="w-[150px] sm:w-[200px]" loading="lazy" />
            </button>
            <nav className="hidden lg:flex justify-center gap-8 items-center font-normal text-[16px]">
                {paths.map((item) => (
                    <button key={item.path} type="button" onClick={() => handlePath(item.path)} className={`cursor-pointer transition-colors duration-500 ${location.pathname === item.path ? "text-[#0066FF]" : "text-[#FFFFFFE5]" }`}>{item.title}</button>
                ))}
                <button type="button" className="w-[100px] h-9 rounded-[8px] bg-[#0066FF] text-white text-[14px] hover:scale-105 transition-all duration-500" style={{ boxShadow: "0px 0px 20px 0px #0066FF4D" }} onClick={() => setFormOpen(true)}>Contact Us</button>
            </nav>
            <div className="flex gap-4 lg:hidden">
                <button type="button" className="w-[100px] h-9 rounded-[8px] bg-[#0066FF] text-white text-[14px]" onClick={() => setFormOpen(true)}> Contact Us</button>
                <button type="button" className="size-9 rounded-[8px] border border-white flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                    <div className="flex relative flex-col gap-1 w-5 h-[17px] justify-center items-center">
                        <span className={`w-full h-[2px] rounded-full bg-white transition-all duration-500 ${isOpen ? "absolute -rotate-45 top-[7px]" : ""}`}/>
                        <span className={`w-full h-[2px] rounded-full bg-white transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}/>
                        <span className={`w-full h-[2px] rounded-full bg-white transition-all duration-500 ${isOpen ? "absolute rotate-45 top-[7px]" : ""}`}/>
                    </div>
                </button>
            </div>
            <div className={`lg:hidden overflow-hidden absolute top-full left-0 w-full bg-[#000000F2] backdrop-blur-xl flex flex-col gap-2 transition-all duration-300 ${isOpen ? "max-h-96 py-4 border-t border-[#FFFFFF1A]" : "max-h-0"}`}>
                {paths.map((item) => (
                    <button key={item.path} type="button" onClick={() => handlePath(item.path)} className={`text-left px-6 py-3 transition-colors duration-300 ${location.pathname === item.path ? "text-[#0066FF]" : "text-[#FFFFFFE5]"}`}>{item.title}</button>
                ))}
            </div>
        </header>
    );
}