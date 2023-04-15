import React, {FormEvent, useContext, useRef} from 'react';
import {UserContext} from "../context";
import MyButton from "../components/ui/button/MyButton";
import MyInput from "../components/ui/input/MyInput";
import {StorageKeys} from "../context";

const Login = () => {

    const {setUserName} = useContext(UserContext);
    let name = useRef<HTMLInputElement>(null);

    const login = (event: FormEvent) => {
        event.preventDefault();
        let value = name.current?.value;
        if (!value) {
            alert("Name cannot be empty");
        }
        setUserName(value!)
        localStorage.setItem(StorageKeys.USER, value!)
    }

    return (
        <div>
            <h1>Enter your name</h1>
            <form onSubmit={login}>
                <MyInput type={"text"} placeholder={"Enter name"} ref={name} />
                <MyButton>Enter</MyButton>
            </form>
            </div>
    );
};

export default Login;