import React, { useState } from "react";
function Promotions() {
    const [showMore, setshowMore] = useState(false);
    const extraContent =
        <>
            <li>【女子購物宣言】3/1 - 3/14 單筆消費滿 NT$1,500 現折 NT$100、滿 NT$3,000 現折 NT$200</li>
            <li>探索獎勵任務進行中，週週送 P Coins 簽到領取獎勵</li>
            <li>購買跨館合併結帳專區滿額即送多彩袋裝口罩一包（隨機贈送）</li>
            <li className="none">多重優惠顯示，實際優惠折抵以購物車內的折抵金額為準</li>
        </>
    const linkName = showMore ? '' : '顯示更多優惠活動 Ｖ'
    return (
        <div className="promotions">
            <div class="box-title-r">優惠活動</div>
            <ul>
                <li>此商品由 Pinkoi 配送，購買 Pinkoi 跨館合併結帳專區 商品，結帳滿 NT$ 1,200 可享免運優惠。</li>
                <li>Pinkoi 零食大賞：至 2022/3/31 為止，購買指定商品，滿 NT$ 699 享免運</li>
                <a className="show-more-link" onClick={() => { setshowMore(!showMore) }}><h2>{linkName}</h2></a>
                {showMore && extraContent}
            </ul>

        </div>


    )
}
export default Promotions
