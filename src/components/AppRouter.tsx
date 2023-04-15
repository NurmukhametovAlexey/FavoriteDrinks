import React, {useContext} from 'react';
import {UserContext} from "../context";
import {useRoutes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import Loader from "./ui/loader/Loader";

const AppRouter = () => {

    const {isUserLoading, userName} = useContext(UserContext);

    let routes = useRoutes(
        userName
            ? privateRoutes
            : publicRoutes
    );

    return isUserLoading ? <Loader/> : routes;
};

export default AppRouter;