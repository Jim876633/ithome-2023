import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routerConfig } from "./router";
import { ModalContextProvider } from "./context/ModalContext";
import { Modal } from "./components/Modal";

const router = createBrowserRouter(routerConfig);

function App() {
  return (
    <ModalContextProvider>
      <>
        <RouterProvider router={router} />
        <Modal />
      </>
    </ModalContextProvider>
  );
}

export default App;
