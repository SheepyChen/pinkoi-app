import React, { useState } from "react";



function ProductDescription() {
    const [readMore, setReadMore] = useState(false);
    const extraContent =
        <div>
            <span>【注意事項】</span><br />
            ＊禮盒本身為提盒設計，不另付提袋<br />
            ＊本產品含牛奶、蛋、含麩質的穀類等過敏原，食用後可能導致過敏反應。<br />
            ＊因維護食品的衛生安全，出貨後除食品本身有瑕疵可退貨外，ㄧ經簽收、拆封、食用等消費者造成之外盒變形、失溫或保存不良導致變質，恕不接受退貨。
            <br />
            <br />
            有效期限：製造日期後 180 天
            <br />
            常溫保存避免高溫、乾燥、避免陽光直射
        </div>
    const linkName = readMore ? '' : '閱讀更多 Ｖ'
    return (
        <div className="product-description">
            <div class="box-title">商品介紹</div>

            <img src={require('../pic/cookie.jpg')} alt="" />
            <div className="p">
                <br />
                <br />
                吃得不只是一塊餅，而是一種享受，在地台灣品牌，將食物的熱情幻化成一塊一塊餅乾，對每個食材的堅持，一口口化於舌尖的香氣，感受到的不在是一塊餅乾，而是更多的暖意。
                <br />
                <br />
                成份：蘇打餅乾(麵粉、棕櫚油、奶油、蓬萊米粉、青蔥、酵母、泡打粉、蛋白分解酵素、鹽、β-胡蘿蔔素)、麥芽、蔓越莓乾、全脂奶粉、蛋白、棕櫚油、無水奶油、食鹽
                <br />
                <br />
                <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h3>{linkName}</h3></a>
                {readMore && extraContent}
            </div >
        </div >



    )
}

export default ProductDescription


