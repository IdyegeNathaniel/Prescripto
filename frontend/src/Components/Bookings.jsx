import { Link, useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets";

const Bookings = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-4 items-center md:mx-10 my-16 text-gray-900">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-sm font-light text-center sm:1/3">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 gap-y-6 px-3 pt-5 sm:px-6">
        {doctors.slice(0, 10).map((doctor) => (
          <div
            onClick={() => navigate(`/appointment/${doctor._id}`)}
            key={doctor.id}
            className="cursor-pointer border border-blue-200 rounded-xl hover:-translate-y-[10px] transition-all duration-300 overflow-hidden"
          >
            <img src={doctor.image} alt="images" className="bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center text-center text-sm gap-2 text-green-500">
                <p className="w-2 h-2 rounded-full bg-green-500"></p>
                <p>Available</p>
              </div>
              <p className="font-medium text-gray-900 text-lg">{doctor.name}</p>
              <p className="text-gray-600 text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/"} className="bg-blue-50 py-3 px-12 rounded-full mt-10">
        more
      </Link>
    </section>
  );
};

export default Bookings;
