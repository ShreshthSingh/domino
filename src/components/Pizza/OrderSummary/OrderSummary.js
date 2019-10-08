import React,{Component} from 'react' ;
import Button from '../../UI/Button/Button';
class OrderSummary extends Component{
componentWillUpdate(){
       console.log('[OrderSummary] WillUpdate');
   }


   render(){
    const toppingSummary = Object.keys(this.props.toppings).map(igKey=>{
        return <li key = {igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:<strong>
             {this.props.toppings[igKey]}</strong></li>
    
  
    })

   return(
    <>
    <h3>Your Order</h3>
    <p>A delicous Pizza with following toppings:</p>
    <ul>
        {toppingSummary}
        <strong>Total Price:  {this.props.pricee}  </strong>    
    </ul>
    <p><strong>Wanna Checkout ?</strong></p>
    <Button btnType = "Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
    <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
    
    </>




   )

   }


} 

export default OrderSummary ;