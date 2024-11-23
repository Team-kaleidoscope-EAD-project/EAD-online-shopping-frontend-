

import React from "react";
import RemoveButton from '../../../../assets/images/products/removeButton.png'

export default function CartItem({ product, onRemove, onQuantityChange }) {
  return (
    <div style={styles.cartItem}>
      {/* Product Image */}
      <img src={product.image} alt={product.name} style={styles.image} />

      {/* Product Price */}
      <div>Rs. {product.price.toFixed(2)}</div>

      {/* Quantity Controls */}
      <div style={styles.quantitySection}>
        <button
          style={styles.quantityButton}
          onClick={() =>
            onQuantityChange(product.id, Math.max(1, product.quantity - 1))
          }
        >
          -
        </button>
        <span style={styles.quantityValue}>{product.quantity}</span>
        <button
          style={styles.quantityButton}
          onClick={() => onQuantityChange(product.id, product.quantity + 1)}
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div>Rs. {(product.price * product.quantity).toFixed(2)}</div>

      {/* Remove Button */}
      <img style={styles.removeButtonImage} onClick={() => onRemove(product.id)}
    
          src={RemoveButton}
          alt="Remove"
       
        />
     
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
    borderRadius: "15px",
    marginTop: "10px",
    
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "5px",
  },
  quantitySection: {
    display: "flex",
    alignItems: "center",
    gap: "0px", // Adds space between the buttons and quantity value
  },
  quantityButton: {
    width: "30px",
    height: "30px",
    
    border: "1px solid #ddd",
    
    cursor: "pointer",
    textAlign: "center",
    lineHeight: "30px",
  },
  quantityValue: {
    fontSize: "10px",
    
    border: "1px solid #ddd",
    justifyContent: "center", // Center horizontally
    paddingTop:'8px',
    paddingBottom:'8.5px',
    paddingLeft:'10px',
    paddingRight:'10px',
   
    textAlign: "center",
    alignItems: "center",
    alignSelf:'center'
    
  },
  removeButtonImage:{
    width:'30px',
    height:'30px',
    alignItems:'center',
    alignSelf:'center'

  },

    // Media query for mobile view
    "@media (max-width: 480px)": {

      image: {
        width: "50px", // Reduce image size for mobile
        height: "50px",
        marginBottom: "5px", // Add space below the image
        backgroundColor:'yellow'
      },

      cartItem: {
        flexDirection: "column", // Stack items vertically
        alignItems: "flex-start", // Align items to the left
        padding: "15px",
      },

}
};
