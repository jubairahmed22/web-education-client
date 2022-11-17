import { createBrowserRouter } from "react-router-dom";
import Blog from "../blog/Blog";
import CheckOut from "../checkOut/CheckOut";
import CheckOutTwo from "../checkOutwo/CheckOutTwo";
import Courses from "../courses/Courses";
import Faqall from "../firebase/faqall/Faqall";
import Main from "../layout/Main";
import Login from "../login/Login";
import Register from "../login/Register/Register";


import NavTutorial from "../navTutorial/NavTutorial";


import Tutorial from "../tutorial/Tutorial";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/category/:id',
                element: <Courses></Courses>
            },
            {
                path: '/tutorial/:id',
                element: <Tutorial></Tutorial>,
                loader: ({ params }) => fetch(`https://web-education-server.vercel.app/category/${params.id}`)

            },
            {
                path: '/tutorial',
                element: <NavTutorial></NavTutorial>


            },

            {
                path: '/faq',
                element: <Faqall></Faqall>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://web-education-server.vercel.app/news/${params.id}`)
            },
           
        ]
        
    }
    
]) 