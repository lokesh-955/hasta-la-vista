import React from "react";

function DashboardStats({ issues }) {
  const total = issues.length;

  const open = issues.filter(
    (issue) => issue.status === "Open"
  ).length;

  const inProgress = issues.filter(
    (issue) => issue.status === "In Progress"
  ).length;

  const resolved = issues.filter(
    (issue) => issue.status === "Resolved"
  ).length;

  return (
    <div className="stats">
      <div className="stat-card">
        <h3>Total Issues ☯️</h3>
        <p>{total}</p>
      </div>

      <div className="stat-card open">
        <h3>Open 👐</h3>
        <p>{open}</p>
      </div>

      <div className="stat-card progress">
        <h3>In Progress 🔍</h3>
        <p>{inProgress}</p>
      </div>

      <div className="stat-card resolved">
        <h3>Resolved ✅</h3>
        <p>{resolved}</p>
      </div>
    </div>
  );
}

export default DashboardStats;