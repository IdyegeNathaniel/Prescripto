import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const Speciality = () => {
  return (
    <section
      id="speciality"
      className="flex flex-col gap-5 text-center items-center justify-center my-10"
    >
      <div className="py-8">
        <h1 className="text-3xl mb-5">Find by Speciality</h1>
        <p className="text-sm font-light mb-5">
          Simply browse through our extensive list of trusted doctors,
          <br /> schedule your appointment hassle-free.
        </p>
        <div className="flex text-sm my-3 gap-4">
          {specialityData.map((item, index) => (
            <Link
              key={index}
              to={`doctors/${item.speciality.replace("", "-").toLowerCase()}`}
              className="text-center items-center justify-center hover:-translate-y-4 duration-500"
            >
              <img src={item.image} alt="image" className="w-24 mb-2" />
              <p className="">{item.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speciality;
