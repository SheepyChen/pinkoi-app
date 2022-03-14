import React, { useState } from 'react';
import { ReactComponent as UserIcon } from '../pic/user-regular.svg';
import { ReactComponent as HeartIcon } from '../pic/heart-regular.svg';
import { ReactComponent as BellIcon } from '../pic/bell-regular.svg';
import { ReactComponent as CartIcon } from '../pic/cart-shopping-solid.svg';
import StickNavbar from './StickNavbar';

function Nav() {
    return (
        <>

            <Navbar>
                <NavItem icon={<UserIcon />}>
                    <DropdownMenu />
                </NavItem>
                <NavItem icon={<HeartIcon />} />
                <NavItem icon={<BellIcon />} />
                <NavItem icon={<CartIcon />} />
            </Navbar >
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
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
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

export default Nav