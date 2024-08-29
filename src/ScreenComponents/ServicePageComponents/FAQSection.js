import React, { useState } from 'react';

function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How can I obtain SOC 2 certification?",
            answer: "Achieving SOC 2 certification involves a comprehensive process. Accorp Partners guides you through assessment, controls implementation, audit preparation, and more, ensuring your organization meets the stringent security and compliance standards with our SOC 1 audit SOC2 Compliance Audit Services."
        },
        {
            question: "What is the process for clients undergoing their first SOC Audit?",
            answer: "The process involves several steps, including initial assessment, gap analysis, control implementation, audit preparation, and final reporting."
        },
        {
            question: "What's the difference between a Type I and Type II audit?",
            answer: "A Type I audit assesses the design of controls at a specific point in time, while a Type II audit evaluates the effectiveness of those controls over a period of time."
        },
        {
            question: "How long does it take to prepare for a SOC 2 audit?",
            answer: "Preparation time can vary depending on the maturity of your existing controls, typically ranging from a few months to a year."
        },
        {
            question: "What does the SOC report structure entail?",
            answer: "The SOC report structure includes sections on the system description, control objectives, control tests, results, and auditor's opinion."
        },
        {
            question: "Why does an organization need a Service Organization Control Report, and how can SOC services benefit your business?",
            answer: "SOC reports provide assurance to your clients and stakeholders about the effectiveness of your organization's controls, enhancing trust and credibility."
        }
    ];

    return (
        <div className="bg-gray-300 py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl lg:text-3xl font-bold text-center lg:text-center mb-10">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left px-6 py-4 text-gray-800 font-semibold focus:outline-none"
                        >
                            <span>{faq.question}</span>
                            <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="px-6 pb-4 text-gray-600 text-left">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQSection;
