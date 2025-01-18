import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MyAppointmentPage = () => {
  const { doctors } = useContext(AppContext);
  return (
    <section>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments</p>
      <div>
        {doctors.slice(0, 3).map((doctor, index) => (
          <div key={index} className="grid grid-cols-[1fr_3fr] gap-4 sm:flex sm:gap-6 py-2 border-b">
            <div>
              <img src={doctor.image} className="w-32 bg-indigo-50" alt="image" />
            </div>
            <div className="flex-1 text-zinc-600 text-sm">
              <p className="font-semibold text-neutral-800">{doctor.name}</p>
              <p>{doctor.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{doctor.address.line1}</p>
              <p className="text-xs">{doctor.address.line2}</p>
              <p className="text-xs mt-1"><span className="font-medium text-sm text-neutral-700">DATE & TIME:</span> 15, January, 2025</p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 rounded hover:bg-primary hover:text-white transition-all duration-300">Pay Online</button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 rounded hover:bg-red-600 hover:text-white transition-all duration-300">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyAppointmentPage;
