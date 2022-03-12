import React from 'react'


function ProductInfo() {
    return (
        <div className="product-info">
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
    )
}

export default ProductInfo