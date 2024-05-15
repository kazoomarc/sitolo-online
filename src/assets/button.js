import { NavLink } from 'react-router-dom';

// primary black button
export function Button(props) {
  return (
    <button
      className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto"
      onClick={props.onClick}
      style={{
        backgroundColor: props.bg,
        color: props.color,
        width: props.width,
      }}
    >
      <NavLink to={props.link}>{props.text}</NavLink>
    </button>
  );
}

// primary shadowed button
export function ButtonBordered(props) {
  return (
    <button
      className="pointer-events-auto rounded-lg px-4 py-2 text-center text-sm font-semibold shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50"
      onClick={props.onClick}
      style={{
        backgroundColor: props.bg,
        // color: props.color,
        width: props.width,
      }}
    >
      <NavLink to={props.link}>{props.text}</NavLink>
    </button>
  );
}
