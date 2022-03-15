import React, { useState } from 'react';
const item1 = ["耳環/耳夾", "手鍊 / 手環", "項鍊", "頸鏈", "鎖骨鍊", "長項鍊", "戒指", "對戒", "腳鍊 / 腳環", "胸針", "徽章 / 別針", "胸花 / 手腕"];
const item2 = ["日常包款", "側背包 / 斜背包", "手提包 / 手提袋 / 托特包", "後背包 / 書包", "水桶包 / 束口袋", "手拿包"]
function NavCate() {

    return (
        <>

            <Catebar>
                <CateItem title={"主題企劃"}>
                    <DropdownMenu item={item1} />
                </CateItem>
                <CateItem title={"配件飾品"}>
                    <DropdownMenu item={item1} />
                </CateItem>
                <CateItem title={"包包提袋"}>
                    <DropdownMenu item={item2} />
                </CateItem>
                <CateItem title={"居家生活"}>
                    <DropdownMenu />
                </CateItem>
                <CateItem title={"品味美食"}>
                    <DropdownMenu />
                </CateItem>
                <CateItem title={"廚房餐桌"}>
                    <DropdownMenu />
                </CateItem>
                <CateItem title={"廚房餐桌"}>
                    <DropdownMenu />
                </CateItem>
                <CateItem title={"廚房餐桌"}>
                    <DropdownMenu />
                </CateItem>
                <CateItem title={"廚房餐桌"}>
                    <DropdownMenu />
                </CateItem>
            </Catebar >
        </>
    );
}

function Catebar(props) {
    return (
        <nav className="cate-bar">
            <ul className="cate-title">{props.children}</ul>
        </nav>
    );
}

function CateItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className="cate-item">
            <a href="#" className="cate" onClick={() => setOpen(!open)}>
                {props.title}
            </a>
            {open && props.children}
        </li>
    );
}
function DropdownMenu(props) {

    return (
        <div className="cate-items">

            {props.item.map((value, index) => {
                return <a className="cate-name" key={index}> {value} </a>
            })}

        </div >

    );
}
export default NavCate