export default function PromoBanner({ headingLevel: Heading }) {
  return (
    <div className="relative grid justify-items-center p-5 gap-3 bg-rose-800 text-neutral-100">
      <Heading> BACK TO WORK UP TO 85% OFF</Heading>
      <p className="text-neutral-400">On your everyday essentials</p>
      <a
        href="/currentSale"
        className="hover:cursor-pointer underline-offset-8 hover:underline"
      >
        SHOP NOW
      </a>
      <div className="absolute group inline-block bottom-5 right-5 border-1 pl-1.5 pr-1.5 text-[9px] justify-self-end">
        i{" "}
        <p className="absolute hidden group-hover:block right-1.5 top-5 w-50 text-wrap p-3 border-1 text-black bg-neutral-100">
          Online exclusive promotion. Discount applied to original product
          price. Valid until 31/12/2030
        </p>
      </div>
    </div>
  );
}
