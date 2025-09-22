import { useState } from "react";

export default function ContactForm() {
  const [contactForm, setContactForm] = useState({
    contact_firstName: "",
    contact_lastName: "",
    contact_email: "",
    contact_orderNumber: "",
    contact_userMessage: "",
  });

  const [errors, setErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleChange = (e) => {
    //console.log(e.target.value);
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!contactForm.contact_firstName)
      newErrors.contact_firstName = "First name is required";
    if (!contactForm.contact_lastName)
      newErrors.contact_lastName = "Last name is required";
    if (!contactForm.contact_email)
      newErrors.contact_email = "Email is required";
    else if (!email.test(contactForm.contact_email))
      newErrors.contact_email = "Email is invalid";
    if (!contactForm.contact_userMessage)
      newErrors.contact_userMessage = "Message cannot be empty";
    return newErrors;
  };

  const clearForm = () => {
    setContactForm({
      contact_email: "",
      contact_firstName: "",
      contact_lastName: "",
      contact_orderNumber: "",
      contact_userMessage: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      //if there is at least one error...
      setErrors(validationErrors);
    } else {
      setErrors({}); // no errors, send data
      setFormSuccess(true);
      clearForm();
      setTimeout(() => setFormSuccess(false), 5000); // form success message disappears
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-md/30 flex flex-col gap-5 p-5"
    >
      <input
        type="text"
        name="contact_firstName"
        className="border rounded p-2 bg-stone-50"
        placeholder="First Name..."
        value={contactForm.contact_firstName}
        onChange={handleChange}
      />
      {errors.contact_firstName && (
        <span className="text-red-600">{errors.contact_firstName}</span>
      )}

      <input
        type="text"
        name="contact_lastName"
        className="border rounded p-2 bg-stone-50"
        placeholder="Last Name..."
        value={contactForm.contact_lastName}
        onChange={handleChange}
      />
      {errors.contact_lastName && (
        <span className="text-red-600">{errors.contact_lastName}</span>
      )}

      <input
        type="email"
        name="contact_email"
        className="border rounded p-2 bg-stone-50"
        placeholder="Email Address..."
        value={contactForm.contact_email}
        onChange={handleChange}
      />
      {errors.contact_email && (
        <span className="text-red-600">{errors.contact_email}</span>
      )}

      <input
        type="text"
        name="contact_orderNumber"
        className="border rounded p-2 bg-stone-50"
        value={contactForm.contact_orderNumber}
        onChange={handleChange}
        placeholder="Order number (optional) "
      />
      <textarea
        name="contact_userMessage"
        className="border rounded p-2 bg-stone-50"
        placeholder="Message..."
        required
        minLength={10}
        value={contactForm.contact_userMessage}
        onChange={handleChange}
      ></textarea>
      {errors.contact_userMessage && (
        <span className="text-red-600">{errors.contact_userMessage}</span>
      )}
      {formSuccess && (
        <span className="text-emerald-800">
          {"Your message has been sent!"}
        </span>
      )}
      <button
        type="submit"
        className="w-full pt-3 pb-3 pl-10 pr-10 bg-emerald-700 text-white self-center rounded hover:cursor-pointer hover:bg-emerald-900"
      >
        SUBMIT
      </button>
    </form>
  );
}
