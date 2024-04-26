import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "./Practice/Home";
import { AuroraHero } from "./Practice/Framer/AuroraHero";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children :[
        {
            path:'/',
            // element: <Home></Home>
            element: <AuroraHero></AuroraHero>
        }
      ]
    },
  ]);