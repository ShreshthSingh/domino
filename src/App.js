import React,{Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';


//gloria sol elena romanova


class App extends Component{
  state = {
    show:true
  };

 // componentDidMount(){
 //   setTimeout(()=>{
 //     this.setState({show:false});
 //   },5000);
    

//  }
  render()
  {  
    return (
      <div>
        <Layout>
        {/*this.state.show?<PizzaBuilder/>:null*/}

<Switch>
<Route path="/checkout" component={Checkout}/>   
<Route path="/orders" exact component={Orders} /> 
<Route path="/" exact component={PizzaBuilder} /> 
</Switch>   








 
        </Layout>
        <h4> © 🐒MonkeySoft</h4>


      </div>



    );



  }

  

}
export default App ;
