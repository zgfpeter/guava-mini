import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center px-5 md:max-w-[40%] mx-auto">
        <h1 className="p-5 mb-10 bg-amber-700 text-white font-bold w-full text-center font-[DM_Serif_Display]">
          CONTACT
        </h1>
        <h2 className="p-5 mt-5 text-center text-cyan-900">
          Before contacting us,
          <br /> please make sure to check out our <br />
          <Link to="/help" className="font-bold underline">
            HELP
          </Link>{" "}
          page
          <br />
          for frequently asked questions.
        </h2>

        <ContactForm className="p-3 flex justify-center items-center w-full md:max-w-3xl mx-auto" />
      </main>
      <Footer />
    </div>
  );
}
