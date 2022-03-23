import React, { useState } from "react";
import { ReactComponent as UserIcon } from "../../assets/user-regular.svg";
import { ReactComponent as HeartIcon } from "../../assets/heart-regular.svg";
import { ReactComponent as BellIcon } from "../../assets/bell-regular.svg";
import CartButton from "./CartButton";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import StickNavbar from "./StickNavbar";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <>
      <Navbar>
        <NavItem icon={<RiMoneyEuroCircleFill size="24px" color="yellow" />} />
        <NavItem icon={<UserIcon />}>
          <DropdownMenu />
        </NavItem>

        <NavItem
          icon={
            <Link to="/like">
              <HeartIcon />
            </Link>
          }
        ></NavItem>

        <NavItem icon={<BellIcon />} />
        <NavItem icon={<CartButton onClick={props.onShowCart} />} />
      </Navbar>
      <MobileNav />
      <StickNavbar />
    </>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <div className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </div>
      {open && props.children}
    </li>
  );
}
function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        {props.children}
      </a>
    );
  }
  return (
    <div className="dropdown">
      <div className="menu">
        <DropdownItem>我的信箱</DropdownItem>
        <DropdownItem>通知中心</DropdownItem>
        <DropdownItem>P coin</DropdownItem>
        <DropdownItem>我的信箱</DropdownItem>
      </div>
    </div>
  );
}

export default Nav;
