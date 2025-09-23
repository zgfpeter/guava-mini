import Header from "../components/Header";
import Footer from "../components/Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { getNames } from "country-list";
import { Link } from "react-router-dom";

import { useState } from "react";
export default function DeliveryDetails() {
  const [phone, setPhone] = useState("");
  const countries = getNames().map((name) => ({ value: name, label: name }));
  const [country, setCountry] = useState(null);

  const validateForm = (e) => {
    e.preventDefault();
    console.log("Validating...");
  };
  return (
    <section>
      <Header />
      <h1 className="mt-10 mb-2 mx-5 font-bold text-[0.9em] text-center">
        DELIVERY DETAILS
      </h1>
      <main className="w-full max-w-xl justify-self-center">
        <form
          action=""
          className="grid gap-5 p-10 border-1 border-t-0 border-stone-300"
        >
          <label htmlFor="firstName" className="sr-only">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            required
            placeholder="First name"
            className="border border-[#ccc] p-2"
          />
          <label htmlFor="lastName" className="sr-only">
            Last name
          </label>

          <input
            id="lastName"
            type="text"
            required
            placeholder="Last name"
            className="border border-[#ccc] p-2"
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <input
            id="email"
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
          <Select
            options={countries}
            value={country}
            onChange={setCountry}
            placeholder="Country"
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: 0,
                border: "1px solid #ccc",
                padding: "0.22em 0em",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
                color: "#333",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "#888",
                fontStyle: "italic",
                padding: "",
              }),
            }}
            isSearchable
          />
          <label htmlFor="address" className="sr-only">
            Address
          </label>

          <input
            id="address"
            required
            type="text"
            placeholder="Address"
            className="border border-[#ccc] p-2"
          />
          <label htmlFor="postcode" className="sr-only">
            Postcode
          </label>
          <input
            id="postcode"
            required
            type="text"
            placeholder="Postcode"
            className="border border-[#ccc] p-2"
          />
          <label htmlFor="townCity" className="sr-only">
            Town/City
          </label>
          <input
            id="townCity"
            required
            type="text"
            placeholder="Town/City"
            className="border border-[#ccc] p-2"
          />
          <label htmlFor="countyState" className="sr-only">
            County/State
          </label>
          <input
            required
            type="text"
            placeholder="County/State"
            className="border border-[#ccc] p-2"
          />
          <button
            aria-label="Continue to payment"
            onSubmit={() => {
              validateForm(e);
            }}
            to="/payment"
            className="flex gap-2 items-center justify-center p-3 text-white my-10 bg-rose-700 hover:cursor-pointer hover:bg-rose-900"
          >
            Continue to payment
          </button>
        </form>
      </main>
      <Footer />
    </section>
  );
}
