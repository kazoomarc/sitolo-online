export default function PearlButton(props) {
  return (
    <button
      className="inline-flex justify-center rounded-full text-sm font-semibold py-1 px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto"
      onClick={props.onClick}
      style={{
        backgroundColor: props.bg,
        color: props.color,
        width: props.width,
      }}
    >
      <span>{props.text}</span>
    </button>
  );
}
