import React from 'react';
import classes from './Order.module.css';

const order = (props) =>{
   const Toppings = [];
   for (let ToppingsName in props.Toppings){
       Toppings.push(
          { name:ToppingsName
        ,
        amount: props.Toppings[ToppingsName]
          }
          
          );
   }

   const ToppingsOutput = Toppings.map(tp =>{
       return <span style={{textTransform:'capitalize',
    display: 'inline-block',
    margin: '0 8px',
    border:'1px solid #ccc',
    padding:'5px'}} key={tp.name}>{tp.name} ({tp.amount}) </span>;
   });

   return (<div className={classes.Order}>
    <p>Toppings: {ToppingsOutput}</p>
    <p>Price <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>



   </div>)   ;


}
 


export default order;
