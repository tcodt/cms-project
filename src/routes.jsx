import Home from "./pages/Home/Home";
import UsersList from "./pages/Users/UsersList";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Settings from "./pages/Settings/Settings";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
  { path: "/settings", element: <Settings /> },
];

export default routes;
