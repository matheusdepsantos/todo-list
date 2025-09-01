const styles = {
  inputDate: {
    width: "calc(100% - 20px)",
    borderRadius: "10px",
    border: "1px solid rgb(229, 229, 229)",
    padding: "10px",
  },
};

interface Props {
  placeholder: string;
  value: string;
}

function DatePicker({}: Props) {
  return (
    <>
      <input type="date" name="" id="" style={styles.inputDate} />
    </>
  );
}

export default DatePicker;
