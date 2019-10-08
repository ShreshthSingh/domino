
import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { tsPropertySignature } from '@babel/types';


const sideDrawer =(props)=>{
    let attatchedClasses = [classes.SideDrawer,classes.Close];
    if (props.open){
        attatchedClasses = [classes.SideDrawer,classes.Open];
    }


    return (<>
      <Backdrop show={props.open} clicked={props.closed}/>
     <div className={attatchedClasses.join(' ')}>
         <Logo height="11%"/>
     <nav>
     <Navigationitems/>
     </nav>
      
     </div></>
    );

}
export default sideDrawer;