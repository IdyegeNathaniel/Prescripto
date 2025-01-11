import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const Speciality = () => {
  return (
    <section
      id="speciality"
      className="flex flex-col gap-5 text-center items-center  py-16"
    >
      <div className="">
        <h1 className="text-3xl mb-5 font-medium">Find by Speciality</h1>
        <p className="text-sm font-light mb-5 text-gray-800">
          Simply browse through our extensive list of trusted doctors,
          <br /> schedule your appointment hassle-free.
        </p>
        <div className="flex sm:justify-center w-full pt-5 gap-4 overflow-scroll">
          {specialityData.map((item, index) => (
            <Link
              key={index}
              onClick={() => scrollTo(0, 0)}
              to={`/all-doctors/${item.speciality}`}
              className="flex md:flex-col flex-shrink-0text-center text-xs items-center justify-center hover:-translate-y-[10px] transition-all duration-500"
            >
              <img src={item.image} alt="image" className="w-16 sm:w-24 mb-2" />
              <p>{item.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speciality;
