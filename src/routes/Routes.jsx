import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs/AboutUs";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes/ChefRecipes";
import Blog from "../pages/Blog/Blog/Blog";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import UserProfile from "../pages/UserProfile/UserProfile/UserProfile";
import NotFound404 from "../pages/NotFound404/NotFound404";
import Terms from "../pages/Terms/Terms";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <AboutUs />
            },
            {
                path: 'chefRecipes/:chefId',
                element: <ChefRecipes />,
                loader: ({ params }) => fetch(`http://localhost:5000/chefData/${params.chefId}`)
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'userProfile',
                element: <UserProfile />
            },
            {
                path: 'forgotPassword',
                element: <ForgotPassword />
            },
            {
                path: 'terms',
                element: <Terms />
            },
            {
                path: '*',
                element: <NotFound404 />
            }
        ]
    }
])

export default router;