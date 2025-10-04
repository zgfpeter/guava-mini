// ok
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <div>
      <Header />
      <h1 className="p-5 mb-10 bg-amber-700 text-white font-bold w-full text-center font-[DM_Serif_Display]">
        CONTACT
      </h1>
      <main className="w-full max-w-xl justify-self-center">
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

        <ContactForm className="flex items-center justify-center w-full p-3 mx-auto md:max-w-3xl" />
      </main>
      <Footer />
    </div>
  );
}
