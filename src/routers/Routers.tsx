import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Product } from "../components/Body/components/Product/Product";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "products/:productId",
      element: <Product />,
    },
    
  ]);