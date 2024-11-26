import React, { createContext, useContext, useState } from "react";

const RecordsContext = createContext();

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

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
