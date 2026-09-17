import React from "react";
import LegalPage from "./LegalPage";

export default function TermsConditions({ country }) {
    const sections = [
        {
            heading: "Acceptance of Terms",
            content:
                "By accessing our website or using our services, you agree to these Terms and Conditions.",
        },
        {
            heading: "Services",
            content:
                "FirstGen Digital provides digital services including website design, website development, portfolio websites, website redesign, and related digital solutions.",
        },
        {
            heading: "Project Requirements",
            content:
                "Clients are responsible for providing accurate project requirements, content, images, branding materials, and other necessary information required to complete the project.",
        },
        {
            heading: "Payments",
            content:
                "Project pricing, payment schedules, and applicable charges will be communicated and agreed upon before or during the project process.",
        },
        {
            heading: "Project Revisions",
            content:
                "The number and scope of revisions may depend on the agreed project requirements. Significant changes outside the original project scope may require additional time or charges.",
        },
        {
            heading: "Intellectual Property",
            content:
                "Ownership and usage rights for completed project deliverables will be determined according to the agreement between FirstGen Digital and the client.",
        },
        {
            heading: "Limitation of Liability",
            content:
                "FirstGen Digital will make reasonable efforts to provide quality services but cannot guarantee uninterrupted availability of websites, third-party services, hosting providers, or external platforms.",
        },
        {
            heading: "Changes to Terms",
            content:
                "We may update these Terms and Conditions when necessary. Continued use of our website or services after updates may indicate acceptance of the revised terms.",
        },
    ];

    return (
        <LegalPage
            title="Terms & Conditions"
            description="Please read these terms carefully before using the FirstGen Digital website or engaging with our services."
            sections={sections}
            icon="terms"
        />
    );
}