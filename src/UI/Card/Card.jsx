import React from 'react';
import classes from './Card.module.scss';

function Card(props) {
    const handleClick = (id) => {
        props.onClick(id);
    };
    return (
        <div className={classes.card} id={props.id} onClick={handleClick.bind(null, props.id)} >
            <div className={classes['card--img']} style={{ backgroundImage: `url(${props.image[0]})` }}>
            </div>
            <div className={classes['card--body']}>
                <h3>
                    {props.name}
                </h3>
            </div>
        </div>
    );
}

export default Card;