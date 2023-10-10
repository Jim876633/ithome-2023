import { ApiPage } from "@/pages/ApiPage";
import { FormPage } from "@/pages/FormPage";
import { HomePage } from "@/pages/HomePage";
import { Home } from "@/pages/HomePage/Home";
import { ItemListPage } from "@/pages/ItemListPage";
import { ModalPage } from "@/pages/ModalPage";
import { TodoPage } from "@/pages/TodoPage";
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
      {
        path: "api",
        element: <ApiPage />,
      },
      {
        path: "todo",
        element: <TodoPage />,
      },
      {
        path: "itemList",
        element: <ItemListPage />,
      },
    ],
  },
];
