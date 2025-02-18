import { assets } from "../assets/assets";

const AboutPage = () => {
  return (
    <section>
      <div className="text-center text-2xl text-gray-500 pt-10">
        ABOUT <span className="text-gray-700 font-medium">US</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 my-10">
        <img
          src={assets.about_image}
          alt="image"
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-sm">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="flex flex-col gap-5 border border-gray-400 px-10 md:px-16 py-8 md:py-16 text-[15px] text-gray-600 hover:bg-primary transition-all duration-300 cursor-pointer hover:text-white">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>

        <div className="flex flex-col gap-5 border border-gray-400 px-10 md:px-16 py-8 md:py-16 text-[15px] text-gray-600 hover:bg-primary transition-all duration-300 cursor-pointer hover:text-white">
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of expert hair styling professionals in your
            area.
          </p>
        </div>

        <div className="flex flex-col gap-5 border border-gray-400 px-10 md:px-16 py-8 md:py-16 text-[15px] text-gray-600 hover:bg-primary transition-all duration-300 cursor-pointer hover:text-white">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your game.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
