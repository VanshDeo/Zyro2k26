"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Who can participate in ZYRO 2K26?",
        answer: "ZYRO 2K26 is open to students, professionals, and coding enthusiasts from around the globe. If you have a passion for innovation, you're welcome!",
    },
    {
        question: "Is there a participation fee?",
        answer: "No, participation in ZYRO 2K26 is completely free of charge. We believe in accessible innovation for everyone.",
    },
    {
        question: "What if I don't have a team?",
        answer: "Don't worry! You can register individually, and we'll have a team formation session at the start of the event helping you find like-minded teammates.",
    },
    {
        question: "Will food/accommodation be provided?",
        answer: "Yes, for participants attending the physical venue, all meals and basic accommodation will be provided for the duration of the hackathon.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 bg-background">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Frequently Asked <span className="text-primary">Questions</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-surface rounded-lg border border-white/5 overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`font-semibold ${openIndex === index ? 'text-primary' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-primary" size={20} />
                                ) : (
                                    <ChevronDown className="text-gray-400" size={20} />
                                )}
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
