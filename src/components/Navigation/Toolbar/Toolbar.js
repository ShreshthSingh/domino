import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <div onClick={props.clicked}><font color="white">MENU</font> </div>
         < Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            
            
            
            < Navigationitems/>


        </nav>
    </header>
);

export default toolbar;