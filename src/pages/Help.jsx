// ok
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faCreditCard,
  faRotateLeft,
  faShirt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const faq_answers_classes =
    "p-10 border-[0.5px] border-stone-300 bg-stone-100 hover:cursor-pointer hover:bg-stone-200 flex flex-col md:flex-row items-center gap-2 text-s w-full min-w-0";

  const faqs = [
    {
      question: "Where is my order?",
      answer:
        "You can track your order by logging into your account and visiting the 'Orders' section.",
    },
    {
      question: "How can I return or exchange a product?",
      answer:
        "You can return or exchange a product within 30 days of purchase by contacting our support team.",
    },
    {
      question: "How long will delivery take?",
      answer:
        "Delivery usually takes 3-5 business days, depending on your location.",
    },
    {
      question: "How and when will I receive my refund?",
      answer:
        "Refunds are processed within 7 working days to the original payment method.",
    },
    {
      question: "What is my size?",
      answer: "Check our size guide for detailed measurements.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h1 className="p-5 mb-10 bg-amber-700 text-white font-bold w-full text-center font-[DM_Serif_Display]">
        HELP
      </h1>
      <main className="flex flex-col self-center flex-grow w-full md:w-auto">
        <h2 className="p-5">FREQUENTLY ASKED QUESTIONS</h2>
        <ul className="flex flex-col gap-3 pb-5 pl-5 pr-5 mb-5 text-stone-600">
          {faqs.map((faq, index) => (
            <li key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="hover:cursor-pointer"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="p-5 mt-2 text-sm text-stone-600 bg-stone-100 ">
                  {faq.answer}
                </p>
              )}
            </li>
          ))}
        </ul>

        <h2 className="p-5">CATEGORIES</h2>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-2 text-stone-600">
          <div className={faq_answers_classes}>
            <FontAwesomeIcon icon={faTruckFast} className="pr-2" />
            Delivery and order tracking
          </div>
          <div className={faq_answers_classes}>
            <FontAwesomeIcon icon={faRotateLeft} className="pr-2" />
            Returns, exchanges and refunds
          </div>
          <div className={faq_answers_classes}>
            <FontAwesomeIcon icon={faCreditCard} className="pr-2" />
            Payment methods
          </div>
          <div className={faq_answers_classes}>
            <FontAwesomeIcon icon={faShirt} className="pr-2" />
            Size information
          </div>
          <div className={faq_answers_classes}>
            <FontAwesomeIcon icon={faUser} className="pr-2" />
            Personal data
          </div>
        </div>
      </main>
      <Footer className="" />
    </div>
  );
}
