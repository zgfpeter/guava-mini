import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomButton from "../components/CustomButton";
export default function About() {
  return (
    <div className="min-h-screen flex flex-col gap-2">
      <Navbar />
      <h1 className="p-5 bg-amber-700 text-white font-bold w-full text-center font-[DM_Serif_Display]">
        ABOUT
      </h1>
      <main className="flex-grow min-h-100 p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore
        officia voluptate aut aperiam explicabo placeat magnam excepturi ut ad
        iste sed? Dolorem illum accusantium error inventore quo maiores
        laudantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Molestias laborum consectetur soluta culpa quos sint esse quam unde, eos
        ducimus?
      </main>
      <CustomButton text={"New Arrivals"} />
      <Footer className="" />
    </div>
  );
}
