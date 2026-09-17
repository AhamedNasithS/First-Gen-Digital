import React from "react";
import { ArrowLeft, ShieldCheck, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import BookingForm from "../Forms/BookingForm";
import BookingFormSuccess from "../SuccessPages/BookingFormSuccess";

export default function LegalPage({ title, description, sections, icon = "privacy", country }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);
    const [websiteType, setWebType] = React.useState("");
    const [success, setSuccess] = React.useState(false);
    const [formOpen, setFormOpen] = React.useState(false);

    React.useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
            }, 3000);

            return () => clearTimeout(timer); // cleanup
        }
    }, [success]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#000000] to-[#0D1B3A] text-white">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} setFormOpen={setFormOpen} />
            <main className="pt-10 md:pt-36 lg:pt-44 pb-10 md:pb-20">
                <section className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
                    <button type="button" onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#FFFFFF99] hover:text-white transition-colors text-sm mb-8">
                        <ArrowLeft className="size-4" />
                        Back
                    </button>
                    <div className="relative overflow-hidden bg-[#FFFFFF08] border border-[#FFFFFF1A] rounded-[20px] md:rounded-[28px] p-6 md:p-10 lg:p-14">
                        <div className="absolute -top-20 -right-20 size-60 rounded-full bg-[#0066FF1A] blur-3xl" />
                        <div className="relative z-10">
                            <div className="size-14 md:size-16 rounded-2xl bg-[#0066FF1A] border border-[#0066FF33] flex items-center justify-center text-[#0066FF] mb-6">
                                {icon === "privacy" ? (
                                    <ShieldCheck className="size-7 md:size-8" />
                                ) : (
                                    <FileText className="size-7 md:size-8" />
                                )}
                            </div>
                            <p className="text-[#0066FF] text-sm md:text-base mb-3">FirstGen Digital</p>
                            <h1 className="font-asap text-3xl md:text-5xl lg:text-6xl font-bold">{title}</h1>
                            <p className="text-[#FFFFFF99] text-sm md:text-base lg:text-lg mt-5 max-w-3xl leading-relaxed">{description}</p>
                            <p className="text-[#FFFFFF66] text-xs md:text-sm mt-6">Last updated: August 19, 2026</p>
                        </div>
                    </div>
                </section>
                <section className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto mt-8 md:mt-12">
                    <div className="flex flex-col gap-5 md:gap-6">
                        {sections.map((section, index) => (
                            <div key={index} className="bg-[#FFFFFF05] border border-[#FFFFFF1A] rounded-[16px] md:rounded-[20px] p-5 md:p-8 hover:border-[#0066FF33] transition-colors">
                                <div className="flex gap-4">
                                    <span className="shrink-0 size-8 rounded-lg bg-[#0066FF1A] border border-[#0066FF33] flex items-center justify-center text-[#0066FF] text-sm">{String(index + 1).padStart(2, "0")}</span>
                                    <div>
                                        <h2 className="text-lg md:text-xl font-medium">{section.heading}</h2>
                                        <p className="text-[#FFFFFF99] text-sm md:text-base leading-7 mt-3">{section.content}</p>
                                        {section.points && (
                                            <ul className="mt-4 flex flex-col gap-2">
                                                {section.points.map((point, pointIndex) => (
                                                    <li key={pointIndex} className="text-[#FFFFFF99] text-sm md:text-base flex gap-3">
                                                        <span className="text-[#0066FF]">•</span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 md:mt-12 p-6 md:p-10 rounded-[20px] bg-gradient-to-r from-[#0066FF1A] to-[#00D98C1A] border border-[#FFFFFF1A] text-center">
                        <h3 className="text-xl md:text-2xl font-medium">Have questions?</h3>
                        <p className="text-[#FFFFFF99] text-sm md:text-base mt-3">If you have any questions regarding this policy,  please contact FirstGen Digital.</p>
                        <button type="button" onClick={() => navigate("/")} className="mt-6 px-6 py-3 rounded-lg bg-[#0066FF] text-sm hover:scale-105 transition-transform" style={{ boxShadow: "0px 0px 20px 0px #0066FF4D" }}>Contact Us</button>
                    </div>
                </section>
            </main>
            <Footer />
            {formOpen && (
                <BookingForm setFormOpen={setFormOpen} country={country} websiteType={websiteType} setWebType={setWebType} setSuccess={setSuccess} />
            )}
            {success && (
                <BookingFormSuccess />
            )}
        </div>
    );
}