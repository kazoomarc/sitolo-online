export default function InputBox(props) {
  return (
    <input
      type={props.type}
      placeholder={props.text}
      className="input-box rounded-md"
      style={{ width: props.width + 'px' }}
      target={props.target}
    />
  );
}
