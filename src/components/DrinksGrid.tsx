import React, {Dispatch, SetStateAction} from 'react';
import DrinkItem from "./DrinkItem";
import {Drink} from "../types/drink";

interface Props {
    drinks: Drink[],
    favorites: Drink[],
    setFavorites: Dispatch<SetStateAction<Drink[]>>
}

const DrinksGrid: React.FC<Props> = ({drinks, favorites, setFavorites}) => {

    const removeFavorite = (drink: Drink) => {
        setFavorites(favorites.filter(d => d.idDrink !== drink.idDrink));
    }

    const addFavorite = (drink: Drink) => {
        setFavorites([...favorites, drink]);
    }

    const isFavorite = (drink: Drink) => {
        return favorites.map(d => d.idDrink).includes(drink.idDrink)
    }

    return (
        <div>
            <h1 className={"app_header"}>Drinks</h1>
            <div className="drinks_grid">
                {drinks.map((drink) =>
                    <DrinkItem
                        key={drink.idDrink}
                        drink={drink}
                        favorite={isFavorite(drink)}
                        onClick={() => isFavorite(drink) ? removeFavorite(drink) : addFavorite(drink)}
                    />
                )}
            </div>
        </div>
    );
};

export default DrinksGrid;