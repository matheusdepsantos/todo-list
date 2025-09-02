import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import List, { Tarefa } from "./components/List";
import Modal from "./components/Modal";
import DatePicker from "./components/DatePicker";
import Table from "./components/Table";

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
  const [modalFinalizar, setModalFinalizar] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [edit, setEdit] = useState<number | null>(null);

  const [pesquisarTarefa, setPesquisarTarefa] = useState("");
  const [novaTarefa, setnovaTarefa] = useState("");
  const [data, setData] = useState("");

  const [finalizado, setFinalizado] = useState("");

  const [tarefasFiltradas, setTarefasFiltradas] = useState<Tarefa[]>([]);
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<{
    index: number;
    isDone: boolean;
  }>();

  useEffect(() => {
    const tarefasFiltradas = tarefas.filter((tarefa) =>
      tarefa.nome.toLowerCase().includes(pesquisarTarefa.toLowerCase())
    );
    setTarefasFiltradas(tarefasFiltradas);
    if (pesquisarTarefa.length === 0) setTarefasFiltradas(tarefas);
  }, [pesquisarTarefa, tarefas]);

  const adicionarTarefa = () => {
    console.log(edit);
    if (edit === null) {
      setTarefas((tarefas) => [
        ...tarefas,
        { nome: novaTarefa, data: data, done: false },
      ]);
      setModalOpened(false);
      setnovaTarefa("");
      setData("");
    } else {
      const newTarefas: any = tarefas.map((item, i) => {
        if (i !== edit) {
          return item;
        }

        if (i === edit) {
          return {
            nome: novaTarefa,
            data: data,
            done: false,
          };
        }
      });
      console.log(newTarefas);
      setTarefas(newTarefas);
      setModalOpened(false);
      setnovaTarefa("");
      setData("");
    }
  };

  const completarTarefa = () => {
    const copyArray = [...tarefas];
    copyArray[tarefaSelecionada?.index!].done = !tarefaSelecionada?.isDone;
    copyArray[tarefaSelecionada?.index!].finalizado = finalizado;
    setTarefas(copyArray);
    setModalFinalizar(false);
    setFinalizado("");
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
          <Button
            label="Novo item"
            onClick={() => {
              setModalOpened(true);
              setEdit(null);
            }}
          />
        </div>

        <Table
          tarefas={tarefasFiltradas}
          onEdit={(e, f) => {
            setnovaTarefa(f.nome);
            setData(f.data);
            setModalOpened(true);
            setEdit(e);
          }}
          onRemove={(e) => removerTarefa(e)}
          onComplete={(i, d) => {
            setModalFinalizar(true);
            setTarefaSelecionada({
              index: i,
              isDone: d,
            });
          }}
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

        <Modal
          opened={modalFinalizar}
          title="Finalizar tarefa"
          onHide={() => setModalFinalizar(false)}
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
              type="date"
              placeholder="Digite a data"
              value={finalizado}
              onChange={(event) => setFinalizado(event)}
            />

            <Button
              label="Finalizar"
              onClick={() => completarTarefa()}
              disable={finalizado.length === 0}
            />
          </div>
        </Modal>
      </>
    </div>
  );
}

export default App;
