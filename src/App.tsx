import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const styles = {
  container: {},
};

function App() {
  return (
    <div style={styles.container}>
      <div>
        <h1>ToDo List</h1>
        <span>Organize suas tarefas e mutiplique sua lista</span>
      </div>
      <Button />
      <Input />
    </div>
  );
}

export default App;
