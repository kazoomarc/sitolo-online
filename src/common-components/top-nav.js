import { NavLink } from 'react-router-dom';

export default function NavTop(props) {
  return (
    <>
      <h1 className="heading-1">{props.title}</h1>
      <ul className="Nav-links">
        <li>
          <NavLink to="/docs">docs</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
        <li>
          <NavLink to="/marketplace">marketplace</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/products">products</NavLink>
        </li>
        <li>
          <NavLink to="/settings">settings</NavLink>
        </li>
        <li>
          <NavLink to="/signup">signup</NavLink>
        </li>
        <li>
          <NavLink to="/team">team</NavLink>
        </li>
        <li>
          <NavLink to="/terminal">terminal</NavLink>
        </li>
      </ul>
    </>
  );
}
