import React from "react";

export default function ShortTask({ title, category, status }) {
  return (
    <div className="short-task">
      <p className="short-task-title">{title}</p>
      <p>{category}</p>
      <p>{status}</p>
      <button className="short-task-btn">Update</button>
      <button className="short-task-btn">Delete</button>
    </div>
  );
}
