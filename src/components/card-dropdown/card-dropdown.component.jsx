import React from "react";
import Button from "../button/button.component";
import'./card-dropdown.component.scss'
const CartDropDown = ({ onClose }) => {
  const items = [
    { id: 1, name: "Item 1", price: "$10" },
    { id: 2, name: "Item 2", price: "$15" },
    { id: 3, name: "Item 3", price: "$20" },
    { id: 4, name: "Item 4", price: "$25" },
  ]; // Przykładowe elementy koszyka

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      <Button buttonType='inverted'>Pay</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
