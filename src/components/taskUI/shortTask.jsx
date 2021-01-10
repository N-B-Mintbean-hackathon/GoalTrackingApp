import React from "react";

export default function ShortTask({ title }) {
  return (
    <div>
      <p>{title}</p>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}
