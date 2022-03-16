import { FcMenu } from 'react-icons/fc';
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdPaper } from 'react-icons/io';
import { ReactComponent as UserIcon } from '../pic/user-regular.svg';
import { ReactComponent as HeartIcon } from '../pic/heart-regular.svg';
import React, { useState } from 'react'

function MobileNav() {
    const [open, setOpen] = useState(false);
    const hamIcon = <FcMenu size='30px' color='grey' onClick={() => setOpen(!open)} />
    const closeIcon = <MdOutlineClose size='30px' color='grey' onClick={() => setOpen(!open)} />
    return (
        <div className="mobile-nav">
            {open ? closeIcon : hamIcon}
            {open && <MobileNavlinks />}
        </div>
    )
}
function MobileNavlinks() {

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item">
                <div className="icon-left">{props.icon}{props.children}</div>
            </a>
        );
    }
    return (

        <div className="leftin-menu">
            <div className="menu">
                <DropdownItem icon={<HeartIcon />}>慾望清單</DropdownItem>
                <DropdownItem icon={<UserIcon />} >我的帳戶</DropdownItem>
                <DropdownItem icon={<IoMdPaper />}>購買訂單</DropdownItem>
                <DropdownItem icon={<AiOutlineMail />}>我的信箱</DropdownItem>
            </div>
        </div >
    );
}


export default MobileNav