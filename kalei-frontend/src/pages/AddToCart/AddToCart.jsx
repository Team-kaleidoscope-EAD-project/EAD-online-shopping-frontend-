import React, { useState, useEffect, useMemo } from "react";
import CartItem from "./CartItem";

import "./Cart.css";
import Popup from "./DiliveryAddressPopup";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  createPaymentIntent,
  orderStatusUpdate,
  sendOrderDetails,
} from "../../services/order/orderService";
import { userInfo } from "../../services/users/userInfo";

const stripePromise = loadStripe(
  "pk_test_51QOBxSHp3hdPZfFz6HFx8CyHRsKhaN8O1pi2GtBVoEOcnJQR9rJPpFQ7sW9HKYHFwqpdSwzeXEWg5PPx2r474Cyg00TihsPctx"
);

export default function Cart() {
  const location = useLocation();
  const productStock = location.state?.productStock || 0;

  const [cartItems, setCartItems] = useState(() => {
    const savedCartData = localStorage.getItem("cart");
    return savedCartData ? JSON.parse(savedCartData) : [];
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [orderId, setOrderId] = useState(null);

  //save cart data in local storage
  useEffect(() => {
    if (cartItems) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    afterPayment();
  }, [location]);

  //after payment completion
  const afterPayment = async () => {
    const urlParams = new URLSearchParams(location.search);
    const paymentStatus = urlParams.get("redirect_status");

    if (paymentStatus === "succeeded") {
      localStorage.removeItem("cart");
      setCartItems([]);

      await orderStatusUpdate(orderId);
    }
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.itemId !== id));
    console.log("cart", cartItems);
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const orderObject = {
    orderDetails: {
      status: "Pending",
      totalAmount: totalPrice,
      userId: userInfo()?.userId || "Unregistered",
    },
    shippingDetails: {
      shippingAddress: deliveryAddress,
    },

    orderItems: cartItems,
    paymentDetails: {
      paymentAmount: totalPrice,
    },
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
    return totalPrice;
  };

  const handleCheckout = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const handleContinueCheckOut = async () => {
    if (deliveryAddress) {
      closePopup();
      try {
        // const response = await sendOrderDetails();
        // if (response && response.orderId) {
        //   setOrderId(response.orderId);
        // }

        const { clientSecret } = await createPaymentIntent(totalPrice);
        console.log(clientSecret);
        setClientSecret(clientSecret);
      } catch (error) {
        console.log(error);
      }

      setIsPaymentOpen(true);
    }
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "25%",
                }}
              >
                Price
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "25%",
                }}
              >
                Quantity
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "25%",
                }}
              >
                Total
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "25%",
                }}
              >
                Remove
              </div>
            </div>
          </div>
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                onRemove={handleRemove}
                onQuantityChange={handleQuantityChange}
                productStock={productStock}
              />
            ))}
        </div>

        <div className="summarySection">
          <span className="orderSummary">ORDER SUMMARY</span>
          <div className="summaryDetails">
            <div>
              <div className="total">Total</div>
              <div className="totalAmount">
                <span>Rs. {totalPrice}</span>
              </div>
            </div>
          </div>
          <div className="textAndButtons">
            <div className="text">
              Tax included and shipping calculated at checkout
            </div>
            <button className="checkoutButton" onClick={handleCheckout}>
              PROCEED TO CHECKOUT
            </button>
            <button className="continueShoppingButton">
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>

      <Popup show={isPopupOpen} onClose={closePopup}>
        <div className="checkoutHeading">Checkout</div>
        <p>Your total is Rs. {totalPrice}</p>
        <div style={{ marginTop: "20px" }}>
          <label
            htmlFor="deliveryAddress"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Delivery Address:
          </label>
          <textarea
            id="deliveryAddress"
            rows="4"
            cols="40"
            onChange={(e) => setDeliveryAddress(e.target.value)}
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
          onClick={handleContinueCheckOut}
          style={{
            padding: "10px",
            marginTop: "20px",
            backgroundColor: "#F0E3D5",
            color: "#7C4100",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            letterSpacing: 2,
          }}
        >
          Continue for payment
        </button>
      </Popup>

      {isPaymentOpen && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret:
              clientSecret ||
              "pi_3QQQwGHp3hdPZfFz0sI21jZX_secret_YXQpw8roblKFqquNCYyO8xPYN",
          }}
        >
          <CheckoutForm
            isClose={setIsPaymentOpen}
            orderObject={orderObject}
            orderId={orderId}
          />
        </Elements>
      )}
    </div>
  );
}
