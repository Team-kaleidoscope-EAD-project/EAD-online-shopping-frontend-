import React, { useEffect } from "react";
import RemoveButton from "../../assets/images/products/removeButton.png";
import "./Cart.css";

export default function CartItem({
  product,
  onRemove,
  onQuantityChange,
  productStock,
}) {
  return (
    <div className="cartItem">
      <div className="imageProduct">
        {/* Product Image */}
        <img src={product.image} alt={product.name} className="image" />
      </div>
      <div className="cartDetails">
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
            onClick={() => {
              if (product.quantity < productStock) {
                onQuantityChange(product.id, product.quantity + 1);
              }
            }}
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <div className="totalPrice">
          Rs. {(product.price * product.quantity).toFixed(2)}
        </div>

        {/* Remove Button */}
        <div className="removeButton">
          <img
            className="removeButtonImage"
            onClick={() => onRemove(product.id)}
            src={RemoveButton}
            alt="Remove"
          />
        </div>
      </div>
    </div>
  );
}
