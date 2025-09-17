import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { useState } from "react";

import InputMask from "react-input-mask";

import { Link } from "react-router-dom";

export default function Payment() {
  const [phone, setPhone] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const months = Array.from({ length: 12 }, (_, i) => {
    const m = i + 1;
    return m < 10 ? `0${m}` : `${m}`;
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  const handleChange = (e) => {
    const value = e.target.value.slice(0, 16); // limit to 16 digits
    setCardNumber(value);
  };

  const validateForm = (e) => {
    e.preventDefault();
    console.log("Validating...");
  };
  return (
    <section>
      <Navbar />

      <h1 className="mt-10 mb-2 mx-5 font-bold text-[0.9em] text-center">
        PAYMENT DETAILS
      </h1>
      <p className="text-xs text-gray-600 text-center">
        Please enter details as they appear on the card
      </p>
      <main className="min-h-screen">
        <form
          action=""
          className="grid gap-5 p-5 border-1 border-t-0 border-stone-300"
        >
          <input
            type="text"
            required
            placeholder="First name"
            className="border border-[#ccc] p-2"
          />
          <input
            type="text"
            required
            placeholder="Last name"
            className="border border-[#ccc] p-2"
          />
          <input
            type="email"
            required
            placeholder="E-mail"
            className="border border-[#ccc] p-2"
          />
          <PhoneInput
            country={"us"} // default country
            value={phone}
            onChange={setPhone} // updates state
            inputStyle={{
              width: "100%",
              borderRadius: 0,
              border: "1px solid #ccc",
              paddingTop: "1.4em",
              paddingBottom: "1.4em",
            }}
            placeholder="Mobile"
            enableSearch // allows searching by country name
          />
          <input
            type="text"
            required
            value={cardNumber}
            placeholder="Card number"
            className="border border-[#ccc] p-2"
            onChange={handleChange}
          />

          <div className="flex items-center gap-2">
            <p>Expiry details</p>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="border border-stone-400 p-1 w-20"
            >
              <option value="">MM</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border border-stone-400 p-1 w-20"
            >
              <option value="">YY</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <button
            onSubmit={() => {
              validateForm(e);
            }}
            to="/payment"
            className="flex gap-2 items-center justify-center p-3 text-white my-10 bg-rose-700 hover:cursor-pointer hover:bg-rose-900"
          >
            Pay
          </button>
        </form>
      </main>
      <Footer />
    </section>
  );
}
