import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import faq from "../../../../public/faq.json"
import Lottie from "lottie-react";

const faqs = [
    {
        question: "How secure is my data on this platform?",
        answer:
            "We use advanced encryption, JWT authentication, and role-based access control to ensure data security.",
    },
    {
        question: "What are the pricing plans?",
        answer:
            "We offer Free, Business, and Enterprise plans. Check our pricing page for detailed features.",
    },
    {
        question: "Do you provide customer support?",
        answer: "Yes! Our support team is available 24/7 via email and live chat.",
    },
    {
        question: "Can I integrate this with other software?",
        answer:
            "Yes, we support integrations with Slack, Google Calendar, and other HR tools.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial with full access to all features.",
    },
    {
        question: "How do I reset my password?",
        answer:
            "You can reset your password by clicking on ‘Forgot Password’ on the login page. A reset link will be sent to your email.",
    },
    {
        question: "Does this platform support multiple languages?",
        answer:
            "Yes! Our platform supports multiple languages, including English, Spanish, and French, with more to come.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer:
            "Yes, you can cancel your subscription anytime from your account settings. No hidden fees or charges apply.",
    },
];

const FAQSection = () => {

    return (
        <div>
            <h2 className="mb-8  text-3xl md:text-5xl font-bold text-center">
                Frequently Asked Questions
            </h2>
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                    <Lottie animationData={faq}></Lottie>
                </div>
                <div className="join join-vertical w-full flex-1">
                    {
                        faqs?.map((i, idx) => <div key={idx}
                            className="collapse collapse-arrow join-item border-primary-color border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium text-primary-color">{i.question}</div>
                            <div className="collapse-content">
                                <p>{i.answer}</p>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default FAQSection;
