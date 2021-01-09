import React from "react";
import LandingScreen from "../components/loginComponents/landingScreen";
import LogIn from "../components/loginComponents/logIn";
import Register from "../components/loginComponents/register";

export default function Content() {
  return (
    <div>
      <LandingScreen />
      <LogIn />
      <Register />
    </div>
  );
}
