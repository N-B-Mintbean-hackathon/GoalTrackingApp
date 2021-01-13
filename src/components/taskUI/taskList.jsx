import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import ShortTask from "./shortTask";
import Button from 'react-bootstrap/Button';
//import { Sortable } from "@shopify/draggable";

export default function TaskList(props) {
  const {onClick} = props
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    fetch("/api/users/1/tasks")
      .then((res) => res.json())
      .then((json) => setTasks(json.tasks));
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  useEffect(() => {
    setFilteredTasks(
      tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, tasks]);

  //search function

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
          onChange={(e) => setSearch(e.target.value)}
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
        <Link to="/inputForm">
        <Button variant="primary">New Task</Button>{' '}
        </Link>
      </form>
      <div className="task-container">
        <Link to="/oneTask">

        {filteredTasks.map((task) => (
        <ShortTask key={task.id}
        title={task.title}
        status={task.status}
        category={task.category}
        onClick={(id) => {
          onClick(task.id);
        }} {...task} />
      ))}

          {tasks.map((task) => {
              return (
                <ShortTask
                  title={task.title}
                  key={task.id}
                  status={task.status}
                  category={task.category}
                  onClick={(id) => {
                    onClick(task.id);
                  }}
                />
              );
            })}
        </Link>
      </div>
      <Footer />
      <hr />
    </div>
  );
}
