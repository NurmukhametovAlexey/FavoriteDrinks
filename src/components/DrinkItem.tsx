import React from 'react';
import {Drink} from "../types/drink";
import "../assets/styles/DrinkItem.css";
import Card from "./ui/card/Card";

interface Props {
    drink: Drink,
    favorite: boolean,
    [key: string]: any
}

const DrinkItem: React.FC<Props> = ({drink, favorite, ...props}) => {
    return (
        <Card
            {...props}
            title={drink.strDrink}
            img={drink.strDrinkThumb}
            description={drink.strInstructions}
            isSelected={favorite}/>
    );
};

export default DrinkItem;