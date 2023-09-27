import { FormPage } from "@/pages/FormPage";
import { HomePage } from "@/pages/HomePage";
import { Home } from "@/pages/HomePage/Home";
import { ModalPage } from "@/pages/ModalPage";
import { Navigate } from "react-router-dom";

export const routerConfig = [
  {
    path: "/",
    element: <Navigate to='/home' />,
  },
  {
    path: "home",
    element: <HomePage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "form",
        element: <FormPage />,
      },
      {
        path: "modal",
        element: <ModalPage />,
      },
    ],
  },
];
