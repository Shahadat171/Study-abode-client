import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
// import AllColleges from "../Pages/Home/Allcolleges/AllColleges";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import CollageDetails from "../Pages/CollageDetails/CollageDetails";
import PrivateRoutes from "./PrivateRoutes";
import AllColleges from "../Pages/AllColleges/AllColleges";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <AllColleges></AllColleges>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <CollageDetails></CollageDetails>
          </PrivateRoutes>
        ),
        loader : ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      },
    ],
  },
]);

export default router;
