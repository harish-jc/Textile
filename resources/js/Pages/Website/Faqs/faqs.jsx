import React from 'react';
import { Collapse } from 'antd';
import { Head, Link } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css';

const { Panel } = Collapse;

const Faqs = () => {
    const faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return products within 7 days of delivery. Ensure the product is unused and in original condition."
        },
        {
            question: "How can I track my order?",
            answer: "Once shipped, you'll receive an email and SMS with tracking details."
        },
        {
            question: "Do you offer bulk purchase discounts?",
            answer: "Yes! Contact our support team for wholesale or bulk inquiries."
        },
        {
            question: "How long does delivery take?",
            answer: "Delivery takes 3-7 working days depending on your location."
        },
        {
            question: "Can I cancel my order?",
            answer: "Orders can be cancelled within 24 hours of placing them or before they are shipped."
        }
    ];

    return (
        <FrontLayout>
            <Head title="FAQs" />
            <div className="w-full px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h2>

                    <Collapse accordion className="bg-white rounded text-base">
                        {faqs.map((faq, index) => (
                            <Panel 
                                header={<span className="text-lg font-medium text-gray-800">{faq.question}</span>} 
                                key={index}
                            >
                                <p className="text-gray-700 text-base leading-relaxed">{faq.answer}</p>
                            </Panel>
                        ))}
                    </Collapse>

                    <div className="text-center mt-10">
                        <p className="text-gray-600 text-base">Still have questions?</p>
                        <Link href={route('contact')} className="text-blue-600 underline text-base font-medium">Contact Us</Link>
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
};

export default Faqs;
