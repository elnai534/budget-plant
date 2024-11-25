import React, { useState } from "react";

const Taskbar = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);

  const toggleHistoryPopup = () => setIsHistoryOpen(!isHistoryOpen);
  const toggleProfilePopup = () => setIsProfileOpen(!isProfileOpen);
  const toggleNewEntryPopup = () => setIsNewEntryOpen(!isNewEntryOpen);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#9083A5",
        padding: "10px",
        borderRadius: "10px",
        height: "60px",
      }}
    >
      {/* History Button */}
      <button
        style={{
          flex: 1,
          backgroundColor: "#FCB761",
          border: "2px solid #9083A5",
          margin: "5px",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
          fontFamily: "'Press Start 2P', cursive",
          cursor: "pointer",
        }}
        onClick={toggleHistoryPopup}
      >
        History
      </button>

      {/* New Entry Button */}
      <button
        style={{
          flex: 1,
          backgroundColor: "#FCB761",
          border: "2px solid #9083A5",
          margin: "5px",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
          fontFamily: "'Press Start 2P', cursive",
          cursor: "pointer",
        }}
        onClick={toggleNewEntryPopup}
      >
        New Entry
      </button>

      {/* Profile Button */}
      <button
        style={{
          flex: 1,
          backgroundColor: "#FCB761",
          border: "2px solid #9083A5",
          margin: "5px",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
          fontFamily: "'Press Start 2P', cursive",
          cursor: "pointer",
        }}
        onClick={toggleProfilePopup}
      >
        Profile
      </button>

      {/* History Popup */}
      {isHistoryOpen && (
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
              backgroundColor: "#F7F0C1",
              padding: "20px",
              border: "5px solid #9083A5",
              borderRadius: "10px",
              textAlign: "center",
              fontFamily: "'Press Start 2P', cursive",
              color: "#000",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p>History clicked!</p>
            <button
              style={{
                backgroundColor: "#AFE593",
                border: "2px solid #9083A5",
                padding: "10px 15px",
                borderRadius: "5px",
                fontFamily: "'Press Start 2P', cursive",
                color: "#FFFDED",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={toggleHistoryPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* New Entry Popup */}
      {isNewEntryOpen && (
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
              backgroundColor: "#F7F0C1",
              padding: "20px",
              border: "5px solid #9083A5",
              borderRadius: "10px",
              textAlign: "center",
              fontFamily: "'Press Start 2P', cursive",
              color: "#000",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p>New Entry clicked!</p>
            <button
              style={{
                backgroundColor: "#AFE593",
                border: "2px solid #9083A5",
                padding: "10px 15px",
                borderRadius: "5px",
                fontFamily: "'Press Start 2P', cursive",
                color: "#FFFDED",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={toggleNewEntryPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Profile Popup */}
      {isProfileOpen && (
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
              backgroundColor: "#F7F0C1",
              padding: "20px",
              border: "5px solid #9083A5",
              borderRadius: "10px",
              textAlign: "center",
              fontFamily: "'Press Start 2P', cursive",
              color: "#000",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p>Profile clicked!</p>
            <button
              style={{
                backgroundColor: "#AFE593",
                border: "2px solid #9083A5",
                padding: "10px 15px",
                borderRadius: "5px",
                fontFamily: "'Press Start 2P', cursive",
                color: "#FFFDED",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={toggleProfilePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Taskbar;
