import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

export default function UserProfile() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!usernameRef.current.value.trim()) {
      newErrors.username = "Username is required";
    }

    if (!passwordRef.current.value.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // Focus first invalid input
    if (newErrors.username) {
      usernameRef.current.focus();
    } else if (newErrors.password) {
      passwordRef.current.focus();
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Login submitted:", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <section>
      <Header />
      <main className="min-h-screen flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center border border-stone-200 p-10 mt-10 w-full max-w-md"
        >
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            ref={usernameRef}
            className="border p-2 w-full border-stone-400"
          />
          {errors.username && (
            <span className="text-red-600">{errors.username}</span>
          )}

          <label htmlFor="userPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="userPassword"
            placeholder="Password"
            ref={passwordRef}
            className="border p-2 w-full border-stone-400"
          />
          {errors.password && (
            <span className="text-red-600">{errors.password}</span>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-emerald-700 text-white rounded hover:bg-emerald-900"
          >
            LOG IN
          </button>
        </form>

        <p className="text-center mt-[15px] mb-10 flex flex-col">
          Don't have an account?
          <a
            href="/userRegistration"
            className="underline inline-block mt-2 py-3 px-5 tracking-wider rounded"
          >
            REGISTER
          </a>
        </p>

        <a
          href="/deliveryDetails"
          className="block underline mt-5 self-end mr-10 text-gray-600"
        >
          Continue as guest <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </main>
      <Footer />
    </section>
  );
}
