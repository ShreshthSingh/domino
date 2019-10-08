import React from 'react' ;
import classes from './Pizza.module.css' ;
import PizzaToppings from './PizzaToppings/PizzaToppings';
const pizza = (props) => {
    let transformedToppings = Object.keys(props.Toppings)
    .map(igKey=>{

        return [...Array(props.Toppings[igKey])].map((_,i)=>
        <PizzaToppings key={igKey + i} type = {igKey} />)
    }).reduce((arr,el)=>{

        return arr.concat(el)
    },[]);


    if (transformedToppings.length === 0) {
        transformedToppings=<p> Please Add Some Toppings</p>

    }






    return (

        <div className ={classes.Pizza} >
           
            {transformedToppings}
            <PizzaToppings type = "base"/>
           
        </div>
    );
}
export default pizza ;