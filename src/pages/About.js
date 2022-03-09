import React from 'react'

function About() {
    return (
        <div class="main">
            <div className="main-wrap">
                <p>買設計<i class="fa-solid fa-angle-right"></i>品味美食<i class="fa-solid fa-angle-right"></i>零食/點心 新鮮食材</p>
                <div class="row">
                    <div class="section-l">
                        <div className="item-img">
                            <img src="../pic/cookie.jpeg" alt="" />
                        </div>

                    </div>
                    <div class="section-w">
                        <div className="item-title">Bear Queen 熊后 | 牛奶莓莓 香蔥蘇打牛軋餅 12入/盒
                            5.0
                        </div>
                        <div className="item-review"></div>
                        <div className="item-price">NT$ 420</div>
                        <div className="p">免運從台灣寄出</div>
                        <a href="#">享跨館結帳 滿額免運</a>
                        <button><i class="fa-solid fa-cart-shopping"></i>放入購物車</button>
                        <button><i class="fa-solid fa-heart"></i>收藏商品</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About