// ok
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <h1 className="w-full p-5 font-bold text-center text-white bg-amber-800 font-dm-serif">
        ABOUT
      </h1>

      <main className="items-center justify-center flex-grow p-6 space-y-4">
        <section>
          <p>
            Welcome to GUAVA! We're a small online store dedicated to bringing
            you quality products at great prices. Every item in our shop is
            carefully selected to make your everyday life easier, more fun, and
            stylish.
          </p>
        </section>

        <section>
          <h2 className="sr-only">Follow us</h2>
          <p>
            Find us on social media by using the links below. Thanks for
            stopping by - happy shopping!
          </p>
        </section>
      </main>

      <Link
        to="/home"
        aria-label="Explore our new arrivals"
        className="w-[220px] self-center flex text-white bg-emerald-800 p-3 rounded hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        Explore our new arrivals
      </Link>

      <Footer />
    </div>
  );
}
