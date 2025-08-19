const styles = {
  inputInsert: {
    width: "100%",
    height: "31px",
  },
};

function Input() {
  return (
    <input
      type="text"
      placeholder="Search Todos..."
      style={styles.inputInsert}
    />
  );
}

export default Input;
