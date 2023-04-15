import React, {useEffect, useState} from 'react';
import './assets/styles/App.css';
import {UserContext} from "./context";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/ui/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {StorageKeys} from "./context";

function App() {

    const [isUserLoading, setIsUserLoading] = useState(true)
    const [userName, setUserName] = useState<string | null>(null)

    useEffect(() => {
        let user = localStorage.getItem(StorageKeys.USER);
        setUserName(user);
        setIsUserLoading(false);
    }, [])


    return (
        <UserContext.Provider value={{isUserLoading, userName, setUserName}}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
