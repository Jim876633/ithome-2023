import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routerConfig } from "./router";
import { ModalContextProvider } from "./context/ModalContext";
import { Modal } from "./components/Modal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter(routerConfig);
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <ModalContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Modal />
        </QueryClientProvider>
      </ModalContextProvider>
    </Provider>
  );
}

export default App;
