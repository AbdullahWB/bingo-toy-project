import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/Main";
import Home from "../../Home/Home/Home";
import SingUp from "../../Sing/SingUp/SingUp";
import Login from "../../Sing/LogIn/Login";
import AddToy from "../../Pages/AddToy.jsx/AddToy";
import MyToys from "../../Pages/MyToys/MyToys";
import AllToys from "../../Pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <AllToys></AllToys>
            }
        ]
    }
])

export default router;