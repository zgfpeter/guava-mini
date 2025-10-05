// ok
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { getNames } from "country-list";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
export default function DeliveryDetails() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const countries = getNames().map((name) => ({ value: name, label: name }));
  const [country, setCountry] = useState(null);
  const [dDForm, setdDForm] = useState({
    dD_firstName: "",
    dD_lastName: "",
    dD_email: "",
  });

  const [errors, setErrors] = useState({});
  //const [formSuccess, setFormSuccess] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    //console.log(e.target.value);
    setdDForm({
      ...dDForm,
      [e.target.name]: e.target.value,
    });
  };

  // form validation only checks first name, last name and email
  // the contact form is more thorough
  const validateForm = () => {
    const newErrors = {};
    // trim removes whitespaces
    if (!dDForm.dD_firstName.trim()) {
      newErrors.dD_firstName = "First name is required";
    }

    if (!dDForm.dD_lastName.trim()) {
      newErrors.dD_lastName = "Last name is required";
    }

    if (!dDForm.dD_email) newErrors.contact_email = "Email is required";
    else if (!emailRegex.test(dDForm.dD_email))
      newErrors.contact_email = "Email is invalid";

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      //if there is at least one error...
      setErrors(validationErrors);
    } else {
      setErrors({}); // no errors, send data

      // Redirect to the payment page after success
      navigate("/payment");
    }
  };

  return (
    <section>
      <Header />
      <h1 className="mt-10 mb-2 mx-5 font-bold text-[0.9em] text-center">
        DELIVERY DETAILS
      </h1>
      <main className="w-full max-w-xl justify-self-center">
        <form
          onSubmit={handleSubmit}
          action=""
          className="grid gap-5 p-10 border-t-0 border-1 border-stone-300"
        >
          <label htmlFor="firstName" className="sr-only">
            First name
          </label>
          <input
            onChange={handleChange}
            id="firstName"
            type="text"
            name="dD_firstName"
            required
            placeholder="First name"
            className="border border-[#ccc] p-2"
          />
          {errors.contact_firstName && (
            <span className="text-red-600">{errors.contact_firstName}</span>
          )}
          <label htmlFor="lastName" className="sr-only">
            Last name
          </label>

          <input
            onChange={handleChange}
            id="lastName"
            type="text"
            name="dD_lastName"
            required
            placeholder="Last name"
            className="border border-[#ccc] p-2"
          />
          {errors.contact_lastName && (
            <span className="text-red-600">{errors.contact_lastName}</span>
          )}

          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <input
            onChange={handleChange}
            id="email"
            type="email"
            name="dD_email"
            required
            placeholder="E-mail"
            className="border border-[#ccc] p-2"
          />
          {errors.contact_email && (
            <span className="text-red-600">{errors.contact_email}</span>
          )}

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
            id="countyState"
            required
            type="text"
            placeholder="County/State"
            className="border border-[#ccc] p-2"
          />

          <button
            aria-label="Continue to payment"
            type="submit"
            className="w-full pt-3 pb-3 pl-10 pr-10 bg-emerald-700 text-white self-center rounded hover:cursor-pointer hover:bg-emerald-900"
          >
            CONTINUE TO PAYMENT
          </button>
        </form>
      </main>
      <Footer />
    </section>
  );
}
