//a react component that is a button with blue border and a red background

const button = props => {
  return (
    <button
      className="button"
      onClick={props.onClick}
      style={{
        border: "1px solid blue",
        background: "red"
      }}
    >
      {props.children}
    </button>
  );
}