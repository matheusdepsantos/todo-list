const styles = {
  container: {
    height: "415px",
    background: "#FFFFFF",
    borderRadius: "10px",
    border: "solid 1px #E5E5E5",
    padding: "24px 22px",
  },

  titleList: {},

  containerInfoList: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "20px",
  },

  textTarefa: {
    display: "flex",
    gap: "8px",
  },

  btnDistance: {
    gap: "15px",
    display: "flex",
  },

  btnCompletar: {
    background: "#75d626ff",
    color: "#ffffff",
    borderRadius: "9px",
    border: "none",
    cursor: "pointer",
  },

  btnCancelar: {
    background: "#da2121ff",
    color: "#ffffff",
    borderRadius: "9px",
    border: "none",
    cursor: "pointer",
  },
};

export interface Tarefa {
  nome: string;
  done: boolean;
  data: string;
  finalizado?: string;
}

interface Props {
  tarefas: Tarefa[];
  onRemove: (index: number) => void;
  onComplete: (index: number, isDone: boolean) => void;
}

function List({ tarefas, onRemove, onComplete }: Props) {
  return (
    <div style={styles.container}>
      {tarefas.length > 0 && (
        <>
          <strong style={styles.titleList}>Tarefas</strong>
          {tarefas.map((tarefa: Tarefa, index: number) => (
            <div style={styles.containerInfoList} key={index}>
              <div style={{ display: "flex", gap: "5px" }}>
                {tarefa.done && tarefa.data ? (
                  <span
                    className="material-symbols-outlined"
                    style={{ cursor: "pointer", color: "green" }}
                    onClick={() => onComplete(index, tarefa.done)}
                  >
                    check_box
                  </span>
                ) : (
                  <span
                    className="material-symbols-outlined"
                    style={{ cursor: "pointer" }}
                    onClick={() => onComplete(index, tarefa.done)}
                  >
                    check_box_outline_blank
                  </span>
                )}
                <div style={styles.textTarefa}>
                  <span
                    style={{
                      textDecoration: tarefa.done ? "line-through" : "none",
                    }}
                  >
                    {tarefa.nome}
                  </span>
                  <span>-</span>
                  <span
                    style={{
                      textDecoration: tarefa.done ? "line-through" : "none",
                    }}
                  >
                    {new Date(tarefa.data).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div style={styles.btnDistance}>
                <span
                  className="material-symbols-outlined"
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => onRemove(index)}
                >
                  delete
                </span>
              </div>
            </div>
          ))}
        </>
      )}
      {tarefas.length === 0 && (
        <>
          <span
            className="material-symbols-outlined"
            style={{
              position: "absolute",
              left: "50%",
              top: "47%",
              transform: "translate(-50%, -50%)",
            }}
          >
            folder_open
          </span>
          <strong
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Lista vazia
          </strong>
        </>
      )}
    </div>
  );
}

export default List;
