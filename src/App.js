import React from 'react';
import './App.css';
// import blue from "./Images/blue.png"
// import green from "./Images/green.png"
// import red from "./Images/red.png"
import DisplayShirts from "./components/DisplayShirts";
import { useSelector } from "react-redux"


function App() {
  let products = []
  products = useSelector(state => state)
  const itemsInCart = products[3].itemsInCart
  
  
  return (
    <div>
      <h1>Shopping Basket</h1>
      <h2>You have {itemsInCart} items in Cart!</h2>

      <div className="App">
        <DisplayShirts />
      </div>




    </div>
  );
}

export default App;
