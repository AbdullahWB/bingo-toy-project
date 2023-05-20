import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/Main";
import Home from "../../Home/Home/Home";
import SingUp from "../../Sing/SingUp/SingUp";
import Login from "../../Sing/LogIn/Login";
import AddToy from "../../Pages/AddToy.jsx/AddToy";
import MyToys from "../../Pages/MyToys/MyToys";
import AllToys from "../../Pages/AllToys/AllToys";
import Details from "../../Pages/Details/Details";
import Error from "../../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addToy',
                element: <AddToy></AddToy>
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: ()=> fetch('https://bingo-toy-server.vercel.app/totalProducts')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params})=> fetch(`https://bingo-toy-server.vercel.app/products/details/${params.id}`)
            }
        ]
    }
])

export default router;