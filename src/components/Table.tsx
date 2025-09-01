import { useState } from "react";
import { Tarefa } from "./List";

interface Props {
  tarefas: any;
  onRemove: (index: number) => void;
  onEdit: (index: number, tarefa: any) => void;
}

function Table({ tarefas, onRemove, onEdit }: Props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        maxHeight: "550px",
        width: "100%",
      }}
    >
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Data 1</th>
            <th>Data 2</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa: any, index: number) => (
            <tr
              style={{
                display: "flex",
              }}
              key={index}
            >
              <td>{tarefa.nome}</td>
              <td>{tarefa.data}</td>
              <td>{tarefa.data}</td>
              <td>
                <span
                  style={{ cursor: "pointer" }}
                  className="material-symbols-outlined"
                  onClick={() => onEdit(index, tarefa)}
                >
                  edit
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => onRemove(index)}
                >
                  delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
