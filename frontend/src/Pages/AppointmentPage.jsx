import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/Appcontext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const AppointmentPage = () => {
  const [docInfo, setDocInfo] = useState(null);

  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);

    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

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
              <p className="text-gray-500 text-sm max-w-[700px] mt-1">{docInfo.about}</p>
            </div>
            <p>Appointment fee: <span>${docInfo.fees}</span></p>
          </div>
        </div>
      </section>
    )
  );
};

export default AppointmentPage;
