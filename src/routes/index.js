import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Auth/Ligin";



// Dashboard
import Home from "../pages/Home/Home";

//Public 

import Profile from "../pages/Profile";


const authProtectedRoutes = [
  { path: "/home", component: Home },
  { path: "/profile", component: Profile },
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },

];

const publicRoutes = [
//   { path: "/logout", component: Logout },
  { path: "/login", component: Login },
//   { path: "/forgot-password", component: ForgetPwd },
//   { path: "/auth-lock-screen", component: AuthLockScreen },
];

export { authProtectedRoutes, publicRoutes };
