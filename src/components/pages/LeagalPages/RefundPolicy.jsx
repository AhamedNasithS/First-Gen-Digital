import React from "react";
import LegalPage from "./LegalPage";

export default function RefundPolicy({ country }) {
    const sections = [
        {
            heading: "Project Cancellation",
            content:
                "Clients may request cancellation of a project by contacting FirstGen Digital. The cancellation process and any applicable charges may depend on the amount of work already completed.",
        },
        {
            heading: "Advance Payments",
            content:
                "Any advance or initial payment may be used to cover planning, consultation, design, development, and other work already performed.",
        },
        {
            heading: "Completed Work",
            content:
                "Once a service or agreed project milestone has been completed and delivered, refunds may not be available for the completed work.",
        },
        {
            heading: "Refund Requests",
            content:
                "If you believe there is an issue with a payment or service, please contact us with your project and payment details so we can review the situation.",
        },
        {
            heading: "Third-Party Costs",
            content:
                "Payments made for third-party services such as domain registration, hosting, software subscriptions, or external tools may be subject to the policies of the respective provider.",
        },
    ];

    return (
        <LegalPage
            title="Refund & Cancellation Policy"
            description="This policy explains how cancellations, project payments, and refund requests are handled by FirstGen Digital."
            sections={sections}
            icon="terms"
        />
    );
}