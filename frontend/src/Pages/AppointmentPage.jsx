import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/Appcontext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const AppointmentPage = () => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  const { doctors, currencySymbol } = useContext(AppContext);
  const { docSlots, setDocSlots } = useState([]);
  const { slotIndex, setSlotIndex } = useState(0);
  const { slotTime, setSlotTime } = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    //GET CURRENT DATE
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //GETTING DATE WITH INDEX
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //SETTING END TIME OF THE DATE WITH INDEX
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //SETTING HOURS
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // ADD SLOTS TO ARRAY
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        //INCREMENT CURRENT TIME BY 30 MINUTES
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <section>
        {/* DOCTOR DETAILS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              src={docInfo.image}
              alt=""
              className="bg-primary w-full sm:max-w-72 rounded-lg"
            />
          </div>

          {/* DOC INFO: NAME, DEGREE, EXPERIENCE */}
          <div className="flex-1 border border-gray-400 py-8 px-7 rounded-lg bg-white mx-2 sm:mx-0 sm:mt-0 mt-[-80px]">
            <p className="flex items-center gap-2 text-2xl font-medium">
              {docInfo.name}
              <img src={assets.verified_icon} alt="img" className="w-4" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="border border-primary text-xs py-0.5 px-2 rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* DOC ABOUT */}
            <div>
              <p className="flex items-center font-medium gap-1 text-sm text-gray-900 mt-3">
                About <img src={assets.info_icon} className="w-3" />
              </p>
              <p className="text-gray-500 text-sm max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* BOOKING SLOTS */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div key={index}>
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    )
  );
};

export default AppointmentPage;
