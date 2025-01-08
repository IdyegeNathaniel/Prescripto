import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="h-96 text-center flex flex-col justify-center items-center pt-20">
      <FaExclamationTriangle className="text-primary text-6xl mb-4" />
      <h1 className="text-2xl mb-4 font-bold md:text-6xl">404 Not Found</h1>
      <p className="text-xl mb-5">This Page does not exist</p>
      <Link
        to="/"
        className="bg-primary hover:scale-105 transition-all duration-300 text-white py-2 px-4 mt-4 rounded-xl"
      >
        <FaArrowLeft className="inline mr-2" />
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
