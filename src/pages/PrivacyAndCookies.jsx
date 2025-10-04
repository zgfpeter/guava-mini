//ok
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function PrivacyAndCookies() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main className="">
        <h1 className="p-5 bg-amber-700 text-white font-bold w-full text-center font-[DM_Serif_Display]">
          PRIVACY & COOKIES
        </h1>
        <main id="privacy-policy" className="p-6 bg-stone-100">
          <h2 className="mb-2">
            <strong>Effective Date:</strong> 2025
          </h2>
          <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
            We value your privacy. This policy explains how we collect, use, and
            protect your personal information when you use our website.
          </p>

          <h3 className="mt-4 text-xl font-semibold">Information We Collect</h3>
          <ul className="list-disc list-inside">
            <li className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
              Personal details such as your name, email, address, and payment
              information when you make a purchase.
            </li>
            <li className="text-[0.9em] bg-stone-100 pl-5 pb-5 pr-5 text-stone-600">
              Non-personal information like browser type, device, and pages
              visited.
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold">
            How We Use Your Information
          </h3>
          <ul className="list-disc list-inside">
            <li className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
              To process and fulfill your orders.
            </li>
            <li className="text-[0.9em] bg-stone-100 pl-5 pb-5 pr-5 text-stone-600">
              To communicate with you about your orders or promotions (if you
              opted in).
            </li>
            <li className="text-[0.9em] bg-stone-100 pl-5 pb-5 pr-5 text-stone-600">
              To improve our website and services.
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold">Cookies</h3>
          <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
            Our website uses cookies to enhance your browsing experience and
            remember your preferences. You can disable cookies in your browser
            settings, but some features may not work correctly.
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            Sharing Your Information
          </h3>
          <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
            We do not sell or rent your personal information to third parties.
            We may share data with trusted service providers to help run our
            website and process payments.
          </p>

          <h3 className="mt-4 text-xl font-semibold">Security</h3>
          <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
            We implement reasonable security measures to protect your personal
            information.
          </p>

          <h3 className="mt-4 text-xl font-semibold">Your Rights</h3>
          <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
            You can request access to, correction, or deletion of your personal
            information at any time by contacting us.
          </p>

          <h3 className="mt-4 text-xl font-semibold">Changes to This Policy</h3>
          <p className="text-[0.9em] bg-stone-100 p-5 text-stone-600">
            We may update this policy from time to time. Changes will be posted
            on this page. If you have any questions about this policy, please
            contact us.
          </p>
        </main>
      </main>
      <Footer />
    </div>
  );
}
