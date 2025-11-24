import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "react-select";
import { useState, useEffect } from "react";
import { getNames } from "country-list";
import { Link } from "react-router-dom";

export default function Payment() {
  const [sameAsDelivery, setSameAsDelivery] = useState(true);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const countries = getNames().map((name) => ({ value: name, label: name }));
  const [country, setCountry] = useState(null);
  const [total, setTotal] = useState(0);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const savedTotal = localStorage.getItem("cartTotal");
    if (savedTotal) setTotal(Number(savedTotal));
  }, []);

  const months = Array.from({ length: 12 }, (_, i) => {
    const m = i + 1;
    return m < 10 ? `0${m}` : `${m}`;
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  const formatPrice = (value) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);

  const handleChange = (e) => {
    const value = e.target.value.slice(0, 16);
    setCardNumber(value);
  };

  const validateForm = (e) => {
    e.preventDefault();
    console.log("Validating...");
  };

  const paymentSuccessful = () => {
    setIsPaid(true);
  };

  // For testing
  const handleTestFill = () => {
    // Card details
    setCardNumber("4111111111111111"); // dummy card
    setMonth("12");
    setYear(`${currentYear + 2}`);

    // Billing address
    if (!sameAsDelivery) {
      document.getElementById("billing-firstName").value = "John";
      document.getElementById("billing-lastName").value = "Doe";
      setCountry(countries.find((c) => c.value === "United States") || null);
      document.getElementById("billing-town").value = "Testville";
      document.getElementById("billing-address").value = "123 Main St";
      document.getElementById("billing-postcode").value = "12345";
    }

    document.getElementById("firstName").value = "John";
    document.getElementById("lastName").value = "Doe";
  };

  return (
    <section>
      <Header />
      <main className="w-full max-w-xl min-h-screen justify-self-center">
        {isPaid ? (
          <div className="w-full p-5 text-center">
            <h2 className="mb-4 text-2xl font-bold text-emerald-600">
              Thank you for your purchase!
            </h2>
            <p className="mb-10 text-gray-600">
              Your order has been received and is being processed.
            </p>
            <Link to="/home" className="underline">
              Explore more products
            </Link>
          </div>
        ) : (
          <>
            <h1 className="mt-10 mb-2 mx-5 font-bold text-[0.9em] text-center">
              PAYMENT DETAILS
            </h1>
            <p className="text-xs text-center text-gray-600">
              Please enter details as they appear on the card
            </p>
            <form
              onSubmit={validateForm}
              className="grid gap-5 p-5 border border-t-0 border-stone-300"
            >
              {/* Name and card */}
              <input
                placeholder="First name"
                type="text"
                id="firstName"
                required
                className="border border-[#ccc] p-2"
              />
              <input
                placeholder="Last name"
                type="text"
                id="lastName"
                required
                className="border border-[#ccc] p-2"
              />
              <input
                type="tel"
                id="cardNumber"
                placeholder="Card number"
                required
                value={cardNumber}
                className="border border-[#ccc] p-2"
                onChange={handleChange}
              />

              <fieldset>
                <legend className="flex items-center gap-3">
                  Expiry Details
                  <select
                    id="cardExpiryMonth"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-20 p-1 border border-stone-400"
                  >
                    <option value="">MM</option>
                    {months.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <select
                    id="cardExpiryYear"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-20 p-1 border border-stone-400"
                  >
                    <option value="">YY</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </legend>
              </fieldset>

              {/* Billing Address */}
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="billing-same"
                  checked={sameAsDelivery}
                  onChange={(e) => setSameAsDelivery(e.target.checked)}
                />
                Billing address is the same as delivery
              </label>

              {!sameAsDelivery && (
                <section className="grid gap-5 p-5 border border-t-0 border-stone-300">
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    id="billing-firstName"
                    className="border border-[#ccc] p-2"
                  />
                  <input
                    id="billing-lastName"
                    placeholder="Last name"
                    type="text"
                    required
                    className="border border-[#ccc] p-2"
                  />
                  <Select
                    inputId="selectCountry"
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
                  <input
                    id="billing-town"
                    placeholder="City"
                    required
                    type="text"
                    className="border border-[#ccc] p-2"
                  />
                  <input
                    required
                    id="billing-address"
                    placeholder="Address"
                    type="text"
                    className="border border-[#ccc] p-2"
                  />
                  <input
                    required
                    id="billing-postcode"
                    placeholder="Postcode"
                    type="text"
                    className="border border-[#ccc] p-2"
                  />
                </section>
              )}

              {/* Payment Button */}
              <button
                type="button"
                onClick={paymentSuccessful}
                className="flex items-center justify-center gap-2 p-3 my-5 text-white bg-rose-700 hover:cursor-pointer hover:bg-rose-900"
              >
                Pay {formatPrice(total)}
              </button>

              {/* --- TESTING BUTTONS --- */}
              <button
                type="button"
                onClick={handleTestFill}
                className="self-center w-full pt-3 pb-3 rounded "
              >
                Auto-Fill Test Data
              </button>
            </form>
          </>
        )}
      </main>
      <Footer />
    </section>
  );
}
