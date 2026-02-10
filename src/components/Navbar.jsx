import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <NavLink to="/" style={{ margin: "10px" }}>Home</NavLink>
      <NavLink to="/about" style={{ margin: "10px" }}>About</NavLink>
      <NavLink to="/users" style={{ margin: "10px" }}>Users</NavLink>
    </nav>
  );
}

export default Navbar;
