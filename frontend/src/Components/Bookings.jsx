import { Link } from "react-router-dom";
import { doctors } from "../assets/assets";

const Bookings = () => {
  return (
    <section className="flex flex-col gap-4 items-center md:mx-10 my-16 text-gray-800">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-sm font-light mb-5 text-center">
        Simply browse through our extensive list of trusted <br />
        doctors.
      </p>
      <div className="w-full grid sm:grid-cols-5">
        {doctors.slice(0, 10).map((doctor) => (
          <div key={doctor.id} className="">
            <img src={doctor.image} alt="images" className="bg-blue-50" />
            <div className="">
              <div className="flex items-center gap-1">
                <p className="w-2 h-2 bg-green-700 rounded-full"></p>
                <p className="text-green-500">Available</p>
              </div>
              <p className="font-semibold">{doctor.name}</p>
              <p className="font-light">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/"} className="bg-blue-100 py-4 px-12 rounded-full">
        more
      </Link>
    </section>
  );
};

export default Bookings;
