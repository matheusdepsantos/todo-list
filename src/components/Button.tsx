const styles = {
  btn: {
    width: "97px",
    height: "32px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    borderRadius: "8px",
    border: "none",
    alignItems: "center",
  },
};

function Button() {
  return <button style={styles.btn}>New Item</button>;
}

export default Button;
