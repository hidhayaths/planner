import React from "react";
import { Link } from "react-router-dom";

const getStatusColor = (currStatus) => {
  switch (currStatus) {
    case "completed":
      return "green";
    case "in progress":
      return "amber";
    case "blocked":
      return "red";
    default:
      return "default";
  }
};

const Task = ({ task }) => {
  const { id, title, description, dueDate, status } = task;

  return (
    <div
      className={`card task ${getStatusColor(task.status)}`}
      id={`task-${id}`}
    >
      <div className="card-header">
        <span className="label">Title</span>
        <h2 className="task-title">
          <Link to={`/task/${id}`}>{title}</Link>
        </h2>
      </div>
      <div className="card-body">
        <span className="label">Description</span>
        <p className="task-description label-item">{description}</p>
      </div>
      <div className="card-footer">
        <div className="container">
          <span className="label">Due by</span>
          <p className="task-due label-item">{dueDate}</p>
        </div>
        <div className="container">
          <span className="label">Status</span>
          <p className="task-status label-item">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
