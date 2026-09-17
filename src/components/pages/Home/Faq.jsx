import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
    const [active, setActive] = useState(null);

    const faqs = [
        {
            question: "Why choose FirstGen Digital?",
            answer: "We combine professional UI/UX design and modern web development to create affordable, high-quality websites that help businesses build a strong online presence.",
        },
        {
            question: "How long does it take to build a website?",
            answer: "Most websites are completed within 3–10 business days, depending on the project scope and content provided.",
        },
        {
            question: "What information do I need to provide?",
            answer: "You'll need to provide your business details, content, images, logo (if available), and any specific design preferences.",
        },
        {
            question: "Will my website work on mobile phones?",
            answer: "Yes. Every website we build is fully responsive and optimized for mobile, tablet, and desktop devices.",
        },
        {
            question: "Do you provide domain and hosting services?",
            answer: "We can help you purchase and set up your domain and hosting, or work with your existing provider.",
        },
        {
            question: "Can I update the website myself later?",
            answer: "Yes. Depending on the platform used, we can provide a guidance for making future updates.",
        },
        {
            question: "Do you redesign existing websites?",
            answer: "Yes. We can modernize outdated websites, improve performance, and enhance the user experience.",
        },
        {
            question: "Will my website be optimized for search engines (SEO)?",
            answer: "Basic SEO setup is included, such as page titles, meta descriptions, mobile optimization, and performance improvements.",
        },
        {
            question: "Do you offer support after the website is launched?",
            answer: "Yes. We provide post-launch support and optional maintenance plans for updates, backups, and technical assistance.",
        },
        {
            question: "What is the cost of a website?",
            answer: "Pricing depends on the type of website and requirements. Portfolio websites start from ₹3,999, while business websites start from ₹12,999.",
        },
        {
            question: "How do I get started?",
            answer: "Simply contact us through WhatsApp, email, or our contact form. We'll discuss your requirements and provide a free consultation.",
        },
        {
            question: "Why choose FirstGen Digital?",
            answer: "We combine professional UI/UX design and modern web development to create affordable, high-quality websites that help businesses build a strong online presence.",
        },
    ];

    return (
        <motion.div className='mb-5 md:mb-10 lg:mb-16 p-[20px] text-center' initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: false }}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-6 md:mb-12"
            >
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
                    FAQs
                </span>
                <h3 className='font-asap text-[22px] md:text-[50px] font-bold mt-3'>Frequently Asked Questions</h3>
                <p className="text-[#FFFFFFB2] font-normal text-[12px] md:text-[20px] mt-3 md:mt-6">Everything you need to know about our website design and development services.</p>
            </motion.div>

            <div className="space-y-4 w-full lg:w-9/12 xl:w-7/12 mx-auto">
                {faqs.map((faq, index) => {
                    const isOpen = active === index;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="overflow-hidden rounded-[10px] md:rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-start"
                        >
                            <button onClick={() =>  setActive(isOpen ? null : index) } className="w-full flex items-center justify-between p-3 md:p-6 text-left">
                                <h3 className="text-[12px] md:text-[16px] font-semibold pr-3 md:pr-6">
                                    {faq.question}
                                </h3>

                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    {isOpen ? (
                                        <Minus size={20} />
                                    ) : (
                                        <Plus size={20} />
                                    )}
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <div className="px-3 md:px-6 pb-3 md:pb-6 text-gray-400 leading-relaxed text-[12px] md:text-[16px]">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}