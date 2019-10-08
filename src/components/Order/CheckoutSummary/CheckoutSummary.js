import React from 'react' ;
import Pizza from '../../Pizza/Pizza';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';
const checkoutSummary = (props) =>{
    return  (
        <div className = {classes.CheckoutSummary}>
            <h1>We Hope it Tastes Well !!</h1>
             <div style = {{width: '100%',margin: 'auto'}}>

<Pizza Toppings = {props.Toppings} />




             </div>



        <Button btnType = "Danger"
        clicked ={props.checkoutCancelled} >CANCEL</Button>
        <Button btnType = "Success"
        clicked = {props.checkoutContinued}>CONTINUE</Button>

        
        
        </div>
    )


}


export default checkoutSummary ;