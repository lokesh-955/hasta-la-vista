import React, { useState } from "react";

function IssueForm({ addIssue }) {
  const [form, setForm] = useState({
    department: "",
    title: "",
    description: "",
    priority: "Medium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addIssue(form);
    setForm({
      department: "",
      title: "",
      description: "",
      priority: "Medium",
    });
  };

  return (
    <div className="form-section">
      <h2>Register New Issue</h2>

      <form onSubmit={handleSubmit} className="issue-form">
        <div className="form-group">
          <label>Department Name</label>
          <input
            type="text"
            value={form.department}
            onChange={(e) =>
              setForm({ ...form, department: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Issue Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Detailed Description</label>
          <textarea
            rows="4"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select
            value={form.priority}
            onChange={(e) =>
              setForm({ ...form, priority: e.target.value })
            }
          >
            <option>Low 📉</option>
            <option>Medium Ⓜ️</option>
            <option>High 📈</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Submit Issue 👍
        </button>
      </form>
    </div>
  );
}

export default IssueForm;