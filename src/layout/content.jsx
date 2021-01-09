import React from "react";
import LandingScreen from "../components/loginComponents/landingScreen";
import LogIn from "../components/loginComponents/logIn";
import Register from "../components/loginComponents/register";
import InputForm from "../components/taskUI/inputForm";
import OneTask from "../components/taskUI/oneTask";
import TaskList from "../components/taskUI/taskList";

export default function Content() {
  return (
    <div>
      <LandingScreen />
      <LogIn />
      <Register />
      <InputForm />
      <OneTask />
      <TaskList />
    </div>
  );
}
