import React, { useEffect, useState } from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import ShortTask from "./shortTask";
//import { Sortable } from "@shopify/draggable";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/users/1/tasks")
      .then((res) => res.json())
      .then((json) => setTasks(json.tasks));
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div>
      <Header />
      <h3>All Tasks</h3>
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="&#128269; Search"
          className="input-field"
        />
        <select name="status" id="task-area" className="input-select">
          <option value="all">All</option>
          <option value="personal">Personal</option>
          <option value="health">Health/Fitness</option>
          <option value="career">Career</option>
          <option value="social">Social</option>
        </select>
        <select name="status" id="task-status" className="input-select">
          <option value="all">All</option>
          <option value="todo">TO DO</option>
          <option value="inprogress">IN PROGRESS</option>
          <option value="done">DONE</option>
        </select>
      </form>
      <div className="task-container">
        {tasks.map((task) => {
          return (
            <ShortTask
              title={task.title}
              key={task.id}
              status={task.status}
              category={task.category}
            />
          );
        })}
      </div>
      <Footer />
      <hr />
    </div>
  );
}
