import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
// import DataTables from "views/admin/tables";
import SignIn from "views/auth/SignIn";
import UserAdd from "views/admin/user/UserAdd";
import BookingForm from "views/admin/BookingForm/BookingForm";

// Icon Imports
import {
  MdHome,
  MdPerson,
  MdOutlineFlightTakeoff
} from "react-icons/md";
import { AiOutlineLogout } from 'react-icons/ai';
import SignOut from "views/auth/SignOut";

// const navigate = useNavigate();

const routes = [
  {
    name: "Dashboard",
    layout: "/user",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    display: "",
    component: <MainDashboard />,

  },


  {
    name: "Bookings",
    layout: "/user",
    path: "bookings",
    display: "",
    icon: <MdOutlineFlightTakeoff className="h-6 w-6" />,
    component: <BookingForm />,
  },
  {
    name: "Profile",
    layout: "/user",
    path: "profile",
    display: "",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Log In",
    layout: "/auth",
    path: "sign-in",
    display: "hidden",
    icon: <AiOutlineLogout className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Log Out",
    layout: "/auth",
    path: "sign-out",
    display: "",
    icon: <AiOutlineLogout className="h-6 w-6" />,
    component: <SignOut />,
  },
  {
    name: "add user",
    layout: "/admin",
    path: "users/add",
    display: "hidden",
    icon: "",
    component: <UserAdd/>,
  },
];
export default routes;
