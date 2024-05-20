import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { ROUTES } from "../lib/constant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/" + ROUTES.ACTIVE_SPRINT,
        element: <div>Active Sprints</div>,
      },
      {
        path: "/" + ROUTES.BACKLOGS,
        element: <div>Backlogs</div>,
      },
    ],
  },
]);

const RouteConfig = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RouteConfig;
