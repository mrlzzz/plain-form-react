import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DefaultContextProvider from "./context/DefaultContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <DefaultContextProvider>
            <App />
        </DefaultContextProvider>
    </React.StrictMode>
);
