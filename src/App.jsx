import "./App.css";
import Help from "./pages/Help.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ShippingAndReturns from "./pages/ShippingAndReturns.jsx";
import PrivacyAndCookies from "./pages/PrivacyAndCookies.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Contact from "./pages/contact.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/shippingAndReturns" element={<ShippingAndReturns />} />
        <Route path="/privacyAndCookies" element={<PrivacyAndCookies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
