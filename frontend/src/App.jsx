import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" elements={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
