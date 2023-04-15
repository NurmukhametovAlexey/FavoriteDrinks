import React, {useContext} from 'react';
import {UserContext} from "../../../context";
import classes from "./Navbar.module.css";
import MyButton from "../button/MyButton";
import {Link} from "react-router-dom";
import {StorageKeys} from "../../../context";

const Navbar = () => {

    const {userName, setUserName} = useContext(UserContext)

    const logout = () => {
        setUserName(null);
        localStorage.removeItem(StorageKeys.USER);
    }

    return (
        <div className={classes.navbar}>
            {userName &&
                <div className={classes.navbar_links_left}>
                    <MyButton onClick={logout}> Logout </MyButton>
                    <span style={{marginLeft: 10}}>Logged in as: <strong>{userName}</strong></span>
                </div>

            }
            <div className={classes.navbar_links_right}>
                <Link to={"/drinks"}>Drinks</Link>
                <Link to={"/drinks/favorite"}>Favorite drinks</Link>
            </div>
        </div>
    );
};

export default Navbar;