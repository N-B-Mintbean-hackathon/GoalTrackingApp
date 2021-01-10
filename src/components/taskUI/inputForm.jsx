import React, { useState } from 'react';
import Header from '../../layout/header';
import firebase from 'firebase';
import { db } from '../../firebase';

export default function InputForm() {
  /* if task-status. todo className = todo
                    . inprogress className = inprogress
                    . done className = done
                    
    if task-area. personal className = personal
                . health className = gealth
                . career className = career
                . social className = social*/

  //State Components
  const [input, setInput] = useState('');
  const testUserName = 'UYZuTK8EOLNxTX5kqO7B91KYUm13';

  const postTask = (e) => {
    e.preventDefault();

    db.collection(testUserName).add({
      title: 'TestTitle',
      description: input,
      category: 'Personal',
      status: 'To Do',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Task description"
          className="input-area"
        />
        <br />
        <button onClick={postTask} className="btn-lp">
          Send
        </button>
      </form>
      <hr />
    </div>
  );
}
