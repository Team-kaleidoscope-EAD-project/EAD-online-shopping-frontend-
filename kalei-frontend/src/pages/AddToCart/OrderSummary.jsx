// // OrderSummary.js
// import React from "react";

// export default function OrderSummary({ total }) {
//   return (
//     <div style={styles.summarySection}>
//       <h3>ORDER SUMMARY</h3>
//       <div style={styles.summaryDetails}>
//         <div>
//           <span>Total</span>
//           <span>Rs. {total.toFixed(2)}</span>
//         </div>
//         <small>Tax included and shipping calculated at checkout</small>
//       </div>
//       <div  style={styles.twoButtons}>
//       <button style={styles.checkoutButton}>PROCEED TO CHECKOUT</button>
//       <button style={styles.continueShoppingButton}>CONTINUE SHOPPING</button>
//       </div>

//     </div>
//   );
// }

// const styles = {
//   summarySection: {
//     width: "100%",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//   },
//   summaryDetails: {
//     margin: "20px 0",
//     fontSize: "16px",
//     lineHeight: "1.5",
//   },
//   checkoutButton: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     backgroundColor: "#7C4100",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   continueShoppingButton: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#F5F5F5",
//     color: "#333",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   twoButtons:{
//     flexDirection:"column",
//     backgroundColor:"yellow"
//   },
//   "@media (max-width: 768px)": {
//     summarySection: {
//       padding: "15px",
//     },
//     summaryDetails: {
//       fontSize: "14px", // Adjust font size for smaller screens
//     },
//   },
// };

