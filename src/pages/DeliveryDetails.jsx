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
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    setdDForm({
      ...dDForm,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!dDForm.dD_firstName.trim())
      newErrors.dD_firstName = "First name is required";
    if (!dDForm.dD_lastName.trim())
      newErrors.dD_lastName = "Last name is required";
    if (!dDForm.dD_email) newErrors.dD_email = "Email is required";
    else if (!emailRegex.test(dDForm.dD_email))
      newErrors.dD_email = "Email is invalid";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("/payment");
    }
  };

  // For testing
  const handleTestFill = () => {
    setdDForm({
      dD_firstName: "John",
      dD_lastName: "Doe",
      dD_email: "test@example.com",
    });
    setPhone("1234567890");
    setCountry(countries.find((c) => c.value === "United States") || null);

    document.getElementById("address").value = "123 Main St";
    document.getElementById("postcode").value = "12345";
    document.getElementById("townCity").value = "Testville";
    document.getElementById("countyState").value = "Test State";
  };

  // const handleTestSubmit = () => {
  //   navigate("/payment");
  // };

  return (
    <section>
      <Header />
      <h1 className="mt-10 mb-2 mx-5 font-bold text-[0.9em] text-center">
        DELIVERY DETAILS
      </h1>
      <main className="w-full max-w-xl justify-self-center">
        <form
          onSubmit={handleSubmit}
          className="grid gap-5 p-10 border-t-0 border-1 border-stone-300"
        >
          {/* First Name */}
          <input
            onChange={handleChange}
            id="firstName"
            type="text"
            name="dD_firstName"
            required
            placeholder="First name"
            className="border border-[#ccc] p-2"
            value={dDForm.dD_firstName}
          />
          {errors.dD_firstName && (
            <span className="text-red-600">{errors.dD_firstName}</span>
          )}

          {/* Last Name */}
          <input
            onChange={handleChange}
            id="lastName"
            type="text"
            name="dD_lastName"
            required
            placeholder="Last name"
            className="border border-[#ccc] p-2"
            value={dDForm.dD_lastName}
          />
          {errors.dD_lastName && (
            <span className="text-red-600">{errors.dD_lastName}</span>
          )}

          {/* Email */}
          <input
            onChange={handleChange}
            id="email"
            type="email"
            name="dD_email"
            required
            placeholder="E-mail"
            className="border border-[#ccc] p-2"
            value={dDForm.dD_email}
          />
          {errors.dD_email && (
            <span className="text-red-600">{errors.dD_email}</span>
          )}

          {/* Phone */}
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={setPhone}
            inputStyle={{
              width: "100%",
              borderRadius: 0,
              border: "1px solid #ccc",
              paddingTop: "1.4em",
              paddingBottom: "1.4em",
            }}
            placeholder="Mobile"
            enableSearch
          />

          {/* Country */}
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
              }),
            }}
            isSearchable
          />

          {/* Remaining fields */}
          <input
            id="address"
            required
            type="text"
            placeholder="Address"
            className="border border-[#ccc] p-2"
          />
          <input
            id="postcode"
            required
            type="text"
            placeholder="Postcode"
            className="border border-[#ccc] p-2"
          />
          <input
            id="townCity"
            required
            type="text"
            placeholder="Town/City"
            className="border border-[#ccc] p-2"
          />
          <input
            id="countyState"
            required
            type="text"
            placeholder="County/State"
            className="border border-[#ccc] p-2"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="self-center w-full pt-3 pb-3 pl-10 pr-10 text-white rounded bg-emerald-700 hover:bg-emerald-900"
          >
            CONTINUE TO PAYMENT
          </button>

          {/*  For testing */}
          <button
            type="button"
            onClick={handleTestFill}
            className="self-center w-full pt-3 pb-3 pl-10 pr-10 mt-2 rounded"
          >
            Auto-Fill Test Data
          </button>
        </form>
      </main>
      <Footer />
    </section>
  );
}
