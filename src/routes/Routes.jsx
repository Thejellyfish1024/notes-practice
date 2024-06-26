import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "./Practice/Home";
import { AuroraHero } from "./Practice/Framer/AuroraHero";
import Buttons from "../pages/Buttons";
import Home from "../pages/Home";
import Skills from "./Practice/Framer/Skills/Skills";
import Blogs from "../pages/Blogs";
import Products from "../pages/Products";

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
        {
            path:'/skills',
            element: <Skills></Skills>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        },
        {
            path:'/products',
            element: <Products></Products>
        },
      ]
    },
  ]);