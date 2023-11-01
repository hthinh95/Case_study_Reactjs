import { createBrowserRouter, } from "react-router-dom";
import ShoppingMall from "./Component/ShoppingMall";
import routes from "./routes";
import ProductDetail from "./Component/ProductDetail";
import Login from './Component/Login';

const router = createBrowserRouter([
  { path: routes.web.login, element: <Login /> },
  { path: `${routes.web.home}/:userId`, element: <ShoppingMall /> },
  { path: `${routes.web.detail}/:productId`, element: <ProductDetail /> },
]);
export default router;