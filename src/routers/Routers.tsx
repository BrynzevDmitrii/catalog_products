import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Product } from "../components/Body/components/Product/Product";
import { Login } from "../components/Login/Login";
import Bascet from "../components/Body/components/Basket/Basket";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "products/:productId",
      element: <Product />,
    },
    {
      path: "logIn/singIn",
      element: <Login />
    },
    {
      path: "products/:productId/basket",
      element: <Bascet />,
      
    },
    {
      path: "basket",
      element: <Bascet />,
      
    },
  ]);