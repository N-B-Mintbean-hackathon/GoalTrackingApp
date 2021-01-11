import React from "react";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

export default function InputForm() {
  return (
    <div>
      <Header />
      <h3>Here you can add new task on your To Do list</h3>
      <form>
        <select name="status" id="task-area" className="input-select">
          <option value="personal">Personal</option>
          <option value="health">Health/Fitness</option>
          <option value="career">Career</option>
          <option value="social">Social</option>
        </select>
        <input type="text" placeholder="Task title" className="input-field" />
        <select name="status" id="task-status" className="input-select">
          <option value="todo">TO DO</option>
          <option value="inprogress">IN PROGRESS</option>
          <option value="done">DONE</option>
        </select>
        <br />
        <input
          type="text"
          placeholder="Task description"
          className="input-area"
        />
        <br />
        <button className="btn-lp">Send</button>
      </form>
      <Footer />
      <hr />
    </div>
  );
}
