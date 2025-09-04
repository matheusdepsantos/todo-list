import { useEffect, useState } from "react";

export enum Severity {
  SUCCESS = "SUCCESS",
  DANGER = "DANGER",
  INFO = "INFO",
  WARNING = "WARNING",
}

enum SeverityColors {
  SUCCESS = "#17d617ff",
  DANGER = "#fe0505ff",
  INFO = "#1448ccff",
  WARNING = "#f7f717ff",
}

interface Props {
  mensagem: string;
  active: boolean;
  severity: Severity;
  onClose: () => void;
}

function Toast({ severity, mensagem, active = false, onClose }: Props) {
  const [time, setTime] = useState(active);

  useEffect(() => {
    console.log(active);
    setTime(active);
    setTimeout(() => {
      setTime(false);
      onClose();
    }, 3000);
  }, [active]);

  const getIcon = () => {
    const icons = {
      SUCCESS: "check_circle",
      DANGER: "dangerous",
      INFO: "info",
      WARNING: "warning",
    };
    return <span className="material-symbols-outlined">{icons[severity]}</span>;
  };

  return (
    <>
      {time && (
        <div
          style={{
            display: "flex",
            borderRadius: "4px",
            width: "calc(344px - 14px)",
            height: "64px",
            alignItems: "center",
            gap: "14px",
            position: "fixed",
            top: "40px",
            right: "40px",
          }}
        >
          <div
            style={{
              color: SeverityColors[severity],
              width: "10px",
              height: "64px",
              background: SeverityColors[severity],
              borderRadius: "4px 0px 0px 4px",
            }}
          ></div>
          <div style={{ color: SeverityColors[severity] }}>{getIcon()}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <strong>{Severity[severity]}</strong>
            <span>{mensagem}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Toast;
