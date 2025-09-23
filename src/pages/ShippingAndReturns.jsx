import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faRotateLeft,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
export default function shippingAndReturns() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <h1 className="p-5 bg-amber-700 text-white font-bold w-full text-center font-[DM_Serif_Display]">
        SHIPPING & RETURNS
      </h1>
      <main className="flex-grow min-h-100 p-3 md:max-w-3xl self-center">
        <h2 className="text-[1.5em] pb-5 pt-5 flex gap-2 items-center">
          <FontAwesomeIcon icon={faTruck} className="text-sky-800" />
          Shipping
        </h2>
        <h3 className="text-[1.1em] pt-3 pb-3">Order Processing Time</h3>
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          All orders are processed within 1-3 business days (excluding weekends
          and holidays) after receiving payment confirmation. You will receive a
          confirmation email with tracking information once your order has
          shipped.
        </p>
        <h3 className="text-[1.1em] pt-3 pb-3">
          Shipping Rates &amp; Delivery Estimates
        </h3>
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          Shipping charges for your order will be calculated and displayed at
          checkout.{" "}
        </p>{" "}
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          Estimated delivery times:
        </p>
        <ul className="ttext-[0.9em] bg-stone-100 p-5 text-stone-600">
          <li> Domestic (within [Your Country]): 3-7 business days</li>
          <li>
            International: 7-21 business days (may vary due to customs clearance
            and carrier delays)
          </li>
        </ul>
        <h3 className="text-[1.1em] pt-3 pb-3">Order Tracking</h3>
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          Once your order has shipped, you will receive a tracking number via
          email. Please allow up to 48 hours for the tracking link to become
          active.
        </p>
        <h3 className="text-[1.1em] pt-3 pb-3">
          Customs, Duties, and Taxes (International Orders)
        </h3>
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          [Your Store Name] is not responsible for any customs fees, import
          duties, or taxes applied to your order. These charges are the
          responsibility of the customer.
        </p>
        <h3 className="text-[1.1em] pt-3 pb-3">Lost or Delayed Packages</h3>
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          We are not liable for packages lost or delayed due to incorrect
          shipping information provided by the customer, carrier issues, or
          unforeseen circumstances. If you experience issues, please contact us
          at [support email].
        </p>
        <h2 className="text-[1.1em] pb-5 pt-5 flex gap-2 items-center">
          <FontAwesomeIcon icon={faRotateLeft} className="text-sky-800" />
          Returns & Exchanges
        </h2>
        <h3 className="text-[1.1em] pt-3 pb-3">Lost or Delayed Packages</h3>
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          We accept returns and exchanges within 30 days of delivery. Items must
          be unused, in their original packaging, and in the same condition
          received.
        </p>
        <ul className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          <li>Non-returnable items include:</li>
          <li>Personal care items (e.g., cosmetics, hygiene products)</li>
          <li>Customized or personalized products</li>
        </ul>
        <h3 className="text-[1.1em] pt-3 pb-3">Return Process</h3>
        <ol className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          <li>
            Contact us at [support email] with your order number and reason for
            return.
          </li>
          <li>
            We will provide return instructions and a return shipping address.
          </li>
          <li>
            Once your return is received and inspected, we will notify you about
            approval or rejection of your refund.
          </li>
        </ol>
        <h3 className="text-[1.1em] pt-3 pb-3">Refunds</h3>
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          Approved refunds will be issued to your original payment method within{" "}
          5-10 business days. Shipping costs are non-refundable. If your order
          included free shipping, the actual shipping cost may be deducted from
          your refund.
        </p>
        <h3 className="text-[1.1em] pt-3 pb-3">Exchanges</h3>
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          We only replace items if they are defective, damaged, or incorrect.
          For exchanges, contact us at support email.
        </p>
        <h3 className="text-[1.1em] pt-3 pb-3">Return Shipping Costs</h3>
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          Customers are responsible for paying return shipping costs unless the
          item was defective or incorrect. We recommend using a trackable
          shipping service.
        </p>
        <h2 className="text-[1.1em] pb-5 pt-5 flex gap-2 items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-sky-800" />
          Contact us
        </h2>
        <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
          If you have any questions about our Shipping &amp; Returns Policy,
          don't hesitate to{" "}
          <Link to="/contact" className="text-sky-700 font-bold">
            contact us.
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
