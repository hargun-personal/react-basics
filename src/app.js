import React from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent"
import Body from "./components/Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";

const Applayout = () => {
    return (
        <div className="app">
            <HeaderComponent/>
            <Outlet/>
        </div>
    )
}

const appRouter  = createBrowserRouter([
    {
       path: "/",
       element: <Applayout/>,
       errorElement: <Error/>,
       children: [
        {
            path:'/',
            element: <Body/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <ContactUs/>
        }
       ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
