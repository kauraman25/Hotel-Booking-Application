import { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const handleLogout =() =>{
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">FindYourComfort</span>
        </Link>

        {user ?  
        <>
        <button className="navButton" onClick={handleLogout}>Logout</button>
        </> : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
