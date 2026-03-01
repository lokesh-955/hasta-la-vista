import React, { useState } from "react";

function IssueTable({ issues, updateStatus }) {
  const [selectedIssue, setSelectedIssue] = useState(null);

  return (
    <div>
      <h2>Issue Records</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Date</th>
            <th>View</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>{issue.department}</td>
              <td>{issue.title}</td>
              <td>{issue.priority}</td>
              <td>{issue.status}</td>
              <td>{issue.date}</td>

              {/* Eye Icon */}
              <td>
                <button
                  className="view-btn"
                  onClick={() => setSelectedIssue(issue)}
                >
                  👁
                </button>
              </td>

              {/* Status Dropdown */}
              <td>
                <select
                  value={issue.status}
                  onChange={(e) =>
                    updateStatus(issue.id, e.target.value)
                  }
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedIssue && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Issue Description</h3>
            <p><strong>Department:</strong> {selectedIssue.department}</p>
            <p><strong>Title:</strong> {selectedIssue.title}</p>
            <p><strong>Description:</strong></p>
            <p>{selectedIssue.description}</p>

            <button
              className="close-btn"
              onClick={() => setSelectedIssue(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default IssueTable;