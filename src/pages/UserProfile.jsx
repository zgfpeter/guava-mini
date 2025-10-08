import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
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
      <main className="flex flex-col items-center my-20 min-h-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full max-w-md gap-3 p-10 mt-10 border border-stone-200"
        >
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            ref={usernameRef}
            className="w-full p-2 border border-stone-400"
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
            className="w-full p-2 border border-stone-400"
          />
          {errors.password && (
            <span className="text-red-600">{errors.password}</span>
          )}

          <button
            type="submit"
            className="w-full py-3 text-white rounded bg-emerald-700 hover:bg-emerald-900"
          >
            LOG IN
          </button>
        </form>

        <p className="text-center mt-[15px] mb-10 flex flex-col">
          Don't have an account?
          <Link
            to="/userRegistration"
            className="inline-block px-5 py-3 mt-2 tracking-wider underline rounded"
          >
            REGISTER
          </Link>
        </p>

        <Link
          to="/deliveryDetails"
          className="block mt-5 text-gray-600 underline"
        >
          Continue as guest <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </main>
      <Footer />
    </section>
  );
}
