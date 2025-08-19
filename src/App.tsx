import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";

const styles = {
  textButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "28px 26px",
    gap: "20px",
  },
};

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "1024px",
        margin: "0 auto",
        gap: "20px",
      }}
    >
      <div style={styles.textButton}>
        <div>
          <h1>ToDo List</h1>
          <span>Organize suas tarefas e mutiplique sua lista</span>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <>
        <Input />

        <List />
      </>
    </div>
  );
}

export default App;
