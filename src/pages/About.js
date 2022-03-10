import React from 'react'

function About() {
    return (
        <div class="main">
            <div className="main-wrap">
                <p>買設計<i class="fa-solid fa-angle-right"></i>品味美食<i class="fa-solid fa-angle-right"></i>零食/點心 新鮮食材</p>
                <div class="row">
                    <div class="section-l">
                        <div className="item-img">

                            <img className="img" src={require('../pic/cookie.jpg')} alt="" />

                        </div>
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
                        <div className="item-info">
                            <div class="box-title">商品資訊</div>
                            <dl>
                                <div class="info">
                                    <dt>商品材質</dt>
                                    <dd><a href="#">新鮮食材</a></dd>
                                </div>
                                <div className="info">
                                    <dt>製造方式</dt>
                                    <dd>手工製造</dd>
                                </div>
                                <div className="info">
                                    <dt>商品產地</dt>
                                    <dd>台灣</dd>
                                </div>
                                <div className="info">
                                    <dt>庫存</dt>
                                    <dd>10 件以上</dd>
                                </div>
                                <div className="info">
                                    <dt>商品熱門度</dt>
                                    <dd>被欣賞 1,161 次</dd>
                                </div>
                                <div className="info">
                                    <dt></dt>
                                    <dd>已賣出 11 件商品</dd>
                                </div>
                                <div className="info">
                                    <dt></dt>
                                    <dd>共 27 人收藏</dd>
                                </div>
                                <div className="info">
                                    <dt>販售許可</dt>
                                    <dd>原創商品</dd>
                                </div>
                                <div className="info">
                                    <dt>商品摘要</dt>
                                    <dd>不黏牙手工製作蔓越莓牛嘎餅 #酸甜蔓越莓搭上香蔥蘇打餅，鹹甜交織，一口接一口！</dd>
                                </div>
                            </dl>

                        </div>

                        <div className="food-info">
                            <div class="box-title">食品資訊</div>
                            <dl>
                                <div class="info">
                                    <dt>內容物</dt>
                                    <dd>
                                        蘇打餅乾(麵粉、棕櫚油、奶油、蓬萊米粉、青蔥、酵母、泡打粉、蛋白分解酵素、鹽、β-胡蘿蔔素)、麥芽、蔓越莓乾、全脂奶粉、蛋白、棕櫚油、無水奶油、食鹽</dd>
                                </div>
                                <div className="info">
                                    <dt>內容量</dt>
                                    <dd>22g x 12</dd>
                                </div>
                                <div className="info">
                                    <dt>過敏原</dt>
                                    <dd>
                                        蛋、牛奶、小麥、其他</dd>
                                </div>
                                <div className="info">
                                    <dt>保存方法</dt>
                                    <dd>常溫、避免高溫、乾燥、避免陽光直射
                                    </dd>
                                </div>
                                <div className="info">
                                    <dt>賞味期限</dt>
                                    <dd>製造日期後 180 天</dd>
                                </div>
                                <div className="info">
                                    <dt>廠商名稱</dt>
                                    <dd>
                                        不貳光國際有限公司</dd>
                                </div>
                                <div className="info">
                                    <dt>廠商電話</dt>
                                    <dd>0225015556</dd>
                                </div>
                                <div className="info">
                                    <dt>廠商地址</dt>
                                    <dd>台北市中山區建國北路三段79號7樓</dd>
                                </div>
                                <div className="info">
                                    <dt>食品業者登錄字號</dt>
                                    <dd>
                                        A-150767746-00001-1</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="ship-info">
                            <div class="box-title">運費與其他資訊</div>
                            <div className="info">
                                <dt>商品運費</dt>
                                <dd>從台灣基隆市寄出，寄往：</dd>
                            </div>
                            <select name="quantity" class="select">
                                <option value="taiwan">taiwan</option>
                                <option value="tai">tai</option>
                                <option value="twan">twan</option>
                                <option value="an">an</option>
                            </select>
                            <div className="info">
                                <dt>付款方式
                                </dt>
                                <dd><ul>
                                    <li>信用卡安全加密付款</li>
                                    <li>7-11 ibon 代碼繳費</li>
                                    <li> ATM 轉帳繳費</li>
                                </ul></dd>
                            </div>
                            <div class="info">
                                <dt>問題回報</dt>
                                <dd><a href="#">我要檢舉此商品
                                </a></dd>
                            </div>
                            <div className="review-info">
                                <div class="box-title">購買評價</div>
                            </div>
                            <div className="recommend-sec">
                                <h2>看過此商品的人也搜尋了</h2>
                            </div>





                        </div>




                    </div>
                    <div class="section-r">
                        <div className="item-title">Bear Queen 熊后 | 牛奶莓莓 香蔥蘇打牛軋餅 12入/盒</div>
                        <div className="item-review"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>5.0<a href="#"><span>(1)</span></a></div>
                        <div className="item-price">NT$ 420</div>
                        <div class="tag"><span>免運</span><span>從台灣寄出</span></div>
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
                        <div class="box-title-r">優惠活動</div>
                        <a>顯示更多優惠活動</a>
                        <ul>
                            <li>此商品由 Pinkoi 配送，購買 Pinkoi 跨館合併結帳專區 商品，結帳滿 NT$ 1,200 可享免運優惠。</li>
                            <li>Pinkoi 零食大賞：至 2022/3/31 為止，購買指定商品，滿 NT$ 699 享免運</li>
                        </ul>
                        <div class="box-title-r">關於品牌</div>
                        <div className="brand-card">
                            <img src="https://cdn01.pinkoi.com/store/bearqueen2022/logo/1/150x150.jpg" alt="" />
                            <a className="brand-name">BearQueen 熊后</a>
                            <div className="item-review"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>5.0<a href="#"><span>(1)</span></a></div>
                        </div>
                        <div className="brand-info">
                            <dt>上次上線</dt>
                            <dd>1 天內
                            </dd>
                        </div>
                        <div className="brand-info">
                            <dt>回應率：</dt>
                            <dd>-</dd>
                        </div>
                        <div className="brand-info">
                            <dt>回應速度：</dt>
                            <dd>-</dd>
                        </div>
                        <div className="brand-info">
                            <dt>平均出貨速度：</dt>
                            <dd>1~3日</dd>
                        </div>

                        <div class="box-title-r">熱門商品推薦</div>
                        <div className="card-contianer">
                            <div className="card-product">
                                <div className="product-img">
                                    <a class="product" href="#"><img src="https://cdn01.pinkoi.com/product/7QaYMPbE/3/80x80.jpg" alt="" /></a>
                                </div>
                                <div className="card-title">
                                    限量 大容量
                                </div>
                                <div className="card-details">
                                    <a href="#">沙發洋行</a>
                                    <div class="price">NT$ 99</div>
                                </div>




                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default About