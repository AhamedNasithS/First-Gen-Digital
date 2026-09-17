import React from "react";
import Banner from "./Banner";
import Why from "./Why";
import Fetures from "./Fetures";
import Process from "./Process";
import About from "./About";
import Footer from "../../../footer";
import BookingForm from "../../Forms/BookingForm";
import BookingFormSuccess from "../../SuccessPages/BookingFormSuccess";
import Include from "./Include";
import Comparison from "./Comparison";
import Header from "../../../header";

export default function PersonalPortfolio({ country }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [websiteType, setWebType] = React.useState("");
    const [success, setSuccess] = React.useState(false);
    const [formOpen, setFormOpen] = React.useState(false)

    const handleGetStarted = () => {
        setWebType?.("Personal Website");
        setFormOpen?.(true);
    };

    return (
        <div className="relative overflow-y-scroll scroll-smooth bg-gradient-to-br from-[#0A0E27] via-[#000000] to-[#0D1B3A] h-screen [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#000000] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#0D1B3A]">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} setFormOpen={setFormOpen} />
            <Banner handleGetStarted={handleGetStarted} />
            <Why />
            <Fetures />
            <Process />
            <Include handleGetStarted={handleGetStarted} />
            <Comparison />
            <About handleGetStarted={handleGetStarted} />
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