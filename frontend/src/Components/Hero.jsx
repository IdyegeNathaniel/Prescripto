import heroImg from "../assets/header_img.png";
import groupHeroImg from "../assets/group_profiles.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-primary rounded-lg text-white grid grid-cols-1 md:grid-cols-2 justify-center items-center px-6 md:px-10 pt-6 md:pt-10">
      <div className=" flex flex-col items-start justify-center gap-4 m-auto">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment
          <br />
          With Trusted Doctors
        </h3>
        <div className="flex flex-col md:flex-row items-center font-light mt-5 gap-3 text-sm">
          <img src={groupHeroImg} alt="group-profile" className="w-28" />
          <p className="md:text-sm mb-5  gap-5">
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden md:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <Link
          to={"#speciality"}
          className="flex justify-center items-center gap-4 px-8 py-3 bg-white text-black rounded-full font-light hover:scale-105 transition-all duration-300"
        >
          Book appointment
          <FaLongArrowAltRight className="font-light w-3" />
        </Link>
      </div>

      {/* RIGHT */}
      <div className="">
        <img src={heroImg} alt="" className=" w-full rounded-lg" />
      </div>
    </section>
  );
};

export default Hero;
