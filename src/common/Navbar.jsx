import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="parent">
      <div className="child-1">
        <h1 onClick={() => navigate("/")}>Trexo</h1>
      </div>

      <div className="child-2">
        <NavLink to="/userList">Users</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
