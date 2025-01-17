import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noFooterPath = ["/login"];

  const shouldShowFooter = !noFooterPath.includes(location.pathname);
  return (
    <>
      <Navbar />
      <Outlet />
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default MainLayout;
