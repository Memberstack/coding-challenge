import React from "react";
import Routes from "./routes";
import "./app.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Memberstack Coding Challenge</h1>
      <Routes />
    </div>
  );
};

export default React.memo(App);
