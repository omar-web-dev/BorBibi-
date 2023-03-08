import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AboutUs from "../Pages/StaticePages/AboutUs";
import Blogs from "../Pages/StaticePages/Blogs";
import Home from "../Pages/StaticePages/Home";
import Search from "../Pages/StaticePages/Search";
import Service from "../Pages/StaticePages/Service";
import SingIn from "../Pages/StaticePages/SingIn";
import SingUp from "../Pages/StaticePages/SingUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "sing-in",
                element: <SingIn />
            },
            {
                path: "sing-up",
                element: <SingUp />
            },
            {
                path: "service",
                element: <Service />
            },
            {
                path: "about-us",
                element: <AboutUs />
            },
            {
                path: "blogs",
                element: <Blogs />
            },
            {
                path: "search",
                element: <Search />
            }

        ]
    }
])