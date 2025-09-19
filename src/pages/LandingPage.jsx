import Navbar from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import NewsletterBanner from "../components/NewsletterBanner";
export default function LandingPage() {
  return (
    <div className="">
      <Navbar />
      <main className="relative">
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1738248000018-7b38dcecdb36"
            alt="model in all black suit and shoes, leaning backwards with his hands, straight face"
          />
          <Link
            to="/home"
            role="button"
            aria-label="Shop new arrivals"
            className="absolute top-1/2 -translate-y-1/2 text-white font-bold tracking-[0.5em] bg-emerald-900/50 p-3 rounded hover:bg-emerald-900/80"
          >
            NEW <br /> ARRIVALS
          </Link>
          <h2 className="grid gap-5 absolute bottom-0 bg-stone-900/55 w-full text-center p-5 text-neutral-100">
            GET 10% OFF YOUR NEXT PURCHASE <br /> BY SIGNING UP TO OUR FREE
            NEWSLETTER
            <NewsletterBanner />
          </h2>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// semantics??
