import heroImg from "../assets/assets_frontend/header_img.png";
import groupHeroImg from "../assets/assets_frontend/group_profiles.png";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-primary text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center px-6 md:px-10">
        <div className="">
          <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
            Book Appointment
            <br />
            With Trusted Doctors
          </h3>
          <span className="flex mt-5">
            <img src={groupHeroImg} alt="group-profile" className="w-28" />
            <p className="md:text-sm  gap-5">
              Simply browse through our extensive list of trusted doctors,{" "}
              <br />
              schedule your appointment hassle-free.
            </p>
          </span>
          <button className="flex px-8 py-3 bg-white text-black rounded-full font-light">
            Book appointment
            <FaArrowRight />
          </button>
        </div>

        {/* RIGHT */}
        <div className="">
          <img
            src={heroImg}
            alt=""
            className="w-full  h-auto bottom-0 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
