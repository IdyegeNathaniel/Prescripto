import React from "react";
import { assets } from "../assets/assets";



const Footer = () => {
  return (
    <section className="md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-16 mt-40 my-10">
        {/* LEFT */}
        <div className="flex flex-col">
          <img src={assets.logo} alt="image" className="w-40 mb-5" />
          <p className="w-full md:w-2/3 text-sm text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* MIDDLE */}
        <div className="">
          <h1 className="font-medium text-xl mb-5">COMPANY</h1>
          <ul className="flex flex-col gap-2 text-sm text-gray-600 ">
            {["Home", "About Us", "Delivery", "Privacy Policy"].map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
        {/* RIGHT */}
        <div className="">
          <h1 className="font-medium text-xl mb-5">GET IN TOUCH</h1>
          <ul className="flex flex-col gap-2 text-sm text-gray-600 ">
            <li>+000-0000-000</li>
            <li>testuser@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <h4 className="py-5 text-center text-sm">
          Copyright 2024 - All Right Reserved.
        </h4>
      </div>
    </section>
  );
};

export default Footer;
