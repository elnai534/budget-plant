import React, { useState } from "react";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        fontFamily: "'Press Start 2P', cursive",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#9083A5",
        color: "#FFFDED",
        height: "100vh",
      }}
    >
      <h1>Transaction History</h1>
      <p>Here is your transaction history.</p>
      <button
        style={{
          backgroundColor: "#FCB761",
          border: "2px solid #9083A5",
          padding: "10px 20px",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
          fontFamily: "'Press Start 2P', cursive",
        }}
        onClick={togglePopup}
      >
        Show Details
      </button>

      {isOpen && (
        <div
          style={{
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
          }}
        >
          <div
            style={{
              backgroundColor: "#F7F0C1",
              padding: "20px",
              border: "5px solid #9083A5",
              borderRadius: "10px",
              textAlign: "center",
              fontFamily: "'Press Start 2P', cursive",
              color: "#000",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p>Details about the selected transaction.</p>
            <button
              style={{
                backgroundColor: "#AFE593",
                border: "2px solid #9083A5",
                padding: "10px 15px",
                borderRadius: "5px",
                fontFamily: "'Press Start 2P', cursive",
                color: "#FFFDED",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
