import "./App.css";
import Help from "./pages/Help.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ShippingAndReturns from "./pages/ShippingAndReturns.jsx";
import PrivacyAndCookies from "./pages/PrivacyAndCookies.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Contact from "./pages/contact.jsx";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart.jsx";
import { useEffect } from "react";
import Payment from "./pages/Payment.jsx";
import DeliveryDetails from "./pages/DeliveryDetails.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import UserRegistration from "./pages/UserRegistration.jsx";

function App() {
  useEffect(() => {
    localStorage.clear(); // clears everything on load
  }, []);

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
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/deliveryDetails" element={<DeliveryDetails />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/userRegistration" element={<UserRegistration />} />
      </Routes>
    </>
  );
}

export default App;
