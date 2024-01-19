import React from "react";
import { NavLink} from "react-router-dom";
import logo from "../logo.png";
import {useSelector } from "react-redux";
// import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // const logout = () => {
  //   dispatch(LogOut());
  //   dispatch(reset());
  //   navigate("/");
  // };

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        style={{backgroundColor : "black"}}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img src={logo} width="112" height="28" alt="logo" />
          </NavLink>

          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <p className="navbar-item" style={{ color: 'white' }}>{user && `Halo, ${user.nama}`}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;