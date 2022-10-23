import { createBrowserRouter } from "react-router-dom"
import About from "./pages/about_us"
import Feed from "./pages/Feed"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import FeedDiscussion from "./pages/FeedDiscussion"

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
    {
        path:'/feed',
        element: <Feed />
    },
    {
        path:'discussion/:id',
        element: <FeedDiscussion />
    }

])

export default router