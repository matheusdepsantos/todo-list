const styles = {
  container: {
    height: "415px",
    background: "#FFFFFF",
    borderRadius: "10px",
    border: "solid 1px #E5E5E5",
    padding: "24px 22px",
  },

  titleList: {},
};

function List() {
  return (
    <div style={styles.container}>
      <strong style={styles.titleList}>Tarefas</strong>
    </div>
  );
}

export default List;
