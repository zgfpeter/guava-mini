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
    "h-40 w-full md:w-112 p-3 border-[0.5px] border-black border-collapse flex gap-2 items-center place-content-center text-s bg-stone-100 hover:cursor-pointer hover:bg-stone-200 md:flex-col ";
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
    //console.log("toggling");
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <h1 className="p-5 mb-10 bg-amber-700 text-white font-bold w-full text-center font-[DM_Serif_Display]">
        HELP
      </h1>
      <main className="flex-grow flex flex-col self-center w-full md:w-auto">
        <h2 className="p-5">FREQUENTLY ASKED QUESTIONS</h2>
        <ul className="flex gap-3 pl-5 pr-5 pb-5 mb-5 flex-col text-stone-600">
          {faqs.map((faq, index) => (
            <li key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="hover:cursor-pointer"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-stone-600 p-5 bg-stone-100 ">
                  {faq.answer}
                </p>
              )}
            </li>
          ))}
        </ul>

        <h2 className="p-5">CATEGORIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 text-stone-600">
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
