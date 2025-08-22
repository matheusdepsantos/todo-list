interface Props {
  label: string;
  disable?: boolean;
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
    cursor: "pointer",
  },
};

function Button({ label, onClick, disable = false }: Props) {
  return (
    <button
      style={{
        ...styles.btn,
        cursor: disable ? "default" : "pointer",
        opacity: disable ? "0.6" : "1",
        pointerEvents: disable ? "none" : "auto",
      }}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
}

export default Button;
