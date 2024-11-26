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
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
        <h2 style={styles.header}>New Entry</h2>
        <div style={styles.formSection}>
          <label style={styles.label}>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.inputField}
            />
          </label>
          <label style={styles.label}>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.inputField}
            />
          </label>
          <label style={styles.label}>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.inputField}
            />
          </label>
          <label style={styles.label}>
            Description:
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textareaField}
            ></textarea>
            </label>
          </div>
          <div style={styles.buttonContainer}>
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
  popupOverlay: {
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
  popupContent: {
    backgroundColor: "#3E364A",
    padding: "20px",
    border: "5px solid #9083A5",
    borderRadius: "15px",
    textAlign: "center",
    fontFamily: "'Press Start 2P', cursive",
    width: 500,
    color: "#000",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },
  header: {
    marginBottom: "20px",
    color: "#fff",
  },
  formSection: {
    marginTop: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    color: "#fff",
  },
  inputField: {
    display: "block",
    width: "100%",
    padding: "8px",
    width: "480px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "2px solid #9083A5",
    fontFamily: "'Press Start 2P', cursive",
    backgroundColor: "#fff",
    color: "#000",
  },
  textareaField: {
    display: "block",
    width: "480px",
    padding: "8px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "2px solid #9083A5",
    fontFamily: "'Press Start 2P', cursive",
    backgroundColor: "#fff",
    color: "#000",
  },
  buttonContainer: {
    marginTop: "20px",
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
