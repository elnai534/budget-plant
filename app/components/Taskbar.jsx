import React, { useState } from "react";
import Profile from "../profile";
import NewEntry from "../newEntry";
import History from "../history";

const Taskbar = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null); // To track hover state

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
    fontSize: "16px",
    fontWeight: "bold",
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

      {/* Popups */}
      {isHistoryOpen && <History onClose={toggleHistoryPopup} />}
      {isNewEntryOpen && <NewEntry onClose={toggleNewEntryPopup} />}
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
