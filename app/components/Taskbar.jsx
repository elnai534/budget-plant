import React, { useState } from "react";

const Taskbar = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);

  // Example profile details
  const profileDetails = {
    name: "John Doe",
    email: "john.doe@example.com",
    joined: "January 2024",
    profilePicture: "https://cdn4.iconfinder.com/data/icons/rounded-black-basic-ui/139/Profile01-RoundedBlack-512.png", 
  };

  const toggleHistoryPopup = () => {
    setIsHistoryOpen(!isHistoryOpen);
    setIsProfileOpen(false); // Close other popups
    setIsNewEntryOpen(false);
  };

  const toggleProfilePopup = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsHistoryOpen(false); // Close other popups
    setIsNewEntryOpen(false);
  };

  const toggleNewEntryPopup = () => {
    setIsNewEntryOpen(!isNewEntryOpen);
    setIsProfileOpen(false); // Close other popups
    setIsHistoryOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#9083A5",
        borderRadius: "10px",
        marginTop: "10px",
      }}
    >
      {/* History Button */}
      <button
        style={{
          flex: 1,
          margin: "5px",
          padding: "10px",
          backgroundColor: "#FCB761",
          borderRadius: "5px",
          color: "white",
          fontFamily: "'Press Start 2P', cursive",
          border: "none",
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
          margin: "5px",
          padding: "10px",
          backgroundColor: "#FCB761",
          borderRadius: "5px",
          color: "white",
          fontFamily: "'Press Start 2P', cursive",
          border: "none",
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
          margin: "5px",
          padding: "10px",
          backgroundColor: "#FCB761",
          borderRadius: "5px",
          color: "white",
          fontFamily: "'Press Start 2P', cursive",
          border: "none",
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
              backgroundColor: "#3E364A",
              padding: "30px",
              border: "5px solid #f5eed5",
              borderRadius: "15px",
              textAlign: "center",
              fontFamily: "'Press Start 2P', cursive",
              color: "#f5eed5",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              width: "200px", 
              height: "200px",
              fontSize: "22px",
            }}
          >
            <p>History clicked!</p>
            <button
              style={{
                backgroundColor: "#AFE593",
                border: "2px solid #9083A5",
                padding: "10px 25px",
                borderRadius: "5px",
                fontFamily: "'Press Start 2P', cursive",
                color: "#FFFDED",
                cursor: "pointer",
                marginTop: "40px",
                fontSize: "24px",
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
              backgroundColor: "#3E364A",
              padding: "30px",
              border: "5px solid #f5eed5",
              borderRadius: "15px",
              textAlign: "center",
              fontFamily: "'Press Start 2P', cursive",
              color: "#f5eed5",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              width: "200px", 
              height: "200px",
              fontSize: "22px",
            }}
          >
            <p>New Entry clicked!</p>
            <button
              style={{
                backgroundColor: "#AFE593",
                border: "2px solid #9083A5",
                padding: "10px 25px",
                borderRadius: "5px",
                fontFamily: "'Press Start 2P', cursive",
                color: "#FFFDED",
                cursor: "pointer",
                marginTop: "40px",
                fontSize: "24px",
              }}
              onClick={toggleNewEntryPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Profile Popup with Matching Border */}
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
              backgroundColor: "#3E364A",
              padding: "20px",
              border: "5px solid #f5eed5", // Matching border
              borderRadius: "15px",
              textAlign: "center",
              fontFamily: "'Press Start 2P', cursive",
              color: "#f5eed5",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              width: "500px", 
              height: "500px",
            }}
          >
            {/* Profile Picture */}
            <img
              src={profileDetails.profilePicture}
              alt="Profile"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "20px",
                border: "3px solid #9083A5",
              }}
            />

            {/* Profile Details */}
            <h2 style={{ marginBottom: "20px", color: "#f5eed5" }}>Profile</h2>
            <div
              style={{
                marginBottom: "50px",
                color: "#f5eed5",
                textAlign: "center",
                fontSize: "22px",
              }}
            >
              <p>
                <strong>Name:</strong> {profileDetails.name}
              </p>
              <p>
                <strong>Email:</strong> {profileDetails.email}
              </p>
              <p>
                <strong>Joined:</strong> {profileDetails.joined}
              </p>
            </div>

            {/* Close Button */}
            <button
              style={{
                backgroundColor: "#AFE593",
                border: "2px solid #9083A5",
                padding: "18px 35px",
                borderRadius: "5px",
                fontFamily: "'Press Start 2P', cursive",
                color: "#FFFDED",
                cursor: "pointer",
                marginTop: "10px",
                fontSize: "22px",
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
