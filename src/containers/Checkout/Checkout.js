import React,{Component} from 'react';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';  


class Checkout extends Component{
   /* state= {
      Toppings:null,
      price:0
         
} */

/* componentWillMount(){
    const query = new URLSearchParams(this.props.location.search);
   const Toppings = {};
   let price= 0 ;

   for (let param of query.entries()){

      if (param[0]==='price'){
         price = param[1];
      }else{

         Toppings[param[0]] = +param[1];

      }
      

   }
//arr.entries = ...is like [onion,2],[cheese,1]...]   
    
this.setState({Toppings: Toppings,totalPrice : price});
} */

checkoutCancelledHandler=()=>{

 this.props.history.goBack();

}
checkoutContinuedHandler=()=>{

this.props.history.replace('/checkout/contact-data');

}

   render(){
    return (
  <div>
     <CheckoutSummary Toppings = {this.props.tpngs}/* {this.state.Toppings} */
     checkoutCancelled={this.checkoutCancelledHandler}
     checkoutContinued={this.checkoutContinuedHandler}
     />
     <Route path={this.props.match.path +'/contact-data'} 
     component={ContactData}
     
    /* render={(props)=>(<ContactData Toppings={this.props.tpngs} price={this.props.price} {...props} */ /> />
    
  </div>

    );    

   }
   }
const mapStateToProps = state =>{
  return {
     tpngs: state.Toppings,
     price: state.totalPrice
  }
};  


export default connect(mapStateToProps)(Checkout);




