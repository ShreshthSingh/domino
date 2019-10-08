import React from 'react';
import BuildControl from './BuildControl/BuildControl' ;
import classes from './BuildControls.module.css';
const controls = [
  {label:'Meat',type:'meat'},
  {label:'Onion',type:'onion'},
     {label:'Blackberry',type:'blackberry'},
     
     {label:'Tomato',type:'tomato'}
     ,{label:'Cheese',type:'cheese'}
     
];




const buildControls = (props) =>(
    <div className={classes.BuildControls}>
      <p>CURRENT PRICE: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl=>(
      
      
      
      <BuildControl 
      
      key = {ctrl.label} 
      label={ctrl.label}
      added={()=>props.toppingsAdded(ctrl.type)}
      removed = {()=>props.toppingsRemoved(ctrl.type)}
      disabled={props.disabled[ctrl.type]} />
      //problem coming in this block!

      ))


      }
      <button disabled = {!props.purchasable} className={classes.OrderButton} onClick={props.ordered}>ORDER NOW</button>


    </div>
);

export default buildControls ;