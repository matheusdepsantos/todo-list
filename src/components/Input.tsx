const styles = {
  inputInsert: {
    width: "calc(100% - 20px)",
    borderRadius: "10px",
    border: "1px solid rgb(229, 229, 229)",
    padding: "10px",
  },
};

interface Props {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
}

function Input({ type = "text", placeholder, value, onChange }: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={styles.inputInsert}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
