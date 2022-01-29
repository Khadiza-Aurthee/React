import React, { Component } from "react";
import "./App.css";
import ProductList from "./Components/productList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      total: 0
    };
  }
  products = [
    { name: "BlackPink Cookies", price: 4.99 },
    { name: "Chocolate Strawberry Crossiants", price: 1.99 },
    { name: "Latte Art Expresso", price: 3.99 },
    { name: "Strawberry Maccaroons", price: 4.99 },
    { name: "Rosehip Tea", price: 2.99 }
  ];
  addToShoppingCart = (item) => {
    this.setState((state) => {
      state.cart.push(item);
      return state;
    });
    console.log(this.state.cart);
  };

  removeFromShoppingCart = (item) => {
    const cart = this.state.cart;
    let index = cart.indexOf(item);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    this.setState((state) => {
      return state;
    });
  };

  render() {
    return (
      <div className="App">
        <h1>BlackPink Cafe</h1>
        <ProductList
          products={this.products}
          addToShoppingCart={this.addToShoppingCart}
          removeFromShoppingCart={this.removeFromShoppingCart}
        />
      </div>
    );
  }
}

export default App;
