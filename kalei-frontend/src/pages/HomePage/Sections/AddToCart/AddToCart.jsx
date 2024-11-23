import React, { useState ,useEffect} from "react";
import CartItem from "./CartItem";
import image1 from "../../../../assets/images/products/product1.png";
import image2 from "../../../../assets/images/products/product2.png";
import "./Cart.css";
import cartItemData from "./data.json"

export default function Cart() {
  const [cartItems, setCartItems] = useState([

  ]);

  useEffect(()=>{
    setCartItems(cartItemData);

  })
  
  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div>
      <div className="yourCart">Your Cart</div>
      <div className="cartContainer">
        <div className="cartSection">
          <div className="cartHeader">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div>Remove</div>
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
                <span>Total</span>
              </div>
              <div className="totalAmount">
                <span>Rs. {calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="text">
              Tax included and shipping calculated at checkout
            </div>
            <button className="checkoutButton">PROCEED TO CHECKOUT</button>
            <button className="continueShoppingButton">
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
