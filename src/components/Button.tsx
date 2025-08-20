interface Props {
  label: string;
  onClick: () => void;
}

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

function Button({ label, onClick }: Props) {
  return (
    <button style={styles.btn} onClick={() => onClick()}>
      {label}
    </button>
  );
}

export default Button;
