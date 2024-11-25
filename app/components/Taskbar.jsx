import React, { useState } from "react";
import Profile from "../profile";
import NewEntry from "../newEntry";
import History from "../history";

const Taskbar = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);

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

  return (
    <div style={styles.taskbar}>
      <button style={styles.button} onClick={toggleHistoryPopup}>
        History
      </button>
      <button style={styles.button} onClick={toggleNewEntryPopup}>
        New Entry
      </button>
      <button style={styles.button} onClick={toggleProfilePopup}>
        Profile
      </button>

      {/* Render popups */}
      {isHistoryOpen && <History onClose={toggleHistoryPopup} />}
      {isNewEntryOpen && <NewEntry onClose={toggleNewEntryPopup} />}
      {isProfileOpen && <Profile onClose={toggleProfilePopup} />}
    </div>
  );
};

const styles = {
  taskbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#9083A5",
    borderRadius: "10px",
    marginTop: "10px",
  },
  button: {
    flex: 1,
    margin: "5px",
    padding: "10px",
    backgroundColor: "#FCB761",
    borderRadius: "5px",
    color: "white",
    fontFamily: "'Press Start 2P', cursive",
    border: "none",
    cursor: "pointer",
  },
};

export default Taskbar;
