import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import NewsletterBanner from "../components/NewsletterBanner";
export default function LandingPage() {
  return (
    // i could use a div, but if i don't need styling on that div, i can use React.Fragment
    <React.Fragment>
      <Header />
      <main className="relative">
        <section className="relative">
          <img
            className="w-full h-auto object-cover"
            src="https://images.unsplash.com/photo-1738248000018-7b38dcecdb36"
            alt=""
          />

          <div className="absolute inset-0 flex items-center justify-start">
            <Link
              to="/home"
              aria-label="Shop new arrivals"
              className="text-white font-bold tracking-[0.5em] bg-emerald-900/50 p-3 rounded hover:bg-emerald-900/80 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-emerald-700"
            >
              NEW <br /> ARRIVALS
            </Link>
          </div>
        </section>

        <section className="grid gap-5 absolute bottom-0 bg-stone-900/55 w-full text-center p-5 text-neutral-100">
          <h2 className="max-w-3xl mx-auto">
            GET 10% OFF YOUR NEXT PURCHASE <br /> BY SIGNING UP TO OUR FREE
            NEWSLETTER
          </h2>
          <NewsletterBanner />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
