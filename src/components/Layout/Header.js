import React from "react";

import pizzaImage from "../../assets/pizza.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Hunger Knockouts</h1>
                <HeaderCartButton onClick={props.onCartClicked}/>
            </header>
            <div className={classes['main-image']}>
                <img src={pizzaImage} alt="A freshly baked pizza!"/>
            </div>
        </React.Fragment>
    )
};

export default Header;