import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "./Practice/Home";
import { AuroraHero } from "./Practice/Framer/AuroraHero";
import Buttons from "../pages/Buttons";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children :[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/buttons',
            element: <Buttons></Buttons>
        },
        {
            path:'/aurora',
            element: <AuroraHero></AuroraHero>
        },
      ]
    },
  ]);