import React from 'react';
import classes from "./Card.module.css"

interface Props {
    title: string,
    img: string,
    description: string,
    isSelected: boolean,
    [key: string]: any
}

const Card: React.FC<Props> = ({title, img, description, isSelected, ...props}) => {

    const rootClasses = [classes.card]
    if (isSelected) {
        rootClasses.push(classes.selected)
    }

    return (
        <div {...props} className={rootClasses.join(" ")}>
            <h2 className={classes.card_title}>{title}</h2>
            <img className={classes.card_image} src={img} alt={`Thumbnail for ${title}`}/>
            <div className={classes.card_description}>{description}</div>
        </div>
    );
};

export default Card;