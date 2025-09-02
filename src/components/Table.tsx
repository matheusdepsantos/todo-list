import { useState } from "react";

export interface Tarefa {
  nome: string;
  done: boolean;
  data: string;
}

interface Props {
  tarefas: Tarefa[];
  onRemove: (index: number) => void;
  onEdit: (index: number, tarefa: any) => void;
  onComplete: (index: number, isDone: any) => void;
}

function Table({ tarefas, onRemove, onEdit, onComplete }: Props) {
  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Data de criação</th>
            <th>Finalizado em</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <div>
          <tbody
            style={{
              display: "inline",
            }}
          >
            {tarefas.map((tarefa: any, index: number) => (
              <tr
                style={{
                  display: "flex",
                }}
                key={index}
              >
                <td
                  style={{
                    textDecoration: tarefa.done ? "line-through" : "none",
                  }}
                >
                  {tarefa.nome}
                </td>
                <td>{tarefa.data}</td>
                <td>{tarefa.finalizado}</td>
                <td>
                  <span
                    style={{
                      cursor: tarefa.done ? "not-allowed" : "pointer",
                      color: tarefa.done ? "gray" : "green",
                      pointerEvents: tarefa.done ? "none" : "auto",
                    }}
                    className="material-symbols-outlined"
                    onClick={() => onComplete(index, tarefa.done)}
                  >
                    check
                  </span>
                  <span
                    style={{
                      cursor: tarefa.done ? "not-allowed" : "pointer",
                      color: tarefa.done ? "gray" : "blue",
                      pointerEvents: tarefa.done ? "none" : "auto",
                    }}
                    className="material-symbols-outlined"
                    onClick={() => onEdit(index, tarefa)}
                  >
                    edit
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      cursor: tarefa.done ? "not-allowed" : "pointer",
                      color: tarefa.done ? "gray" : "red",
                      pointerEvents: tarefa.done ? "none" : "auto",
                    }}
                    onClick={() => onRemove(index)}
                  >
                    delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default Table;
