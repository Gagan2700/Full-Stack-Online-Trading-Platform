import { useState, useEffect, useCallback } from "react";
import kite from "/zerodha-kite.png";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";

const Menu = ({ username }) => {
  const [isProfileDown, setIsProfileDown] = useState(false);

  const handleClick = useCallback(() => {
    setIsProfileDown((prev) => !prev);
  }, []);

  // Close profile when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".boxofpro")) {
        setIsProfileDown(false);
      }
    };

    if (isProfileDown) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isProfileDown]);

  return (
    <div className="menu-container">
      <img src={kite} style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Orders</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/holdings"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Holdings</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/positions"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Positions</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/funds"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Funds</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
            >
              <p>Apps</p>
            </NavLink>
          </li>
        </ul>

        <hr />

        <div className="boxofpro" onClick={handleClick}>
          <div className="profile">
            <div className="avatar">
              {username[0].toUpperCase()}
              {username[1]?.toUpperCase() || ""}
            </div>
            <p className="username">{username}</p>
          </div>

          {isProfileDown && <Profile username={username} />}
        </div>
      </div>
    </div>
  );
};

export default Menu;
