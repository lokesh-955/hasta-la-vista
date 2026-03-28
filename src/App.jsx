import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DashboardStats from "./components/DashboardStats";
import IssueForm from "./components/IssueForm";
import IssueTable from "./components/IssueTable";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "./styles/main.css";

function App() {
  const [issues, setIssues] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load login
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      setIsAuthenticated(true); 
    }
  }, []);

  // Load issues
  useEffect(() => {
    const stored = localStorage.getItem("govt_issues");
    if (stored) setIssues(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("govt_issues", JSON.stringify(issues));
  }, [issues]);

  // Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("portal_theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("portal_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  const addIssue = (issue) => {
    const newIssue = {
      ...issue,
      id: Date.now(),
      status: "Open",
      date: new Date().toLocaleString(),
    };
    setIssues([...issues, newIssue]);
  };

  const updateStatus = (id, status) => {
    setIssues(
      issues.map((issue) =>
        issue.id === id ? { ...issue, status } : issue
      )
    );
  };

  const filteredIssues = issues
    .filter((issue) =>
      filter === "All" ? true : issue.status === filter
    )
    .filter((issue) =>
      issue.title.toLowerCase().includes(search.toLowerCase())
    );

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="container">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>

        <DashboardStats issues={issues} />
        <IssueForm addIssue={addIssue} />

        <div className="filter-search">
          <div>
            <label>Status:</label>
            <select onChange={(e) => setFilter(e.target.value)}>
              <option>All</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search by Issue Title..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <IssueTable
          issues={filteredIssues}
          updateStatus={updateStatus}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;