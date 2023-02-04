import React from "react";
import ReactDOM from "react-dom/client";
import './App.scss';
import MainContainer from "./containers/MainContainer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TaskContainer from "./containers/TaskContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "",
        element: <TaskContainer />,

        
      }
     
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
