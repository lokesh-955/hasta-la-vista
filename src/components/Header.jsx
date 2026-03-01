import React from "react";

function Header({ theme, toggleTheme }) {
  return (
    <>
      <marquee className="notice-bar">
        Avengers Assemble: All departments must update issue status within 48 hours | National Avengers Monitoring System
      </marquee>

      <div className="header">
        <div className="header-left">
          <h1>Hasta La Vista Portal</h1>
          <p>Department of Public Grievances & Administrative Reforms</p>
        </div>

        <div className="header-right">
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
          
        </div>
        
      </div>
      
      
    </>
  );
}

export default Header;