import React from 'react';
import DrinksGrid from "../components/DrinksGrid";
import {useLocalStorageFavorites} from "../hooks/useLocalStorageFavorites";

const FavoriteDrinks = () => {
    const [favorites, setFavorites] = useLocalStorageFavorites();
    return (
        <DrinksGrid
            drinks={favorites}
            favorites={favorites}
            setFavorites={setFavorites}
        />
    );
};

export default FavoriteDrinks;