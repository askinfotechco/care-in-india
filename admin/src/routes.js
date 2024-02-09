import { Navigate, useRoutes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// layouts
import DashboardLayout from "./layouts/dashboard";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import DashboardAppPage from "./pages/DashboardAppPage";
import DoctorDetailsPage from "./pages/DoctorDetailsPage";

// ----------------------------------------------------------------------

export default function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("jwt"));
  const navigate = useNavigate();
  const isAdmin = sessionStorage.getItem("role") === "admin";
  const isExaminer = sessionStorage.getItem("role") === "examiner";

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Clear the JWT from session storage
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  };

  // console.log(sessionStorage.getItem("role"));
  const routes = useRoutes([
    {
      path: "/",
      element: <LoginPage onLogin={handleLogin} />,
      children: [{ element: <Navigate to="/" />, index: true }],
    },
    {
      path: "/dashboard",
      element: isLoggedIn ? (
        <DashboardLayout onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      ),
      children: [
        { element: <Navigate to={"/dashboard/app"} />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "user", element: isAdmin ? <UserPage /> : <Page404 /> },
        {
          path: "doctordetails",
          element: isAdmin || isExaminer ? <DoctorDetailsPage /> : <Page404 />,
        },
      ],
    },
  ]);

  return routes;
}
