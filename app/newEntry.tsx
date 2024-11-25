import React, { CSSProperties } from "react";

const NewEntry = ({ onClose }: { onClose: () => void }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>New Entry</h2>
        <p>This is the new entry popup content.</p>
        <button style={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "#3E364A",
    padding: "30px",
    border: "5px solid #f5eed5",
    borderRadius: "15px",
    textAlign: "center",
    fontFamily: "'Press Start 2P', cursive",
    color: "#f5eed5",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },
  closeButton: {
    marginTop: "20px",
    backgroundColor: "#AFE593",
    border: "2px solid #9083A5",
    padding: "10px 25px",
    borderRadius: "5px",
    fontFamily: "'Press Start 2P', cursive",
    color: "#FFFDED",
    cursor: "pointer",
  },
};

export default NewEntry;
