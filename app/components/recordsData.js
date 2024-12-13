import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RecordsContext = createContext();

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  // Key for AsyncStorage
  const STORAGE_KEY = "@records";

  // Save records to AsyncStorage
  const saveRecords = async (records) => {
    try {
      const jsonValue = JSON.stringify(records);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.error("Error saving records: ", e);
    }
  };

  // Load records from AsyncStorage
  const loadRecords = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue != null) {
        setRecords(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error("Error loading records: ", e);
    }
  };

  // Add a new record and save it
  const addRecord = (newRecord) => {
    setRecords((prevRecords) => {
      const updatedRecords = [...prevRecords, newRecord];
      saveRecords(updatedRecords); // Save the updated records to AsyncStorage
      return updatedRecords;
    });
  };

  // Calculate total amount
  const calculateTotalAmount = () => {
    return records.reduce((total, record) => total + (record.amount || 0), 0);
  };

  // Load records on component mount
  useEffect(() => {
    loadRecords();
  }, []);

  return (
    <RecordsContext.Provider value={{ records, addRecord, calculateTotalAmount }}>
      {children}
    </RecordsContext.Provider>
  );
};

export const useRecords = () => {
  return useContext(RecordsContext);
};