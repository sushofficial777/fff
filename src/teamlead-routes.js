import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import SignIn from "views/auth/SignIn";
import UserAdd from "views/admin/user/UserAdd";
import BookingForm from "views/admin/BookingForm/BookingForm";

// Icon Imports
import {
  MdHome,
  MdPerson,
  MdOutlineFlightTakeoff
} from "react-icons/md";
import { FaUserFriends } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import SignOut from "views/auth/SignOut";

// const navigate = useNavigate();

const routes = [
  {
    name: "Dashboard",
    layout: "/tl",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    display: "",
    component: <MainDashboard />,

  },

  {
    name: "Users",
    layout: "/tl",
    icon: <FaUserFriends className="h-6 w-6" />,
    path: "users",
    display: "",
    component: <DataTables />,
  },

  {
    name: "Bookings",
    layout: "/tl",
    path: "bookings",
    display: "",
    icon: <MdOutlineFlightTakeoff className="h-6 w-6" />,
    component: <BookingForm />,
  },
  {
    name: "Profile",
    layout: "/tl",
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
