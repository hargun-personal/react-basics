import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent"
import Body from "./components/Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import Shimmer from "./components/Shimmer";
import Timer from "./components/Timer";

const Grocery  = lazy(() => import("./components/Grocery"))

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
            path: "about",
            element: <About/>
        },
        {
            path: "contact",
            element: <ContactUs/>
        },
        {
            path: "restraunt-menu/:restrauntId",
            element: <RestrauntMenu/>
        },
        {
            path: "timer",
            element: <Timer/>
        },
        {
            path: 'grocery',
            element: (
                <Suspense fallback={<Shimmer/>}>
                    <Grocery/> 
                </Suspense>
            )
        }
       ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
