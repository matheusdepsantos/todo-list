import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";
import Modal from "./components/Modal";

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
  const [modalOpened, setModalOpened] = useState(false);

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
          <Button label="Novo item" onClick={() => setModalOpened(true)} />
        </div>
      </div>
      <>
        <Input />

        <List />
        <Modal
          opened={modalOpened}
          title="modal 1"
          onHide={() => setModalOpened(false)}
        />
      </>
    </div>
  );
}

export default App;
