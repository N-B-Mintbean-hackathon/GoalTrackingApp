import React from "react";
import Header from "../../layout/header";

export default function OneTask({ title, description }) {
  return (
    <div>
      <Header />
      <div className="one-task">
        <h3>One task</h3>

        <p>{title}</p>
        <p>{description}</p>
        <button className="btn-lp">Delete</button>
        <button className="btn-lp">Update</button>
      </div>
      <hr />
    </div>
  );
}
