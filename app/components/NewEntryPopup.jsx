import React, { useState } from "react";

const NewEntryPopup = ({ isOpen, onClose, addRecord }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleAddRecord = () => {
    if (!title || !amount || !category || !description) {
      alert("All fields are required!");
      return;
    }

    if (isNaN(amount)) {
      alert("Amount must be a valid number!");
      return;
    }

    addRecord({
      title,
      amount: parseFloat(amount),
      category,
      description,
    });

    setTitle("");
    setAmount("");
    setCategory("");
    setDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
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
          backgroundColor: "#3E364A",
          padding: "20px",
          border: "5px solid #9083A5",
          borderRadius: "15px",
          textAlign: "center",
          fontFamily: "'Press Start 2P', cursive",
          color: "#000",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#000" }}>New Entry</h2>
        <div
          style={{
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          <label style={{ display: "block", marginBottom: "10px" }}>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "2px solid #9083A5",
                fontFamily: "'Press Start 2P', cursive",
              }}
            />
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "2px solid #9083A5",
                fontFamily: "'Press Start 2P', cursive",
              }}
            />
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "2px solid #9083A5",
                fontFamily: "'Press Start 2P', cursive",
              }}
            />
          </label>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Description:
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "2px solid #9083A5",
                fontFamily: "'Press Start 2P', cursive",
              }}
            ></textarea>
          </label>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#AFE593",
              border: "2px solid #9083A5",
              padding: "10px 15px",
              borderRadius: "5px",
              fontFamily: "'Press Start 2P', cursive",
              color: "#FFFDED",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={handleAddRecord}
          >
            Add
          </button>
          <button
            style={{
              backgroundColor: "#FFC0CB",
              border: "2px solid #9083A5",
              padding: "10px 15px",
              borderRadius: "5px",
              fontFamily: "'Press Start 2P', cursive",
              color: "#FFFDED",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEntryPopup;
