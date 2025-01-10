import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/Appcontext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const { filterDoc, setFilterDoc } = useState([]);

  //   useEffect(() => {
  //     setFilterDoc();

  //     return () => {
  //       second;
  //     };
  //   }, [third]);

  return (
    <section>
      <p>Browse through the doctors specialist.</p>
      <div className="grid grid-cols-70/30">
        <aside>
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </aside>
        <main>
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
        </main>
      </div>
    </section>
  );
};

export default Doctors;
