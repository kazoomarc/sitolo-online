export default function Card(props) {
  const { width, children } = props;
  return (
    <>
      <div
        width={{ width }}
        className=" w-full shadow-xl rounded-lg ring-slate-700\/10 ring-1 shadow-black-1\/5 hover:bg-slate-50 p-4 bg-white"
      >
        {children}
      </div>
    </>
  );
}
