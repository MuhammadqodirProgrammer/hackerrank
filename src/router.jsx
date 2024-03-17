import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/HomePage/HomePage";

import { Error404 } from "./pages/Error404/Error404";

import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Product from "./pages/Product/Product";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                index:true,
                path:'/',
                element:<HomePage />,
            },
      
            {
                path:'/*',
                errorElement:<h2>ERROR!!!</h2>,
                element:<Error404 />,
            },
            {
                path:'/product',
                element:<Product />,
                errorElement:<h2>ERROR!!!</h2>,

            },
            {
                path:'/product/:id',
                element:<SingleProduct />,
                errorElement:<h2>ERROR!!!</h2>,
            },
        ]
    }
])