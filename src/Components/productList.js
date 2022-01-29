import React from "react";
import "./productList.css";
// Be sure to uncomment this line before trying to use the Product component!
import Product from "./product";

function ProductList(props) {
  return (
    <div className="ProductList">
      <Product name={props.products[0].name} />
      <Product name={props.products[1].name} />
      <Product name={props.products[2].name} />
      <Product name={props.products[3].name} />
      <Product name={props.products[4].name} />
    </div>
  );
}

export default ProductList;
