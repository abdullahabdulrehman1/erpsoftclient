import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { store } from "./redux/store/store.js";
import App from "./App";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <SidebarProvider>
        <App />
        <ToastContainer />
      </SidebarProvider>
    </Provider>
  </StrictMode>
);
