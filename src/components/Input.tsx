const styles = {
  inputInsert: {
    width: "calc(100% - 20px)",
    borderRadius: "10px",
    border: "1px solid rgb(229, 229, 229)",
    padding: "10px",
  },
};

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
}

function Input({ placeholder, value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={styles.inputInsert}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
