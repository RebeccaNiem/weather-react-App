import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function App() {
  return (
    <div>
      <h1>Check for Weather</h1>
      <Weather />;
    </div>
  );
}
