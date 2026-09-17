import React from "react";
import LegalPage from "./LegalPage";

export default function PrivacyPolicy({ country }) {
    const sections = [
        {
            heading: "Information We Collect",
            content:
                "We may collect information that you provide when you contact us, request a service, submit a booking form, or communicate with FirstGen Digital.",
            points: [
                "Name and contact information",
                "Email address and phone number",
                "Business or project information",
                "Website and service requirements",
            ],
        },
        {
            heading: "How We Use Your Information",
            content:
                "The information we collect is used to communicate with you and provide our services.",
            points: [
                "Respond to enquiries",
                "Provide website and digital services",
                "Improve our services and user experience",
                "Communicate project updates",
            ],
        },
        {
            heading: "Data Protection",
            content:
                "We take reasonable measures to protect your personal information and do not intentionally sell your personal information to third parties.",
        },
        {
            heading: "Third-Party Services",
            content:
                "Our website may use third-party tools or services for analytics, communication, hosting, or other functionality. These services may have their own privacy policies.",
        },
        {
            heading: "Your Rights",
            content:
                "You may contact us to request information about the personal data we hold about you or request corrections where applicable.",
        },
        {
            heading: "Changes to This Policy",
            content:
                "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date.",
        },
    ];

    return (
        <LegalPage
            title="Privacy Policy"
            description="Your privacy is important to us. This page explains how FirstGen Digital collects, uses, and protects your information."
            sections={sections}
            icon="privacy"
        />
    );
}