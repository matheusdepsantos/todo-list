interface Props {
  opened: boolean;
  children?: React.ReactNode;
  title: string;
  onHide: () => void;
}
function Modal({ opened, children, title, onHide }: Props) {
  return (
    <>
      {opened && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "600px",
              height: "300px",
              background: "#ffffff",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h4>{title}</h4>
              <span
                className="material-symbols-outlined"
                onClick={() => onHide()}
              >
                close
              </span>
            </div>
            <div>
              <input type="text" />
              <button>Salvar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
