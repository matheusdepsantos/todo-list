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

function List() {
  return (
    <div style={styles.container}>
      <strong style={styles.titleList}>Tarefas</strong>
      <div style={styles.containerInfoList}>
        <div style={styles.textTarefa}>
          <input type="checkbox" name="Lavar roupa" id="" />
          <span>Lavar roupa</span>
        </div>
        <div style={styles.btnDistance}>
          <button type="button" style={styles.btnCompletar}>
            completar
          </button>
          <button type="button" style={styles.btnCancelar}>
            cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
