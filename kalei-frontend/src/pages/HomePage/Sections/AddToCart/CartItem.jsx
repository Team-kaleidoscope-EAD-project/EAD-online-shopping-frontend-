// CartItem.js
import React from "react";

export default function CartItem({ product, onRemove, onQuantityChange }) {
  return (
    <div style={styles.cartItem}>
      <img src={product.image} alt={product.name} style={styles.image} />
      
      <div>Rs. {product.price.toFixed(2)}</div> {/* Ensure price is formatted properly */}
      <div>
        <button
          onClick={() =>
            onQuantityChange(product.id, Math.max(1, product.quantity - 1))
          }
        >
          -
        </button>
        <span>{product.quantity}</span>
        <button
          onClick={() => onQuantityChange(product.id, product.quantity + 1)}
        >
          +
        </button>
      </div>
      <div>Rs. {(product.price * product.quantity).toFixed(2)}</div>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
}

const styles = {
  cartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "25px",
    border: "1px solid #F0E3D5",
    borderRadius:"15px",
    marginTop: "10px"
    
    
  },
  image: {
    width: "50px",
    height: "50px",
    borderRadius: "5px",
  },
  "@media (max-width: 768px)": {
    cartItem: {
      padding: "15px",
      flexDirection: "column", // Stack content vertically
      alignItems: "flex-start", // Align content to the left
    },
    image: {
      marginBottom: "10px", // Add spacing between elements
    },
  },
};
