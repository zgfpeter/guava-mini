// ok
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import React from "react";
import NewsletterBanner from "../components/NewsletterBanner";
export default function LandingPage() {
  return (
    <React.Fragment>
      <Header />
      <main className="relative min-h-screen">
        <section className="relative flex place-content-center">
          <img
            className="object-cover w-full h-screen"
            src="https://images.unsplash.com/photo-1738248000018-7b38dcecdb36"
            alt=""
          />

          <div className="absolute inset-0 flex items-center justify-start">
            <Link
              to="/home"
              aria-label="Shop new arrivals"
              className="text-white text-2xl font-bold tracking-[0.5em] bg-emerald-900/80 p-8 rounded hover:bg-emerald-900/100 focus:outline focus:outline-offset-2 focus:outline-emerald-700"
            >
              <span className="block">NEW</span>{" "}
              <span className="block">ARRIVALS</span>
            </Link>
          </div>
        </section>

        <section className="absolute bottom-0 grid w-full gap-5 p-5 text-center bg-stone-900/55 text-neutral-100">
          <h1 className="max-w-3xl mx-auto">
            <span className="block">GET 10% OFF YOUR NEXT PURCHASE </span>
            <span className="block">BY SIGNING UP TO OUR FREE NEWSLETTER</span>
          </h1>
          <NewsletterBanner />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
