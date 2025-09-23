import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      <Header />

      <h1 className="p-5 bg-amber-700 text-white font-bold w-full text-center font-[DM_Serif_Display]">
        ABOUT
      </h1>

      <main className="flex-grow p-6">
        <p>
          Welcome to GUAVA! We're a small online store dedicated to bringing you
          quality products at great prices. Every item in our shop is carefully
          selected to make your everyday life easier, more fun, and stylish.
        </p>
        <p className="mt-4">
          Find us on social media by using the links below. Thanks for stopping
          by - happy shopping!
        </p>
      </main>

      <Link
        to="/home"
        role="button"
        aria-label="Explore our new arrivals"
        className="w-[220px] self-center flex justify-center items-center gap-2 text-white bg-emerald-800 p-3 rounded hover:bg-emerald-900"
      >
        Explore our new arrivals
      </Link>

      <Footer />
    </div>
  );
}
