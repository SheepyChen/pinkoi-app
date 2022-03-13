function ProductMain() {
    return (
        <div className="product-main">
            <div className="item-title">Bear Queen 熊后 | 牛奶莓莓 香蔥蘇打牛軋餅 12入/盒</div>
            <div className="item-review"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>5.0<a href="#"><span>(1)</span></a></div>
            <div className="item-price">NT$ 420</div>
            <div class="tag"><span>免運</span><span>從台灣寄出</span></div>
            <a href="#">享跨館結帳 滿額免運</a>
            <br />
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
            <div className="add-btn"><i class="fa-solid fa-cart-shopping"></i>放入購物車</div>
            <div className="collect-btn"><i class="fa-solid fa-heart"></i>收藏商品</div>
            <ul>
                <li>付款後，從備貨到寄出商品為 5 個工作天。（不包含假日）</li>
                <li>設計館提供統一發票或免用統一發票收據</li>
            </ul>
        </div>


    )
}
export default ProductMain