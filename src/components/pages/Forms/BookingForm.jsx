import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuArrowLeft, LuArrowRight, LuCheck, LuGlobe, LuIndianRupee, LuMail, LuMessageSquare, LuPhone, LuTriangleAlert, LuUser, LuX, LuLoaderCircle } from 'react-icons/lu';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { supabase } from "../../utils/supabase";

export default function BookingForm({ setFormOpen, country, websiteType, setWebType, setSuccess }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [budget, setBudget] = useState("");
    const [details, setDetails] = useState("");
    const [errors, setErrors] = useState({});
    const [step, setStep] = useState(1);
    const [isClicked, setIsClicked] = useState(false);

    const phoneUtil = PhoneNumberUtil.getInstance();
    const websiteTypes = ["Student Portfolio", "Personal Website", "Business Website", "Website Redesign"];
    const budgetRange = ["Under ₹5,000", "₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹20,000+"];

    const handleClose = () => {
        setFormOpen(false);
        setStep(1);
        setName("");
        setEmail("");
        setNumber("");
        setWebType("");
        setBudget("");
        setDetails("");
        setErrors({});
    };

    const handleBack = () => {
        setErrors({});
        setStep(1);
    };

    const validateStep1 = () => {
        const newErrors = {};
        if (!name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            newErrors.email = "Enter a valid email address";
        }
        if (!number.trim()) {
            newErrors.number = "WhatsApp number is required";
        } else {
            try {
                const parsedNumber =
                    phoneUtil.parseAndKeepRawInput(number);

                if (!phoneUtil.isValidNumber(parsedNumber)) {
                    newErrors.number = "Enter a valid phone number";
                }
            } catch (error) {
                newErrors.number = "Enter a valid phone number";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!websiteType?.trim()) {
            newErrors.websiteType = "Please select a website type";
        }
        if (!budget.trim()) {
            newErrors.budget = "Please select your budget range";
        }
        if (!details.trim()) {
            newErrors.details = "Please provide your project requirements";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep2()) return;
        setIsClicked(true);
        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key:
                            "c9125c98-95d0-415d-bbbe-52301226cfff",
                        name: name.trim(),
                        email: email.trim(),
                        phone: number,
                        websiteType,
                        budget,
                        details: details.trim(),
                    }),
                }
            );

            const data = await response.json();
            const { error } = await supabase
                .from("website_bookings")
                .insert([
                    {
                        name: name.trim(),
                        email: email.trim(),
                        phone: number,
                        website_type: websiteType,
                        budget: budget,
                        details: details.trim(),
                    },
                ]);

            if (error) {
                console.error("Supabase error:", error);
                return;
            }
            if (data?.success || response.status === 200) {
                handleClose()
                setSuccess(true);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setIsClicked(false);
        }
    };

    const ErrorMessage = ({ message }) => {
        if (!message) return null;
        return (
            <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mt-2 ml-1 text-red-400 text-xs"
            >
                <LuTriangleAlert size={14} />
                <span>{message}</span>
            </motion.div>
        );
    };

    const inputClass = "w-full h-[38px] md:h-[48px] rounded-[5px] md:rounded-[10px] border border-white/10 bg-white/[0.035] px-3 text-[12px] md:text-[13px] text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-[#0066FF]/70 focus:bg-white/[0.055] focus:ring-2 focus:ring-[#0066FF]/10";

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 md:p-5">
            <div className="absolute inset-0" onClick={handleClose} />
            <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 20 }} transition={{ duration: 0.35, ease: "easeOut" }} onClick={(e) => e.stopPropagation()} className="relative z-[101] w-full max-w-[570px] max-h-[92vh] overflow-hidden rounded-[12px] md:rounded-[22px] border border-white/10 bg-[#0B1732]/95 shadow-[0_30px_100px_rgba(0,0,0,0.6)] scrollbar-thin scrollbar-thumb-white/10">
                <div className="absolute left-0 right-0 top-0 h-px md:h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent" />
                <div className="flex max-h-[92vh] flex-col p-3 md:p-7">
                    <div className="relative text-center">
                        <button type="button" onClick={handleClose} className="absolute right-0 top-0 flex size-[24px] md:size-[34px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white">
                            <LuX className='size-[12px] md:size-[17px]' />
                        </button>
                        <div className="mx-auto mb-1.5 md:mb-3 flex size-[36px] md:size-[46px] items-center justify-center rounded-[10px] md:rounded-[14px] border border-[#0066FF]/20 bg-[#0066FF]/10 text-[#4D8DFF]">
                            <LuGlobe className='size-[18px] md:size-[22px]' />
                        </div>
                        <h2 className="text-[20px] md:text-[23px] font-bold tracking-tight"> Let's Build Your Website</h2>
                        <p className="mx-auto mt-1 md:mt-2 max-w-[430px] text-[10px] md:text-[13px] leading-5 text-white/50">Tell us about your project and we'll get back to you within 24 hours.</p>
                    </div>
                    <div className="mt-3 md:mt-7">
                        <div className="flex items-center w-1/2 md:w-auto mx-auto">
                            <div className="flex items-center gap-2">
                                <motion.div animate={{ scale: step === 1 ? 1.05 : 1 }}
                                    className={`flex size-[20px] md:size-[30px] shrink-0 items-center justify-center rounded-full text-[10px] md:text-xs font-semibold transition-all duration-300 ${step === 1 ? "bg-[#0066FF] text-white shadow-[0_0_20px_rgba(0,102,255,0.35)]" : "bg-[#27AE60] text-white"}`}>
                                    {step === 1 ? ("1") : (<LuCheck className='size-[10px] md:size-[15px]' />)}
                                </motion.div>
                                <div className="hidden sm:block">
                                    <p className={`text-[11px] font-semibold ${step === 1 ? "text-white" : "text-white/50"}`}> Personal</p>
                                    <p className="text-[9px] text-white/30">Your details</p>
                                </div>
                            </div>
                            <div className="relative mx-1 md:mx-3 h-[2px] flex-1 overflow-hidden rounded-full bg-white/10">
                                <motion.div initial={false} animate={{ width: step === 2 ? "100%" : "0%" }} transition={{ duration: 0.5, ease: "easeInOut" }} className="absolute inset-y-0 left-0 bg-gradient-to-l from-[#0066FF] to-[#27AE60]" />
                            </div>
                            <div className="flex items-center gap-2">
                                <motion.div animate={{ scale: step === 2 ? 1.05 : 1 }} className={`flex size-[20px] md:size-[30px] shrink-0 items-center justify-center rounded-full text-[10px] md:text-xs font-semibold transition-all duration-300 ${step === 2 ? "bg-[#0066FF] text-white shadow-[0_0_20px_rgba(0,102,255,0.35)]" : "bg-white/10 text-white/30"}`}> 2 </motion.div>
                                <div className="hidden sm:block">
                                    <p className={`text-[11px] font-semibold ${step === 2 ? "text-white" : "text-white/30"}`}>Requirements</p>
                                    <p className="text-[9px] text-white/30">Project details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-0 flex-1 overflow-y-auto mt-2 pr-2.5 [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#000000] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#0066FF]">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div key="step-one" initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.25, }} className="mt-1 md:mt-5">
                                    <div className="mb-2.5 md:mb-5">
                                        <h3 className="text-[15px] md:text-[17px] font-semibold">Personal Details</h3>
                                        <p className="mt-0.5 md:mt-1 text-[9px] md:text-[11px] text-white/40">How can we contact you?</p>
                                    </div>
                                    <div className="mb-3 md:mb-5">
                                        <label className="mb-2 flex items-center gap-1 md:gap-2 text-[12px] font-medium text-white/80">
                                            <span className="flex size-[27px] items-center justify-center rounded-[7px] bg-purple-500/10 text-purple-400">
                                                <LuUser size={14} />
                                            </span>
                                            Full Name
                                            <span className="text-[#27AE60]">*</span>
                                        </label>
                                        <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => { setName(e.target.value); setErrors({...errors, name: ""}); }} className={`${inputClass} ${errors.name ? "border-red-500/50" : "" }`} />
                                        <ErrorMessage message={errors.name} />
                                    </div>
                                    <div className="mb-3 md:mb-5">
                                        <label className="mb-2 flex items-center gap-2 text-[12px] font-medium text-white/80">
                                            <span className="flex size-[27px] items-center justify-center rounded-[7px] bg-blue-500/10 text-blue-400">
                                                <LuMail size={14} />
                                            </span>
                                            Email Address
                                            <span className="text-[#27AE60]"> *</span>
                                        </label>
                                        <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => { setEmail(e.target.value); setErrors({...errors, email: ""}); }} className={`${inputClass} ${errors.email ? "border-red-500/50" : ""}`}/>
                                        <ErrorMessage message={errors.email} />
                                    </div>
                                    <div className="mb-3 md:mb-6">
                                        <label className="mb-2 flex items-center gap-2 text-[12px] font-medium text-white/80">
                                            <span className="flex size-[27px] items-center justify-center rounded-[7px] bg-green-500/10 text-green-400">
                                                <LuPhone size={14} />
                                            </span>
                                            WhatsApp Number
                                            <span className="text-[#27AE60]">* </span>
                                        </label>
                                        <div className={`h-[38px] md:h-[48px] rounded-[5px] md:rounded-[10px] border bg-white/[0.035] px-3 transition-all duration-300 focus-within:border-[#0066FF]/70 focus-within:ring-2 focus-within:ring-[#0066FF]/10 ${errors.number ? "border-red-500/50" : "border-white/10" }`}>
                                            <PhoneInput defaultCountry={country?.toLowerCase() || "in"} value={number} onChange={(phone) => { setNumber(phone); setErrors({...errors, number: ""});}} className="h-full w-full" inputClassName="!h-full !w-full !border-0 !bg-transparent !text-white !text-[12px] md:!text-[13px] !outline-none !shadow-none placeholder:!text-white/30" countrySelectorStyleProps={{ buttonClassName: "!border-0 !bg-transparent !text-white/80" }}/>
                                        </div>
                                        <ErrorMessage message={errors.number}/>
                                    </div>
                                    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="button"
                                        onClick={() => {
                                            if (!validateStep1()) return;
                                            setStep(2);
                                        }} className="group flex h-[42px] md:h-[48px] w-full items-center justify-center gap-2 rounded-[7px] md:rounded-[10px] bg-gradient-to-r from-[#0066FF] to-[#2878FF] text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(0,102,255,0.2)] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,102,255,0.35)]">
                                        Next Step
                                        <LuArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1"/>
                                    </motion.button>
                                </motion.div>
                            )}
                            {step === 2 && (
                                <motion.div key="step-two" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1,  x: 0 }} exit={{ opacity: 0, x: 15 }} transition={{ duration: 0.25 }} className="mt-3 md:mt-7">
                                    <div className="mb-3 md:mb-5">
                                        <h3 className="text-[15px] md:text-[17px] font-semibold">Requirement Details</h3>
                                        <p className="mt-0.5 md:mt-1 text-[9px] md:text-[11px] text-white/40">Tell us what you want to build.</p>
                                    </div>
                                    <div className="mb-3 md:mb-6">
                                        <label className="mb-2 md:mb-3 flex items-center gap-2 text-[12px] font-medium text-white/80">
                                            <span className="flex size-[27px] items-center justify-center rounded-[7px] bg-cyan-500/10 text-cyan-400">
                                                <LuGlobe size={14} />
                                            </span>
                                            Website Type
                                            <span className="text-[#27AE60]"> * </span>
                                        </label>
                                        <div className="grid grid-cols-1 gap-1 md:gap-2 sm:grid-cols-2">
                                            {websiteTypes.map((type, index) => {
                                                    const selected = websiteType === type;
                                                    return (
                                                        <motion.button key={index} type="button" whileTap={{ scale: 0.98 }} onClick={() => { setWebType(selected ? "" : type); setErrors({...errors, websiteType: ""}); }} className={`group flex min-h-[38px] md:min-h-[48px] items-center gap-2 md:gap-3 rounded-[5px] md:rounded-[10px] border px-3 text-left transition-all duration-300 ${selected ? "border-[#0066FF]/70 bg-[#0066FF]/10" : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"}`}>
                                                            <span className={`flex size-[14px] md:size-[17px] shrink-0 items-center justify-center rounded-full border transition-all ${selected ? "border-[#0066FF] bg-[#0066FF]" : "border-white/20 bg-white/5"}`}>
                                                                {selected && (
                                                                    <LuCheck className='size-[7px] md:size-[10px]'/>
                                                                )}
                                                            </span>
                                                            <span className={`text-[12px] ${selected ? "text-white" : "text-white/60"}`}>{type}</span>
                                                        </motion.button>
                                                    );
                                                }
                                            )}
                                        </div>
                                        <ErrorMessage message={errors.websiteType}/>
                                    </div>
                                    <div className="mb-3 md:mb-6">
                                        <label className="mb-2 md:mb-3 flex items-center gap-2 text-[12px] font-medium text-white/80">
                                            <span className="flex size-[27px] items-center justify-center rounded-[7px] bg-emerald-500/10 text-emerald-400">
                                                <LuIndianRupee size={14} />
                                            </span>
                                            Budget Range
                                            <span className="text-[#27AE60]">*</span>
                                        </label>
                                        <div className="grid grid-cols-1 gap-1 md:gap-2 sm:grid-cols-2">
                                            {budgetRange.map((type, index) => {
                                                    const selected = budget === type;
                                                    return (
                                                        <motion.button key={index} type="button" whileTap={{ scale: 0.98 }} onClick={() => { setBudget(selected ? "" : type); setErrors({...errors, budget: ""}); }} className={`group flex min-h-[38px] md:min-h-[48px] items-center gap-2 md:gap-3 rounded-[5px] md:rounded-[10px] border px-3 text-left transition-all duration-300 ${selected ? "border-[#0066FF]/70 bg-[#0066FF]/10" : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"}`}>
                                                            <span className={`flex size-[14px] md:size-[17px] shrink-0 items-center justify-center rounded-full border transition-all ${selected ? "border-[#0066FF] bg-[#0066FF]" : "border-white/20 bg-white/5"}`}>
                                                                {selected && (
                                                                    <LuCheck className='size-[7px] md:size-[10px]'/>
                                                                )}
                                                            </span>
                                                            <span className={`text-[12px] ${selected ? "text-white" : "text-white/60"}`}>{type}</span>
                                                        </motion.button>
                                                    );
                                                }
                                            )}
                                        </div>
                                        <ErrorMessage message={errors.budget}/>
                                    </div>
                                    <div className="mb-3 md:mb-6">
                                        <label className="mb-2 flex items-center gap-2 text-[12px] font-medium text-white/80">
                                            <span className="flex size-[27px] items-center justify-center rounded-[7px] bg-pink-500/10 text-pink-400">
                                                <LuMessageSquare size={14} />
                                            </span>
                                            Project Details
                                            <span className="text-[#27AE60]">*</span>
                                        </label>
                                        <textarea rows={4} placeholder="Tell us about your website requirements, pages needed, design preferences, and specific features..." value={details} onChange={(e) => { setDetails(e.target.value); setErrors({...errors, details: ""});}} className={`min-h-[90px] md:min-h-[110px] w-full resize-none rounded-[5px] md:rounded-[10px] border bg-white/[0.035] p-3 text-[12px] leading-5 text-white outline-none placeholder:text-white/30 transition-all duration-300 focus:border-[#0066FF]/70 focus:bg-white/[0.055] focus:ring-2 focus:ring-[#0066FF]/10 ${errors.details ? "border-red-500/50" : "border-white/10"}`}/>
                                        <ErrorMessage message={errors.details}/>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2 md:gap-2.5 sm:grid-cols-2">
                                        <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="button" onClick={handleBack} className="flex h-[42px] md:h-[48px] items-center justify-center gap-2 rounded-[7px] md:rounded-[10px] border border-white/10 bg-white/[0.04] text-[13px] font-semibold text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white">
                                            <LuArrowLeft size={16} />
                                            Back
                                        </motion.button>
                                        <motion.button whileHover={!isClicked ? { y: -2 } : {}} whileTap={!isClicked ? { scale: 0.98 } : {}} type="button" disabled={isClicked} onClick={handleSubmit} className="flex h-[42px] md:h-[48px] items-center justify-center gap-2 rounded-[7px] md:rounded-[10px] bg-gradient-to-r from-[#0066FF] to-[#2878FF] text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(0,102,255,0.2)] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60">
                                            {isClicked ? (
                                                <>
                                                    <LuLoaderCircle size={16} className="animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Request
                                                    <LuArrowRight size={16}/>
                                                </>
                                            )}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="mt-3 md:mt-6 flex items-center justify-center gap-2 border-t border-white/[0.06] pt-2 md:pt-4">
                        <div className="flex shrink-0 size-[16px] md:size-[20px] items-center justify-center rounded-full bg-[#27AE60]/10 text-[#27AE60]">
                            <LuCheck className='size-[8px] md:size-[10px]' />
                        </div>
                        <p className="text-[10px] text-white/35">Your information is secure and will only be used to contact you about your project.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}