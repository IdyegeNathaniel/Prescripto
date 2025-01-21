import heroImg from "../assets/header_img.png";
import groupHeroImg from "../assets/group_profiles.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="bg-primary flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto py-10 md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment
          <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center font-light text-white mt-5 gap-3 text-sm">
          <img src={groupHeroImg} alt="group-profile" className="w-28" />
          <p className="md:text-sm mb-5  gap-5">
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden md:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex justify-center items-center gap-4 px-8 py-3 bg-white text-black rounded-full font-light hover:scale-105 transition-all duration-300"
        >
          Book appointment
          <img src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2 relative">
        <img src={heroImg} alt="" className=" w-full md:absolute bottom-0 h-auto rounded-lg" />
      </div>
    </section>
  );
};

export default Hero;
