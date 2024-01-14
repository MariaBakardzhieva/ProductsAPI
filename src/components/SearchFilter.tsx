const divStyles = {
  display: "flex",
  justifyContent: "end",
  margin: "0 auto 30px",
};

const inputStyles = {
  width: "300px",
  height: "40px",
  paddingLeft: "12px",
  borderRadius: "12px",
  fontSize: "15px",
};

type SearchFilterProps = {
  value: string;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
};

export function SearchFilter({
  value,
  type,
  placeholder,
  onChange,
}: SearchFilterProps) {
  return (
    <form style={divStyles}>
      <input
        style={inputStyles}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </form>
  );
}
