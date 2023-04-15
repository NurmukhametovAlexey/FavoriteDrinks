import React, {useEffect, useState} from 'react';
import {Drink} from "../types/drink";
import DrinkService from "../api/DrinkService";
import DrinksGrid from "../components/DrinksGrid";
import {useLocalStorageFavorites} from "../hooks/useLocalStorageFavorites";

const Drinks = () => {

    const [drinks, setDrinks] = useState<Drink[]>([]);
    const [favorites, setFavorites] = useLocalStorageFavorites();

    useEffect(() => {
        async function fetchDrinks() {
            const drinks = await DrinkService.getByName("margarita");
            setDrinks(drinks);
        }

        fetchDrinks().catch(console.error)
    }, []);

    return (
        <DrinksGrid
            drinks={drinks}
            favorites={favorites}
            setFavorites={setFavorites}
        />
    );
};

export default Drinks;