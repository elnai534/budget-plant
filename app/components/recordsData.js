import React, { createContext, useContext, useState } from "react";

const RecordsContext = createContext();

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([
    {
      title: "Groceries",
      amount: -50.25,
      category: "Food",
      description: "Bought fruits and vegetables",
    },
    {
      title: "Salary",
      amount: 1500.0,
      category: "Income",
      description: "Monthly paycheck",
    },
    {
      title: "Gym Membership",
      amount: -45.0,
      category: "Health",
      description: "Monthly gym subscription",
    },
    {
      title: "Coffee",
      amount: -4.5,
      category: "Food",
      description: "Morning coffee",
    },
    {
      title: "Freelance Work",
      amount: 300.0,
      category: "Income",
      description: "Payment for freelance project",
    },
  ]);

  const addRecord = (newRecord) => {
    setRecords((prevRecords) => [...prevRecords, newRecord]);
  };

  const calculateTotalAmount = () => {
    return records.reduce((total, record) => total + (record.amount || 0), 0);
  };

  return (
    <RecordsContext.Provider value={{ records, addRecord, calculateTotalAmount }}>
      {children}
    </RecordsContext.Provider>
  );
};

export const useRecords = () => {
  return useContext(RecordsContext);
};
