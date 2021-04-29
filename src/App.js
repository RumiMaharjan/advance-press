import React, {useEffect} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {auth} from "./firebase";
import {useStateValue} from "./context/StateProvider";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IDR6YFu1Wy0UpAgVoxNEGzqWMgDOGwyD6B354KNgh8iiH34OCerfKMcbnBti7DjvpP5C80l7rfiEkRdlp6MI0YQ00YBwI62b3');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("The user is >>", authUser);

      if(authUser){
        //the user just logged in / the user was logged in 

        dispatch({
          type: 'SET_USER',
          user: authUser

        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })


  }, [])
  return (
    <Router>
    <div className="app">
   

    <Switch>
    <Route path="/orders">
    <Header/>
   <Orders/>
    </Route>

    <Route path="/login">
   <Login/>
    </Route>

    <Route path="/checkout">
    <Header/>
    <Checkout/>
    </Route>

    <Route path="/payment">
    <Header/>
    <Elements stripe={promise}>
    <Payment/>
    </Elements>
   
    </Route>

    <Route path="/">
    <Header/>
    <Home/>
    </Route>
   
   
    </Switch>
   
  </div>
    </Router>
   
  );
}

export default App;
