import React from "react";

const Profile = ({ onClose }: { onClose: () => void }) => {
  return (
    <div style={styles.overlay as React.CSSProperties}>
      <div style={styles.popup as React.CSSProperties}>
        <img
          src="https://cdn4.iconfinder.com/data/icons/rounded-black-basic-ui/139/Profile01-RoundedBlack-512.png"
          alt="Profile Icon"
          style={styles.profilePicture as React.CSSProperties}
        />
        <h2 style={styles.heading}>Profile</h2>
        <div style={styles.details as React.CSSProperties}>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p>
            <strong>Joined:</strong> January 2024
          </p>
        </div>
        <button style={styles.closeButton as React.CSSProperties} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
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
  popup: {
    backgroundColor: "#3E364A",
    padding: "30px",
    border: "5px solid #f5eed5",
    borderRadius: "15px",
    textAlign: "center", // Center all text inside the popup
    fontFamily: "'Press Start 2P', cursive",
    color: "#f5eed5",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    width: "400px",
    maxWidth: "90%",
  },
  profilePicture: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "20px",
    border: "3px solid #FFFDED",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
  },
  details: {
    textAlign: "center", // Ensure text in details is also centered
    marginBottom: "20px",
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#DADADA",
  },
  closeButton: {
    marginTop: "20px",
    backgroundColor: "#AFE593",
    border: "2px solid #9083A5",
    padding: "10px 25px",
    borderRadius: "5px",
    fontFamily: "'Press Start 2P', cursive",
    color: "#FFFDED",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Profile;
