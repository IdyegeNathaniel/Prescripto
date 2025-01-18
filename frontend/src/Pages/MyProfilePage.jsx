import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "testuser@gmail.com",
    phone: "+234 000 00000",
    address: {
      line1: "1510 dove drive",
      line2: "circle church road SC",
    },
    gender: "Male",
    dob: "2000-01-10",
  });

  const [isEdit, setIsEdit] = useState(true);
  return (
    <section className="max-w-lg flex flex-col text-sm gap-2">
      <img src={userData.image} alt="image" className="w-36 rounded" />
      {isEdit ? (
        <input
          type="text"
          name="name"
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="text-3xl font-medium text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="h-[1px] bg-zinc-400 border-none" />
      <div>
        <p className="text-neutral-500 mt-3 underline">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] mt-3 gap-y-2.5 text text-neutral-700">
          <p className="font-medium">Email ID:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              className="bg-gray-50 max-w-52 text-gray-100"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                type="text"
                className="bg-gray-50"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <br />
              <input
                type="text"
                className="bg-gray-50"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div className="">
        <p className="text-neutral-500 mt-3 underline">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birth Day:</p>
          {isEdit ? (
            <input
              type="date"
              className="max-w-25 bg-gray-100"
              name="dob"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="border border-primary py-2 px-8 rounded-full"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-primary py-2 px-8 rounded-full hover:bg-primary hover:text-white transition-all duration-500"
          >
            Edit
          </button>
        )}
      </div>
    </section>
  );
};

export default MyProfilePage;
