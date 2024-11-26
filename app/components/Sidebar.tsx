import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button
        style={{
          fontSize: '24px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          position: 'fixed',
          top: '15px',
          left: '15px',
          zIndex: 1000,
        }}
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: isSidebarOpen ? '0' : '-300px',
          width: '300px',
          height: '100%',
          backgroundColor: '#333',
          color: 'white',
          overflowY: 'auto',
          transition: 'left 0.3s ease-in-out',
          zIndex: 999,
          padding: '20px',
        }}
      >
        <button
          style={{
            fontSize: '24px',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
          onClick={toggleSidebar}
        >
          ✖
        </button>
        <h2>FAQ</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Question 1:</strong> Answer to question 1.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Question 2:</strong> Answer to question 2.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Question 3:</strong> Answer to question 3.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
