import React from "react";
import Borwse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Borwse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
