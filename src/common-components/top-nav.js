import { NavLink } from 'react-router-dom';
import { Button } from '../assets/button';

export default function NavTop(props) {
  return (
    <>
      <h1 className="heading-1">{props.title}</h1>
      <ul className="nav-links">
        <li className="link-item">
          <NavLink to="/docs">docs</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/login">login</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/marketplace">marketplace</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/products">products</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/settings">settings</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/signup">signup</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/team">team</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/terminal">terminal</NavLink>
        </li>
        <li className="link-item">
          <Button text="login" />
        </li>
        <li className="link-item">
          <Button text="signup" />
        </li>
      </ul>
    </>
  );
}
