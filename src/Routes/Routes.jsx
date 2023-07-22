import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllColleges from "../Pages/Home/Allcolleges/AllColleges";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/colleges",
          element: <AllColleges></AllColleges>
        }
    ]
    },
  ]);

  export default router;