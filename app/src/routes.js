import { createBrowserRouter } from "react-router-dom"
import About from "./pages/about_us"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Signin from "./pages/signin"
import Signup from "./pages/signup"

const router = createBrowserRouter([
    {
        path:'/',
        element: <Landing />
    },
    {
        path:'/signin',
        element: <Signin />
    },
    {
        path:'/signup',
        element: <Signup />
    },
    {
        path:'/about',
        element: <About />
    },
    {
        path:'/home',
        element: <Home />
    },

])

export default router