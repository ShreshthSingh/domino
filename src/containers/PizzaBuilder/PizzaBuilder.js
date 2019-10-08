import React,{Component} from 'react';
import Aux from '../../hoc/Aux' ; 
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal' ;
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';



///264
/* const TOPPING_PRICE = {
  blackberry: 0.5,
  cheese:0.7,
  meat:1.3,
  tomato:0.2,
  onion:0.1
} */


class PizzaBuilder extends Component{
  state = {
    // Toppings:null
    // totalPrice:5
    /* purchasable: false, */
    purchasing : false
    ,loading: false
    ,error : false


  }

  componentDidMount (){
    console.log(this.props);
   /* axios.get('https://react-pizza-builder-86234.firebaseio.com/Toppings.json')
   .then(response =>{
   this.setState({Toppings: response.data});


   }).catch( error=>{this.setState({error: true});
  
  
  }); */
}


  updatePurchaseState (toppings){

   
    const sum = Object.keys( toppings )
    .map( igKey=> {
      return toppings[igKey];
    })
    .reduce( (sum,el)=>{
      return sum+el ;
    },0 );
    return sum > 0 ;
  }
  
  
  /* addToppingHandler = (type) =>{
   const oldCount = this.state.Toppings[type];
   const updatedCount = oldCount + 1;
   const updatedToppings = {
     ...this.state.Toppings 
   };
   updatedToppings[type] = updatedCount;
   const priceAddition = TOPPING_PRICE[type];
   const oldPrice = this.state.totalPrice;
   const newPrice = oldPrice + priceAddition;
   this.setState({totalPrice:newPrice,Toppings:updatedToppings})  
   this.updatePurchaseState(updatedToppings);
  } */

 /*  removeToppingHandler= (type) =>{
    const oldCount = this.state.Toppings[type];
    if (oldCount <=0){
      return ;

    }
    const updatedCount = oldCount - 1;
    const updatedToppings = {
      ...this.state.Toppings 
    };
    updatedToppings[type] = updatedCount;
    const priceDeduction = TOPPING_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice:newPrice,Toppings:updatedToppings})  
    this.updatePurchaseState(updatedToppings);
 
   
} */

purchaseHandler=()=>{
  this.setState({purchasing:true});


}
purchaseCancelHandler=()=>{
  this.setState({purchasing:false});


}
purchaseSuccessHandler=()=>{
  
 /* const queryParams = [];
 for (let i in this.state.Toppings){
   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.Toppings[i]));

 }

queryParams.push('price='+this.state.totalPrice);
const queryString = queryParams.join('&'); */

this.props.history.push({pathname:'/checkout'});



}


purchase
  render(){
    const disabledInfo = {
      //...this.state.Toppings
      ...this.props.tpngs
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null ;

let pizza = this.state.error ? <p>The toppings can't be fetched! 😥😥😥😥</p>:<Spinner/>;

//if (this.state.Toppings)
if (this.props.tpngs)
{
//pizza = (<><Pizza Toppings = {this.state.Toppings}/>
pizza = (<><Pizza Toppings = {this.props.tpngs}/>
<BuildControls 
//toppingsAdded={this.addToppingHandler} 
toppingsAdded={this.props.onToppingAdded}
toppingsRemoved={this.props.onToppingRemoved} 
//toppingsRemoved = {this.removeToppingHandler}
disabled = {disabledInfo}
purchasable = {this.updatePurchaseState(this.props.tpngs)}
price ={this.props.price} /* {this.state.totalPrice} */
ordered = {this.purchaseHandler}/></>);
//orderSummary =<OrderSummary toppings ={this.state.Toppings} purchaseCancel={this.purchaseCancelHandler} purchaseContinue={this.purchaseSuccessHandler} 
//    pricee={this.state.totalPrice}/>;
orderSummary =<OrderSummary toppings ={this.props.tpngs} purchaseCancel={this.purchaseCancelHandler} purchaseContinue={this.purchaseSuccessHandler} 
pricee={this.props.price} /* pricee={this.state.totalPrice} *//>;

    if (this.state.loading){
      orderSummary = <Spinner/>
    }
}


      return (
      <Aux>
        <Modal show = {this.state.purchasing} modalClosed ={this.purchaseCancelHandler}>
          {orderSummary}
          </Modal>

          {pizza}
         
         
         



      </Aux>



      );
    }
  }
  const mapStateToProps = state =>{
    return {
      tpngs: state.Toppings,
      price: state.totalPrice
    };
  }
  const mapDispatchToProps = dispatch =>{
    return{
      onToppingAdded: (tpngName) => dispatch({type:actionTypes.ADD_TOPPING, ToppingName:tpngName}),
      onToppingRemoved: (tpngName) => dispatch({type:actionTypes.REMOVE_TOPPING, ToppingName:tpngName})
    }
  } 
  export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PizzaBuilder,axios)) ;