import React from "react";
import LandingScreen from "../components/loginComponents/landingScreen";
import LogIn from "../components/loginComponents/logIn";
import Register from "../components/loginComponents/register";
import InputForm from "../components/taskUI/inputForm";
import OneTask from "../components/taskUI/oneTask";
import TaskList from "../components/taskUI/taskList";
import { Switch, Route } from "react-router-dom";

export default function Content() {
  return (
    <div>
      <LandingScreen />
      <LogIn />
      <Register />
      <InputForm />
      <OneTask />
      <TaskList />
      <Switch>
        <Route path="/logIn" component={LogIn} />
        <Route path="/register" component={Register} />
        <Route path="/inputForm" component={InputForm} />
        <Route path="/oneTask" component={OneTask} />
        <Route path="/taskList" component={TaskList} />
      </Switch>
    </div>
  );
}
