import React from "react";
import RemoveButton from "../../../../assets/images/products/removeButton.png";
import "./Cart.css";


export default function CartItem({ product, onRemove, onQuantityChange }) {
  return (
    <div className="cartItem">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="image" />

      {/* Product Price */}
      <div className="price">Rs. {product.price.toFixed(2)}</div>

      {/* Quantity Controls */}
      <div className="quantitySection">
        <button
          className="quantityButton"
          onClick={() =>
            onQuantityChange(product.id, Math.max(1, product.quantity - 1))
          }
        >
          -
        </button>
        <span className="quantityValue">{product.quantity}</span>
        <button
          className="quantityButton"
          onClick={() => onQuantityChange(product.id, product.quantity + 1)}
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="totalPrice">Rs. {(product.price * product.quantity).toFixed(2)}</div>

      {/* Remove Button */}
      <img
        className="removeButtonImage"
        onClick={() => onRemove(product.id)}
        src={RemoveButton}
        alt="Remove"
      />
    </div>
  );
}
