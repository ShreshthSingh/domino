import React,{Component} from 'react' ;
import classes from './PizzaToppings.module.css';
import PropTypes from 'prop-types'; 
class PizzaToppings extends Component {
    
   render(){
    let toppings = null;
    switch (this.props.type){
        
        
        
        
       
        case ('blackberry'):
        toppings = <div><font size= "5" color="black">⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫</font></div>
        break ;
        case ('onion'):
        toppings = <div><font size= "8" color="#ff00aa">ⓞⓞⓞⓞⓞⓞⓞ</font></div>
        break ;
        case ('tomato'):
        toppings = <div><font size= "5" color="red">🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅</font></div>
        break ;
        case ('meat'):
        toppings = <div><font size= "5" color="#b3003b">🍗 🥩 🍗 🥩 🍗 🥩 🍗</font></div>
        break ;
        case ('cheese'):
        toppings = <div className = {classes.Cheese}></div>
        break ;
        
        case ('base'):
        toppings = <div className = {classes.Base}></div>
        break ;
       
        
        default:
            toppings = null;}
    
    return toppings;
   

}
}


PizzaToppings.propTypes = {
    type: PropTypes.string.isRequired
}

export default PizzaToppings ;