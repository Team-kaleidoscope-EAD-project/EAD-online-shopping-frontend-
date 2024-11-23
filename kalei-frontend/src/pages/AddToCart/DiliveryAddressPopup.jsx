import React from "react";

export default function Popup({ show, onClose, children }) {
  if (!show) return null; // Do not render if `show` is false

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button onClick={onClose} style={styles.closeButton}>
          &times;
        </button>
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    width: "400px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    backgroundColor: "transparent",
    fontSize: "20px",
    cursor: "pointer",
  },
  content: {
    marginTop: "20px",
    textAlign: "center",
  },
};
