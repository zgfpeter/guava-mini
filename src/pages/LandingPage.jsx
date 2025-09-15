import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div className="">
      <Navbar />
      <main className="relative min-h-screen flex flex-col bg-rose-700 items-center justify-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1738248000018-7b38dcecdb36"
            alt=""
          />
          <Link
            to="/home"
            className="absolute top-1/2 -translate-y-1/2 flex text-white font-bold tracking-[0.5em] bg-emerald-900/50 p-3 rounded hover:cursor-pointer hover:bg-emerald-900/80"
          >
            NEW <br /> ARRIVALS
          </Link>
          <div className="grid gap-5 absolute bottom-[0%] bg-stone-900/55 w-full text-center p-5 text-neutral-100">
            GET 10% OFF YOUR NEXT PURCHASE <br /> BY SIGNING UP TO OUR FREE
            NEWSLETTER
            <div>
              <input
                type="email"
                className="bg-neutral-100 mr-2 p-1 text-stone-900"
              />
              <button
                type="submit"
                className="bg-emerald-800 pt-1 pb-1 pr-5 pl-5 hover:cursor-pointer hover:bg-emerald-900"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
