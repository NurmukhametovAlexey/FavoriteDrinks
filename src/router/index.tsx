import Login from "../pages/Login";
import {Navigate} from "react-router-dom";
import {RouteObject} from "react-router/dist/lib/context";
import Drinks from "../pages/Drinks";
import FavoriteDrinks from "../pages/FavoriteDrinks";

export const publicRoutes: RouteObject[] = [
    {path: "/login", element: <Login/>},
    {path: "*", element: <Navigate to={"/login"}/>}
];

export const privateRoutes: RouteObject[] = [
    {path: "/drinks", element: <Drinks/>},
    {path: "/drinks/favorite", element: <FavoriteDrinks/>},
    {path: "*", element: <Navigate to={"/drinks"}/>}
];