import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/Appcontext";

const DoctorPage = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  console.log(speciality);
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <section>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-6">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`${
            showFilter ? "bg-primary text-white" : ""
          } px-3 py-1 text-sm border rounded transition-all sm:hidden`}
        >
          Filter
        </button>
        <div
          className={`flex-col gap-2 text-gray-700 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((item, index) => (
            <p
              key={index}
              onClick={() =>
                speciality === `${item}`
                  ? navigate("/all-doctors")
                  : navigate(`/all-doctors/${item}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === `${item}` ? "bg-indigo-100 text-black" : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="w-full grid md:grid-cols-4 flex-col  gap-4 gap-y-6">
          {filterDoc.map((doctor, index) => (
            <div
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              key={index}
              className="cursor-pointer border border-blue-200 rounded-xl hover:-translate-y-[10px] transition-all duration-300 overflow-hidden"
            >
              <img src={doctor.image} alt="images" className="bg-blue-50" />
              <div className="p-4">
                <div className="flex items-center text-center text-sm gap-2 text-green-500">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p>
                  <p>Available</p>
                </div>
                <p className="font-medium text-gray-900 text-lg">
                  {doctor.name}
                </p>
                <p className="text-gray-600 text-sm">{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorPage;
