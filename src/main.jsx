import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Dashboard from "./Componets/Dashboard";
import Rooot from "./Componets/Rooot";
import Login from "./Login";
import Facilities from "./Componets/Facilities";
import Schedule from "./Componets/Schedule";
import Users from "./Users";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Rooot></Rooot>,
    children : [     
      
      {
        path : "/",
      element : <Dashboard></Dashboard>,
      },
      {
        path : "/login",
        element : <Login></Login>,
      },
      {
        path : "/Facilities",
        element : <Facilities></Facilities>,
      },
      {
        path : "/Schedule",
        element : <Schedule></Schedule>
      },
      {
        path : "Users",
        element : <Users></Users>
      },
    
    
    
    ]
}
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);