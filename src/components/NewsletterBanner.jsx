export default function NewsletterBanner() {
  return (
    <form>
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-neutral-100 px-2 py-1 text-stone-900"
      />
      <button
        type="submit"
        className="bg-emerald-800 px-5 py-1 hover:bg-emerald-900"
      >
        SIGN UP
      </button>
    </form>
  );
}
