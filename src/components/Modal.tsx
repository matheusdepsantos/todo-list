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
              height: "auto",
              minHeight: "200px",
              maxHeight: "80vh",
              background: "#ffffff",
              borderRadius: "8px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
                style={{ cursor: "pointer" }}
              >
                close
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "94%",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
