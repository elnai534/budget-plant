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
          padding: "30px",
          border: "5px solid #9083A5",
          borderRadius: "15px",
          fontFamily: "'Press Start 2P', cursive",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          width: "600px",
          maxWidth: "90%",
          boxSizing: "border-box", // Ensure proper box-sizing
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center", color: "#000" }}>New Entry</h2>
        <div style={styles.form}>
          {/* Title Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* Amount Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* Category Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Category:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* Description Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Description:</label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ ...styles.input, height: "60px", resize: "none" }}
            ></textarea>
          </div>
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button style={styles.addButton} onClick={handleAddRecord}>
            Add
          </button>
          <button style={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column", 
    alignItems: "center", 
    gap: "20px", 
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column", 
    alignItems: "flex-start", 
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    color: "#000", 
    marginBottom: "5px",
    textAlign: "left",
    width: "100%",
  },
  input: {
    width: "100%", 
    maxWidth: "500px", 
    padding: "8px",
    borderRadius: "5px",
    border: "2px solid #9083A5",
    fontFamily: "'Press Start 2P', cursive",
    backgroundColor: "#FFF",
    color: "#000",
  },
  addButton: {
    backgroundColor: "#AFE593",
    border: "2px solid #9083A5",
    padding: "10px 15px",
    borderRadius: "5px",
    fontFamily: "'Press Start 2P', cursive",
    color: "#FFFDED",
    cursor: "pointer",
    marginRight: "10px",
  },
  closeButton: {
    backgroundColor: "#FFC0CB",
    border: "2px solid #9083A5",
    padding: "10px 15px",
    borderRadius: "5px",
    fontFamily: "'Press Start 2P', cursive",
    color: "#FFFDED",
    cursor: "pointer",
  },
};

export default NewEntryPopup;
