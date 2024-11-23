import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

import "./Cart.css";
import cartItemData from "./data.json";
import Popup from "./DiliveryAddressPopup";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setCartItems(cartItemData);
  },[]);

  useEffect(() => { 
    
    const cartDataToSave = cartItems.map((item) => ({
      id: item.id,
      price: item.price,
      totalPrice: item.price * item.quantity,
      quantity: item.quantity,

      
    }));
    
    localStorage.setItem("cartData", JSON.stringify(cartDataToSave));
  },[cartItems]); 

 

  

  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    const savedCartData = localStorage.getItem("cartData");
    if (savedCartData) {
      setLocalStorageData(JSON.parse(savedCartData));
    }
  }, []);

  console.log(localStorageData)

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <div>
      <div className="yourCart">Your Cart</div>
      <div className="cartContainer">
        <div className="cartSection">
          <div className="cartHeader">
            <div className="product">
            <div>Product</div>
            </div>
           <div className="headerdetails">
           <div style={{display:'flex', justifyContent:'center', width:"25%"}}>Price</div>
            <div style={{display:'flex', justifyContent:'center', width:"25%"}}>Quantity</div>
            <div style={{display:'flex', justifyContent:'center', width:"25%"}}>Total</div>
            <div style={{display:'flex', justifyContent:'center', width:"25%"}}>Remove</div>
           </div>
         
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>

        <div className="summarySection">
          <span className="orderSummary">ORDER SUMMARY</span>
          <div className="summaryDetails">
            <div>
              <div className="total">
              Total
              </div>
              <div className="totalAmount">
                <span>Rs. {calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="textAndButtons">
            <div className="text">
              Tax included and shipping calculated at checkout
            </div>
            <button className="checkoutButton" onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
            <button className="continueShoppingButton">
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
      
     
      <Popup show={isPopupOpen} onClose={closePopup}>  
      <div className="checkoutHeading">Checkout</div>
  <p>Your total is Rs. {calculateTotal().toFixed(2)}</p>
  <div style={{ marginTop: "20px" }}>
    <label htmlFor="deliveryAddress" style={{ display: "block", marginBottom: "8px" }}>
      Delivery Address:
    </label>
    <textarea
      id="deliveryAddress"
      rows="4"
      cols="40"
      placeholder="Enter your delivery address"
      style={{
        width: "80%",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #F0E3D5",
      }}
    />
  </div>
  <button
    onClick={closePopup}
    style={{
      padding: "10px",
      marginTop: "20px",
      backgroundColor: "#F0E3D5",
      color: "#7C4100",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      letterSpacing:2
    }}
  >
    Continue for payment
  </button>
</Popup>

    </div>
  );
}
