import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Root from "./Root/Root";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Contact from "./components/Contact/Contact";
import AppliedJobs from "./Pages/AppliedJobs/AppliedJobs";
import AllJObs from "./Pages/AllJObs/AllJObs";
import Blogs from "./Pages/Blogs/Blogs";
import JobDetails from "./Pages/JobDetails/JobDetails";
import AddJobs from "./components/AddJobs/AddJobs";
import MyJobs from "./components/MyJobs/MyJobs";
import UpdateJob from "./components/UpdateJob/UpdateJob";
import About from "./Pages/About/About";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch('http://localhost:5000/jobs')
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
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/addJobs",
       element: <PrivateRoute>
        <AddJobs></AddJobs>
       </PrivateRoute>
       
      },
      {
        path: "/appliedJobs",
        element: <PrivateRoute>
          <AppliedJobs></AppliedJobs>,
        </PrivateRoute>,
        loader: () => fetch("http://localhost:5000/appliedJobs"),
      },
      {
        path: "/allJobs",
        element: <PrivateRoute>
          <AllJObs></AllJObs>,
        </PrivateRoute>,
        loader: () =>fetch('http://localhost:5000/jobs')
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/myJobs",
        element: <MyJobs></MyJobs>,
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/updateJob/:_id",
        element: <UpdateJob></UpdateJob>,
        loader: ({ params}) => fetch(`http://localhost:5000/jobs/${params._id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/jobdetails/:_id",
        element: <JobDetails></JobDetails>,
        loader : ({params}) => fetch (`http://localhost:5000/jobdetails/${params._id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
