import React from 'react';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="left-column">
        {/* Left column content */}
      </div>
      <div className="right-column">
        {children}
      </div>
    </div>
  );
};

export default Layout;