import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="appnav__first">
        <div className="appnav__logo">
          <div className="appnav__logofirst"></div>
          <div className="appnav__logosecond"></div>
        </div>
        <strong className="name">Pepper</strong>
      </div>
      <div className="appnav__second">
        <div>About</div>
        <div>Blog</div>
        <div>Pricing</div>
        <div>Careers</div>
        <div>Contact</div>
      </div>
      <div className="appnav__third">
        <div className="cart">
          <ShoppingCartIcon style={{ color: "#9d0aff" }}></ShoppingCartIcon>
          <small style={{ color: "#9d0aff" }}>Cart</small>
        </div>
        <button className="login">Login</button>
        <button className="getstarted">Get started</button>
      </div>
    </div>
  );
}
export default Navbar;
