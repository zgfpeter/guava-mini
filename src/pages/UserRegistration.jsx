import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useState } from "react";

export default function UserRegistration() {
  // refs for inputs
  // state more useful for validation as the user types, but if i only need
  // to validate on submit, useRef is better, fewer renders, but less reactive.

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateForm = (username, email, password) => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    if (!emailRegex.test(email)) newErrors.email = "Email is invalid";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // get values from refs
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const validationErrors = validateForm(username, email, password);

    // 4. Focus the first invalid input (side effect)
    if (validationErrors.username) {
      usernameRef.current.focus();
    } else if (validationErrors.email) {
      emailRef.current.focus();
    } else if (validationErrors.password) {
      passwordRef.current.focus();
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setFormSuccess(true);

      // clear inputs
      usernameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";

      setTimeout(() => setFormSuccess(false), 50000);
    }
  };

  return (
    <section>
      <Header />
      <main className="my-20 flex items-center flex-col">
        {formSuccess && (
          <span className="m-5 p-5 bg-emerald-800 text-white text-center">
            A verification email has been send to your address. Please check
            your <span className="underline">inbox</span> and verify your email.
          </span>
        )}
        <form
          onSubmit={handleSubmit}
          className="shadow-md/30 flex flex-col gap-5 p-5 w-full max-w-md"
        >
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            name="username"
            type="text"
            id="username"
            ref={usernameRef}
            className="border rounded p-2 bg-stone-50"
            placeholder="Username"
          />
          {errors.username && (
            <span className="text-red-600">{errors.username}</span>
          )}

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            ref={emailRef}
            className="border rounded p-2 bg-stone-50"
            placeholder="Email Address"
          />
          {errors.email && <span className="text-red-600">{errors.email}</span>}

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            ref={passwordRef}
            className="border rounded p-2 bg-stone-50"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-600">{errors.password}</span>
          )}

          <button
            type="submit"
            className="w-full pt-3 pb-3 pl-10 pr-10 bg-emerald-700 text-white self-center rounded hover:cursor-pointer hover:bg-emerald-900"
          >
            REGISTER
          </button>
        </form>

        <p className="mt-10">
          Already have an account?
          <a href="/userProfile" className="underline ml-1">
            LOG IN
          </a>
        </p>
      </main>
      <Footer />
    </section>
  );
}
