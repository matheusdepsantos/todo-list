import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import List, { Tarefa } from "./components/List";
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

  const [pesquisarTarefa, setPesquisarTarefa] = useState("");
  const [novaTarefa, setnovaTarefa] = useState("");

  const [tarefas, setTarefas] = useState<Tarefa[]>([
    {
      nome: "Lavar a louça",
      done: false,
    },
    {
      nome: "Fazer a comida",
      done: true,
    },
    {
      nome: "Buscar o gustavo",
      done: false,
    },
  ]);

  const adicionarTarefa = () => {
    setTarefas((tarefas) => [...tarefas, { nome: novaTarefa, done: false }]);
    setModalOpened(false);
    setnovaTarefa("");
  };

  const completarTarefa = (index: number, isDone: boolean) => {
    const copyArray = [...tarefas];
    copyArray[index].done = !isDone;
    setTarefas(copyArray);
  };

  const removerTarefa = (index: number) => {
    const copyArray = [...tarefas];
    copyArray.splice(index, 1);
    setTarefas(copyArray);
  };

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
        {/* <div>
          <Button label="Novo item" onClick={() => setModalOpened(true)} />
        </div> */}
      </div>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Input
            placeholder="Pesquisar tarefa"
            value={pesquisarTarefa}
            onChange={(event) => setPesquisarTarefa(event)}
          />
          <Button label="Novo item" onClick={() => setModalOpened(true)} />
        </div>

        <List
          tarefas={tarefas}
          onRemove={(e) => removerTarefa(e)}
          onComplete={(i, d) => completarTarefa(i, d)}
        />

        <Modal
          opened={modalOpened}
          title="Criar nova tarefa"
          onHide={() => setModalOpened(false)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Input
              placeholder="Digite o nome da tarefa"
              value={novaTarefa}
              onChange={(event) => setnovaTarefa(event)}
            />
            <Button label="Salvar" onClick={() => adicionarTarefa()} />
          </div>
        </Modal>
      </>
    </div>
  );
}

export default App;
