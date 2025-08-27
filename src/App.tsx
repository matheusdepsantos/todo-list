import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import List, { Tarefa } from "./components/List";
import Modal from "./components/Modal";
import DatePicker from "./components/DatePicker";

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
  const [data, setData] = useState("");

  const [tarefasFiltradas, setTarefasFiltradas] = useState<Tarefa[]>([]);
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    const tarefasFiltradas = tarefas.filter((tarefa) =>
      tarefa.nome.toLowerCase().includes(pesquisarTarefa.toLowerCase())
    );
    setTarefasFiltradas(tarefasFiltradas);
    console.log(tarefasFiltradas);
    if (pesquisarTarefa.length === 0) setTarefasFiltradas(tarefas);
  }, [pesquisarTarefa, tarefas]);

  const adicionarTarefa = () => {
    console.log(data);
    setTarefas((tarefas) => [
      ...tarefas,
      { nome: novaTarefa, data: data, done: false },
    ]);
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

        {/* <List
          tarefas={tarefasFiltradas}
          onRemove={(e) => removerTarefa(e)}
          onComplete={(i, d) => completarTarefa(i, d)}
        /> */}

        <table>
          <tr
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <th>Tarefa</th>
            <th>Data 1</th>
            <th>Data 2</th>
            <th>Editar</th>
          </tr>
          {tarefas.map((tarefa) => (
            <tr
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <td>{tarefa.nome}</td>
              <td>{tarefa.data}</td>
              <td>{tarefa.data}</td>
              <td>Editar</td>
            </tr>
          ))}
        </table>

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

            <Input
              type="date"
              placeholder="Digite a data"
              value={data}
              onChange={(event) => setData(event)}
            />

            <Button
              label="Salvar"
              onClick={() => adicionarTarefa()}
              disable={novaTarefa.length === 0 || data.length === 0}
            />
          </div>
        </Modal>
      </>
    </div>
  );
}

export default App;
