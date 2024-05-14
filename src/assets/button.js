export function Button(props) {
  return (
    <button
      className="fancy-button"
      onClick={props.onClick}
      style={{
        backgroundColor: props.bg,
        color: props.color,
        width: props.width + 'px',
      }}
    >
      {props.text}
    </button>
  );
}
