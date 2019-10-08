import React from 'react';

import classes from './Navigationitems.module.css';
import Navigationitem from './Navigationitem/Navigationitem';


const navigationitems =()=>(
    <ul className={classes.Navigationitems}>
        
        
        
        
        <Navigationitem link="/" exact> Pizza Builder </Navigationitem>
        <Navigationitem link="/orders" exact> Orders </Navigationitem>    
        
       
        
    </ul>
);
export default navigationitems ;