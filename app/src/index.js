import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ContextProvider from "./context/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <ContextProvider>
                <App />
            </ContextProvider>
        </ChakraProvider>
    </React.StrictMode>
);

reportWebVitals();
