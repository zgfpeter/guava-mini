export default function NewsletterBanner() {
  return (
    <form>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="bg-neutral-100 px-3 py-2 text-stone-900"
      />
      <button
        aria-label="Submit"
        type="submit"
        className="bg-emerald-800 px-5 py-2 hover:bg-emerald-900"
      >
        SIGN UP
      </button>
    </form>
  );
}
