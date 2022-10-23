import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "@fontsource/poppins"

function App() {
    return <RouterProvider router={router} />;
}

export default App;
