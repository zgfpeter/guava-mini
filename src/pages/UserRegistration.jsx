import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserRegistration() {
  // refs for inputs
  // state more useful for validation as the user types, but if i only need
  // to validate on submit, useRef is better, fewer renders, but less reactive.
  const navigate = useNavigate();

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

      setTimeout(() => {
        setFormSuccess(false);
        navigate("/home");
      }, 2000);
    }
  };

  return (
    <section>
      <Header />
      <main className="flex flex-col items-center my-20">
        {formSuccess && (
          <span className="text-center text-emerald-500">Success!</span>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md gap-5 p-5 shadow-md/30"
        >
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            name="username"
            type="text"
            id="username"
            ref={usernameRef}
            className="p-2 border rounded bg-stone-50"
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
            className="p-2 border rounded bg-stone-50"
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
            className="p-2 border rounded bg-stone-50"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-600">{errors.password}</span>
          )}

          <button
            type="submit"
            className="self-center w-full pt-3 pb-3 pl-10 pr-10 text-white rounded bg-emerald-700 hover:cursor-pointer hover:bg-emerald-900"
          >
            REGISTER
          </button>
        </form>

        <p className="mt-10">
          Already have an account?
          <a href="/userProfile" className="ml-1 underline">
            LOG IN
          </a>
        </p>
      </main>
      <Footer />
    </section>
  );
}
