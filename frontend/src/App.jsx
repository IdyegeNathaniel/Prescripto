import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import DoctorPage from "./Pages/DoctorPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import MyAppointmentPage from "./Pages/MyAppointmentPage";
import MyProfilePage from "./Pages/MyProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";
import AppointmentPage from "./Pages/AppointmentPage";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/all-doctors" element={<DoctorPage />} />
        <Route path="/all-doctors/:speciality" element={<DoctorPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/my-appointment" element={<MyAppointmentPage />} />
        <Route path="/appointment/:docId" element={<AppointmentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
