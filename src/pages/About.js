import React from 'react'

function About() {
    return (
        <div class="main">
            <div className="main-wrap">
                <p>買設計<i class="fa-solid fa-angle-right"></i>品味美食<i class="fa-solid fa-angle-right"></i>零食/點心 新鮮食材</p>
                <div class="row">
                    <div class="section-l  col-lg-6 col-md-6 col-sm-12">
                        <div className="item-img"></div>
                        <div className="img-thumbs">
                            <a className="thumb" href="#">
                                <img src="https://cdn01.pinkoi.com/product/7QaYMPbE/0/2/80x80.jpg" alt="g0" /></a>
                            <a class="thumb" href="#"><img src="https://cdn01.pinkoi.com/product/7QaYMPbE/5/80x80.jpg" alt="" /></a>
                            <a class="thumb" href="#"><img src="https://cdn01.pinkoi.com/product/7QaYMPbE/4/80x80.jpg" alt="" /></a>
                            <a class="thumb" href="#"><img src="https://cdn01.pinkoi.com/product/7QaYMPbE/4/80x80.jpg" alt="" /></a>
                            <a class="thumb" href="#"><img src="https://cdn01.pinkoi.com/product/7QaYMPbE/3/80x80.jpg" alt="" /></a>
                        </div>
                        <div className="item-description">
                            <div class="box-title">商品介紹</div>
                            <img src={require('../pic/cookie.jpg')} alt="" />
                            <div>吃得不只是一塊餅，而是一種享受，在地台灣品牌，將食物的熱情幻化成一塊一塊餅乾，對每個食材的堅持，一口口化於舌尖的香氣，感受到的不在是一塊餅乾，而是更多的暖意。
                                <br />
                                成份：蘇打餅乾(麵粉、棕櫚油、奶油、蓬萊米粉、青蔥、酵母、泡打粉、蛋白分解酵素、鹽、β-胡蘿蔔素)、麥芽、蔓越莓乾、全脂奶粉、蛋白、棕櫚油、無水奶油、食鹽<br />
                                <span>【注意事項】</span><br />
                                ＊禮盒本身為提盒設計，不另付提袋<br />
                                ＊本產品含牛奶、蛋、含麩質的穀類等過敏原，食用後可能導致過敏反應。<br />
                                ＊因維護食品的衛生安全，出貨後除食品本身有瑕疵可退貨外，ㄧ經簽收、拆封、食用等消費者造成之外盒變形、失溫或保存不良導致變質，恕不接受退貨。
                                <br />

                                有效期限：製造日期後 180 天
                                常溫保存避免高溫、乾燥、避免陽光直射
                            </div>
                        </div>
                        <div class="box-title">商品資訊</div>
                        <div class="box-title">食品資訊</div>


                    </div>
                    <div class="section-r col-lg-6 col-md-6 col-sm-12">
                        <div className="item-title">Bear Queen 熊后 | 牛奶莓莓 香蔥蘇打牛軋餅 12入/盒
                            5.0
                        </div>
                        <div className="item-review"></div>
                        <div className="item-price">NT$ 420</div>
                        <div className="p">免運從台灣寄出</div>
                        <a href="#">享跨館結帳 滿額免運</a>
                        <label>數量</label>
                        <select name="quantity" class="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10+">10 +</option>
                        </select>
                        <button><i class="fa-solid fa-cart-shopping"></i>放入購物車</button>
                        <button><i class="fa-solid fa-heart"></i>收藏商品</button>
                        <ul>
                            <li>付款後，從備貨到寄出商品為 5 個工作天。（不包含假日）</li>
                            <li>設計館提供統一發票或免用統一發票收據</li>
                        </ul>
                        <div class="box-title">優惠活動</div>
                        <a>顯示更多優惠活動</a>
                        <ul>
                            <li>此商品由 Pinkoi 配送，購買 Pinkoi 跨館合併結帳專區 商品，結帳滿 NT$ 1,200 可享免運優惠。</li>
                            <li>Pinkoi 零食大賞：至 2022/3/31 為止，購買指定商品，滿 NT$ 699 享免運</li>
                        </ul>
                        <div class="box-title">關於品牌</div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default About