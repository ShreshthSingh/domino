import *as actionTypes from './actions';
const initialState = {
    Toppings:{
        meat:0,
        onion:0,
        blackberry:0,
        tomato:0,
        cheese:0
    }
    ,totalPrice:5
};


const TOPPING_PRICE = {
    blackberry: 0.5,
    cheese:0.7,
    meat:1.3,
    tomato:0.2,
    onion:0.1
  }

const reducer = (state=initialState,action)=>{
    switch (action.type){
        case actionTypes.ADD_TOPPING:
            return{
                ...state,
                Toppings:{
                    ...state.Toppings,
                    [action.ToppingName]:state.Toppings[action.ToppingName]+1
                },
                totalPrice:state.totalPrice + TOPPING_PRICE[action.ToppingName] 
      
    };
    case actionTypes.REMOVE_TOPPING:
            return{
                ...state,
                Toppings:{
                    ...state.Toppings,
                    [action.ToppingName]:state.Toppings[action.ToppingName]-1
                },
                totalPrice:state.totalPrice - TOPPING_PRICE[action.ToppingName]
      
    };
    default:
        return state;

    }
   
}
  
export default reducer;