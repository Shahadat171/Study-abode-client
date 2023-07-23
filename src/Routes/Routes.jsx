import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
// import Admission from "../Pages/Admission/Admission"
// import AllColleges from "../Pages/Home/Allcolleges/AllColleges";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import CollageDetails from "../Pages/CollageDetails/CollageDetails";
import PrivateRoutes from "./PrivateRoutes";
import AllColleges from "../Pages/AllColleges/AllColleges";
import Admission from "../Pages/Admission/Admission";
import GetAdmitted from "../Pages/Admission/GetAdmitted";
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
        path: "/AllColleges",
        element: <AllColleges></AllColleges>
      },
      {
        path: "/admission",
        element: <Admission></Admission>
      },
      {
        path: "/getAdmitted",
        element: <GetAdmitted></GetAdmitted>
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
