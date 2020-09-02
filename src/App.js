import React from 'react';
import './App.css';
// import blue from "./Images/blue.png"
// import green from "./Images/green.png"
// import red from "./Images/red.png"
import DisplayShirts from "./components/DisplayShirts";
import Cart from './components/Cart';
import ShoppingContext from "./components/ShoppingContext"

function App() {

  let initialValues ={
    ItemsInCart: 0,
    AmountTotal: 0
}

  return (
    <ShoppingContext.Provider value={initialValues}>

      <div>
        <h1>Shopping Basket</h1>
        <Cart />
        <div className="App">
          <DisplayShirts />
        </div>
      </div>
    </ShoppingContext.Provider>

  );
}

export default App;
