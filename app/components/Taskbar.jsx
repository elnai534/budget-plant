import React, { useState } from "react";
import NewEntryPopup from "./NewEntryPopup"; // Import the new popup component
import { useRecords } from "../components/recordsData"; // Import the hook for managing records
import Profile from "../profile";
import History from "../history";

const Taskbar = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null); // To track hover state

  const { addRecord } = useRecords(); // Access addRecord from the shared context

  const toggleHistoryPopup = () => {
    setIsHistoryOpen(!isHistoryOpen);
    setIsProfileOpen(false);
    setIsNewEntryOpen(false);
  };

  const toggleProfilePopup = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsHistoryOpen(false);
    setIsNewEntryOpen(false);
  };

  const toggleNewEntryPopup = () => {
    setIsNewEntryOpen(!isNewEntryOpen);
    setIsProfileOpen(false);
    setIsHistoryOpen(false);
  };

  const getButtonStyle = (buttonName) => ({
    width: "213px",
    height: "75px",
    borderRadius: "8px",
    border: "none",
    fontSize: "32px",
    fontWeight: "bold",
    fontFamily: "VT323, serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: hoveredButton === buttonName ? "#f5eed5" : "#FCB761",
    color: hoveredButton === buttonName ? "#000" : "#FFF",
    transition: "background-color 0.3s ease, color 0.3s ease",
  });

  return (
    <div style={styles.taskbar}>
      {/* History Button */}
      <button
        style={getButtonStyle("history")}
        onClick={toggleHistoryPopup}
        onMouseEnter={() => setHoveredButton("history")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        History
      </button>

      {/* New Entry Button */}
      <button
        style={getButtonStyle("newEntry")}
        onClick={toggleNewEntryPopup}
        onMouseEnter={() => setHoveredButton("newEntry")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        New Entry
      </button>

      {/* Profile Button */}
      <button
        style={getButtonStyle("profile")}
        onClick={toggleProfilePopup}
        onMouseEnter={() => setHoveredButton("profile")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        Profile
      </button>
      <NewEntryPopup isOpen={isNewEntryOpen} onClose={toggleNewEntryPopup} addRecord={addRecord} />
    {/* Render popups */}
      {isHistoryOpen && <History onClose={toggleHistoryPopup} />}
      {isProfileOpen && <Profile onClose={toggleProfilePopup} />}
    </div>
  );
};

const styles = {
  taskbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    marginTop: "10px",
  },
};

export default Taskbar;
