import React, { useState } from "react";

const NewEntry = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example logic to handle the submission (replace with your logic)
    const newEntry = {
      title,
      amount: parseFloat(amount),
      category,
      description,
    };

    console.log("New Entry:", newEntry);

    // Clear form fields
    setTitle("");
    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <div
      style={{
        fontFamily: "'Press Start 2P', cursive",
        backgroundColor: "#9083A5",
        color: "#FFFDED",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Add New Entry</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          backgroundColor: "#F7F0C1",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#000",
            }}
          >
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #9083A5",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#000",
            }}
          >
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #9083A5",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#000",
            }}
          >
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #9083A5",
            }}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Income">Income</option>
            <option value="Health">Health</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#000",
            }}
          >
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #9083A5",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#AFE593",
            color: "#FFFDED",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Press Start 2P', cursive",
          }}
        >
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default NewEntry;
