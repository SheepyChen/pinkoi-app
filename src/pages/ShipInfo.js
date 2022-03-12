function ShipInfo() {
    return (
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
        </div>
    )
}
export default ShipInfo