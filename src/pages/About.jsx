import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="min-h-screen flex flex-col gap-2">
      <Navbar />
      <h1 className="p-5 bg-amber-700 text-white font-bold w-full text-center font-[DM_Serif_Display]">
        ABOUT
      </h1>
      <main className="flex-grow min-h-80 p-3">
        Welcome to GUAVA! <br /> We're a small online store dedicated to
        bringing you quality products at great prices. Every item in our shop is
        carefully selected to make your everyday life easier, more fun, and
        stylish. Thanks for stopping by - happy shopping!
      </main>
      <Link
        to="/home"
        className="flex w-55 self-center flex justify-center gap-2 items-center text-white bg-emerald-800 p-3 rounded hover:cursor-pointer hover:bg-emerald-900"
      >
        Explore our new arrivals
      </Link>
      <Footer />
    </div>
  );
}
