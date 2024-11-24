import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Zustend-store/AuthStore";
import { useInitializeAuth } from "../hook/useInitializeAuth";
import { useLogout } from "../hook/useLogout";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const user = useAuth((state) => state.user);
  const Logout = useLogout();
  const navigate = useNavigate();
  useInitializeAuth();
  const hadelLogout = () => {
    Logout();
    navigate("/home");
  };
  return (
    <div className="Navbar">
      <div className="container-logo">
        <p>logo</p>
      </div>
      <ul className="nav-item-container">
        <li className="nav-item">
          <Link to="/home">home</Link>
        </li>
        <li className="nav-item">
          <Link to="/task">Task</Link>
        </li>
        <li className="nav-item">
          <Link to="/">offer</Link>
        </li>
        <li className="nav-item">
          <Link to="/">shop</Link>
        </li>
        <li className="nav-item">
          <Link to="/">contact us</Link>
        </li>
      </ul>
      <div className="small-profile">
        {user ? (
          <div className="prifile-content">
            <p>{user.username}</p>
            <p>{user.email}</p>
            <button className="btn-log-auth" onClick={hadelLogout}>
              log out
            </button>
          </div>
        ) : (
          <div className="prifile-content">
            <p>don't have any user login</p>
            <div className="btn-nav-Auth">
              <Link className="btn-log-auth" to="/login">
                login
              </Link>
              <Link className="btn-log-auth" to="/">
                signup
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
