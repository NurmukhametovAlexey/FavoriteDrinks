import {useState, useEffect, Dispatch, SetStateAction, useContext} from 'react';
import {Drink} from "../types/drink";
import {UserContext} from "../context";

export type UserFavoriteDrinks = Map<string, Drink[]>

function getStorageValue<V>(key: string, defaultValue: V): V {
    // getting stored value
    const saved = localStorage.getItem(key);
    if (saved) {
        return JSON.parse(saved) as V;
    }
    return defaultValue
}

export function useLocalStorageFavorites(): [Drink[], Dispatch<SetStateAction<Drink[]>>] {
    const {userName} = useContext(UserContext);

    const [drinks, setDrinks] = useState<Drink[]>(() => {
        return getStorageValue(userName!!, []);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(userName!!, JSON.stringify(drinks));
    }, [userName, drinks]);

    return [drinks, setDrinks];
}