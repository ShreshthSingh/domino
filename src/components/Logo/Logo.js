import React from 'react';
import pizza from '../../assets/images/pizza.png' ;
import classes from './Logo.module.css';
const logo = (props) =>(
    <div className={classes.Logo} style={{height: props.height}}  >
        <img src={pizza} alt="MyPizza"/>
    </div>
)

export default logo;
