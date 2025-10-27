import kite from "/zerodha-kite.png"
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-container">
      <img src={kite} style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <NavLink to="/" className={({isActive})=>(isActive?"menu selected":"menu")}><p>Dashboard</p></NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={({isActive})=>(isActive?"menu selected":"menu")}><p>Orders</p></NavLink>
          </li>
          <li>
            <NavLink to="/holdings" className={({isActive})=>(isActive?"menu selected":"menu")}><p>Holdings</p></NavLink>
          </li>
          <li>
            <NavLink to="/positions" className={({isActive})=>(isActive?"menu selected":"menu")}><p>Positions</p></NavLink>
          </li>
          <li>
            <NavLink to="/funds" className={({isActive})=>(isActive?"menu selected":"menu")}><p>Funds</p></NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={({isActive})=>(isActive?"menu selected":"menu")}><p>Apps</p></NavLink>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;