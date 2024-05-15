export default function InputBox(props) {
  return (
    <input
      type={props.type}
      placeholder={props.text}
      className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
      style={{ width: props.width + 'px' }}
      target={props.target}
    />
  );
}
