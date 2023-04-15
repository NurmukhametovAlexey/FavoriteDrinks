import {createContext, Dispatch, SetStateAction} from "react";

export enum StorageKeys {
    USER = "user",
}

export interface UserInfo {
    isUserLoading: boolean,
    userName: string | null,
    setUserName: Dispatch<SetStateAction<string | null>>
}

export const UserContext = createContext<UserInfo>(
    {isUserLoading: true, userName: null, setUserName: (s)=>console.log(s)}
);