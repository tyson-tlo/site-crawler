import {
    createBrowserRouter,
  } from "react-router-dom";
import CrawlerDashboard from "../screens/Crawler/CrawlerDashboard/CrawlerDashboard";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Navigation from "../screens/Navigation/Navigation";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation content={<Home />} />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/crawler",
        element: <Navigation content={<CrawlerDashboard />} />
    }
  ]);

  export default router;