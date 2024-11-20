// Cart.js
import React, { useState } from "react";
import CartItem from "./CartItem";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pink Sweater",
      price: 2500.0,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Purple T-Shirt",
      price: 2500.0,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
  ]);

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

  return (
    <div>
      <div style={styles.yourCart}>Your Cart</div>
      <div style={styles.cartContainer}>
        <div style={styles.cartSection}>
          <div style={styles.cartHeader}>
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

        <div style={styles.summarySection}>
          <span style={styles.orderSummary}>ORDER SUMMARY</span>
          <div style={styles.summaryDetails}>
            <div>
              <div style={styles.total}>
                <span>Total</span>
              </div>
              <div style={styles.totalAmount}>
                <span>Rs. {calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            {/* <small>Tax included and shipping calculated at checkout</small> */}
          </div>
          <div>
            <div style={styles.text}>
              Tax included and shipping calculated at checkout
            </div>
            <button style={styles.checkoutButton}>PROCEED TO CHECKOUT</button>
            <button style={styles.continueShoppingButton}>
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  cartContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap", // Enable wrapping for smaller screens
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  cartSection: {
    width: "65%", // Default for larger screens

    paddingRight: "20px",
    marginBottom: "20px", // Add spacing for smaller screens
  },
  summarySection: {
    width: "30%", // Default for larger screens
    padding: "20px",
    border: "1px solid #F0E3D5",
    borderRadius: "8px",
  },
  orderSummary: {
    justifyContent: "left",
    letterSpacing: "2px",
    fontSize: "18px",
    marginBottom: "35px",
  },
  text: {
    color: "#7C4100",
    marginTop: "25px",
    fontSize: "12px",
  },

  cartHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    padding: "25px",
    color: "#7C4100",
    borderRadius: "15px",
    backgroundColor: "#ECE8E8",
    marginBottom: "20px",
  },
  yourCart: {
    fontSize: "25px",
    textAlign: "left",
    margin: "20px",
    color: "#7C4100",
    borderBottom: "2px solid #F0E3D5",
    paddingBottom: "20px",
  },
  checkoutButton: {
    marginTop: "20px",
    width: "85%",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#7C4100",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    letterSpacing: "2px",
  },
  continueShoppingButton: {
    width: "85%",
    padding: "10px",
    backgroundColor: "#F0E3D5",
    color: "#7C4100",
    border: "none",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    letterSpacing: "2px",
  },

  total: {
    textAlign: "left",
    marginTop: "10px",
    borderTop: " 3px solid #D9D9D9",

    paddingTop: "20px",
  },
  totalAmount: {
    textAlign: "right", // Optional if additional right-alignment is needed
    marginTop: "-18px",
    borderBottom: " 3px solid #D9D9D9",
    paddingBottom: "18px",
  },

  // Media query styles for responsiveness
  "@media (max-width: 700px)": {
    cartContainer: {
      flexDirection: "column", // Stack sections vertically for mobile
    },
    cartSection: {
      width: "100%", // Full width for smaller screens
      borderRight: "none", // Remove the border for mobile
      paddingRight: "0",
    },
    summarySection: {
      width: "100%", // Full width for smaller screens
      marginTop: "20px", // Move the summary below the table
    },
  },
};
