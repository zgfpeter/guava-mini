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
    if (savedTotal) setTotal(Number(savedTotal)); // convert back to number
  }, []);
  const months = Array.from({ length: 12 }, (_, i) => {
    const m = i + 1;
    return m < 10 ? `0${m}` : `${m}`;
  });

  const formatPrice = (value) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);

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

  const paymentSuccessful = () => {
    setIsPaid(true); // mark payment as complete
  };

  return (
    <section>
      <Header />

      <main className="w-full max-w-xl min-h-screen justify-self-center">
        {isPaid ? (
          // Message after payment
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
              <label htmlFor="firstName" className="sr-only">
                First name
              </label>
              <input
                placeholder="First name"
                type="text"
                id="firstName"
                required
                className="border border-[#ccc] p-2"
              />
              <label htmlFor="lastName" className="sr-only">
                Last name
              </label>
              <input
                placeholder="Last name"
                type="text"
                id="lastName"
                required
                className="border border-[#ccc] p-2"
              />
              <label htmlFor="cardNumber" className="sr-only">
                Card Number
              </label>
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
                  <label htmlFor="cardExpiryMonth" className="sr-only">
                    Month
                  </label>
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
                  <label htmlFor="cardExpiryYear" className="sr-only">
                    Year
                  </label>
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
              <h2 className="mt-10 mb-2 mx-5 font-bold text-[0.9em] text-center">
                BILLING ADDRESS
              </h2>

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
                  <label htmlFor="billing-firstName" className="sr-only">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    id="billing-firstName"
                    className="border border-[#ccc] p-2"
                  />
                  <label htmlFor="billing-lastName" className="sr-only">
                    Last name
                  </label>
                  <input
                    id="billing-lastName"
                    placeholder="Last name"
                    type="text"
                    required
                    className="border border-[#ccc] p-2"
                  />
                  <label htmlFor="selectCountry" className="sr-only">
                    Country
                  </label>
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
                        padding: "",
                      }),
                    }}
                    isSearchable
                  />

                  <label htmlFor="billing-town" className="sr-only">
                    Town/City
                  </label>
                  <input
                    id="billing-town"
                    placeholder="City"
                    required
                    type="text"
                    className="border border-[#ccc] p-2"
                  />
                  <label htmlFor="billing-address" className="sr-only">
                    Address
                  </label>
                  <input
                    required
                    id="billing-address"
                    placeholder="Address"
                    type="text"
                    className="border border-[#ccc] p-2"
                  />
                  <label htmlFor="billing-postcode" className="sr-only">
                    Postcode
                  </label>
                  <input
                    required
                    id="billing-postcode"
                    placeholder="Postcode"
                    type="text"
                    className="border border-[#ccc] p-2"
                  />
                </section>
              )}

              <button
                onClick={paymentSuccessful}
                className="flex items-center justify-center gap-2 p-3 my-10 text-white bg-rose-700 hover:cursor-pointer hover:bg-rose-900"
              >
                Pay {formatPrice(total)}
              </button>
            </form>
          </>
        )}
      </main>
      <Footer />
    </section>
  );
}
