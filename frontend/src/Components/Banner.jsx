import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-primary flex px-6 sm:px-10 lg:px-12 md:px-14 my-20  md:mx-10rounded-xl">
      {/* LEFT */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 text-white">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="bg-white px-12 py-3 rounded-full mt-5 text-gray-600"
        >
          Create account
        </button>
      </div>
      <div className="hidden md:block relative md:w-1/2 lg:w-[370px]">
        <img
          className="w-full absolute right-0 bottom-0 max-w-md"
          src={assets.appointment_img}
          alt="image"
        />
      </div>
      {/* RIGHT */}
    </section>
  );
};

export default Banner;
