import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <div>
      <Header />
      <h1 className="p-5 text-s mt-5 text-center text-cyan-900">
        Before contacting us,
        <br /> please make sure to check out our <br />
        <Link to="/help" className="font-bold underline">
          HELP
        </Link>{" "}
        page
        <br />
        for common questions.
      </h1>
      <main className="flex-grow min-h-100 p-3">
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
