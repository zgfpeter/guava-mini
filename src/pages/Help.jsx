import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
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
        "Delivery usually takes 3–5 business days, depending on your location.",
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
      <Navbar />
      <h1 className="p-5 bg-amber-700 text-white font-bold w-full text-center font-[DM_Serif_Display]">
        HELP
      </h1>
      <main className="flex-grow min-h-150 flex flex-col">
        <h2 className="p-5">FREQUENTLY ASKED QUESTIONS</h2>
        <ul className="flex gap-3 pl-5 pr-5 pb-5 flex-col text-stone-600">
          {faqs.map((faq, index) => (
            <li key={index}>
              <button onClick={() => toggleFAQ(index)}>{faq.question}</button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-stone-600 p-5 bg-stone-100">
                  {faq.answer}
                </p>
              )}
            </li>
          ))}
        </ul>

        <h2 className="p-5">CATEGORIES</h2>
        <table className="text-stone-600 text-[0.9em] items-center">
          <tbody>
            <tr>
              <td className="pt-5 pb-5 pr-4 pl-4 h-full border-[0.5px] border-black border-collapse border-l-0 text-center bg-stone-100 hover:cursor-pointer hover:bg-stone-200">
                Delivery and order tracking
              </td>
              <td className="pt-5 pb-5 pr-4 pl-4 h-full border-[0.5px] border-black  border-r-0 text-center bg-stone-100 hover:cursor-pointer hover:bg-stone-200">
                Returns, exchanges and refunds
              </td>
            </tr>
            <tr>
              <td className="pt-5 pb-5 pr-4 pl-4 h-full border-[0.5px] border-black  border-l-0 text-center bg-stone-100 hover:cursor-pointer hover:bg-stone-200">
                Payment methods
              </td>
              <td className="pt-5 pb-5 pr-4 pl-4 h-full border-[0.5px] border-black  border-r-0 text-center bg-stone-100 hover:cursor-pointer hover:bg-stone-200">
                Size information
              </td>
            </tr>
            <tr>
              <td className="pt-5 pb-5 pr-4 pl-4 h-full border-[0.5px] border-black  border-l-0 text-center bg-stone-100 hover:cursor-pointer hover:bg-stone-200">
                Personal data
              </td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer className="" />
    </div>
  );
}
