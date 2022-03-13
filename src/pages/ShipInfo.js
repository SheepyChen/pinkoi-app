function ShipInfo() {
    return (
        <div className="ship-info">
            <div className="box-title">運費與其他資訊</div>
            <dl>
                <div className="info">

                    <dt>商品運費</dt>
                    <dd>
                        <p>從台灣基隆市寄出，寄往：</p>

                        <select name="country" class="select">
                            <option value="taiwan">taiwan</option>
                            <option value="tai">tai</option>
                            <option value="twan">twan</option>
                            <option value="an">an</option>
                        </select>
                        <select name="city" class="select">
                            <option value="taiwan">taipei</option>
                            <option value="tai">tainan</option>
                            <option value="twan">nantou</option>
                            <option value="an">taichung</option>
                        </select>
                    </dd>
                </div>
                <div className="info">
                    <dt></dt>
                    <dd><div className="method">
                        <span>運送方式</span>
                        <span>首件運費</span>
                        <span>續件加收</span>
                    </div></dd>
                </div>
                <div className="info">
                    <dt></dt>
                    <dd> <div className="ship-row">
                        <div class="ship-menu">
                            <div href="#" class="ship-item">7-11取貨</div>
                            <div href="#" class="ship-item">NT$ 60</div>
                            <div href="#" class="ship-item">NT$ 0</div>
                        </div>
                        <div className="free">通知出貨後約 1 - 3 天寄達 | 提供追蹤<br />
                            滿 NT$ 699 <span >免運費</span></div>
                    </div>
                    </dd>
                </div>
                <div className="info">
                    <dt></dt>
                    <dd> <div className="ship-row">
                        <div class="ship-menu">
                            <div href="#" class="ship-item">7-11取付</div>
                            <div href="#" class="ship-item">NT$ 60</div>
                            <div href="#" class="ship-item">NT$ 0</div>
                        </div>
                        <div className="free">通知出貨後約 1 - 3 天寄達 | 提供追蹤<br />
                            滿 NT$ 699 <span >免運費</span></div>
                    </div>
                    </dd>
                </div>
                <div className="info">
                    <dt></dt>
                    <dd> <div className="ship-row">
                        <div class="ship-menu">
                            <div href="#" class="ship-item">基本運送</div>
                            <div href="#" class="ship-item">NT$ 100</div>
                            <div href="#" class="ship-item">NT$ 0</div>
                        </div>
                        <div className="free">設計師自選物流 | 提供追蹤<br />
                            滿 NT$ 699 <span >免運費</span></div>
                    </div>
                    </dd>
                </div>
                <div className="info">
                    <dt></dt>
                    <dd>
                        <div className="alert">實際運費金額以購物車結算或是到貨時收取的金額為準。</div>
                    </dd>
                </div>

                <div className="info pay-info">
                    <dt>付款方式</dt>
                    <dd><ul>
                        <li>信用卡安全加密付款</li>
                        <li>7-11 ibon 代碼繳費</li>
                        <li> ATM 轉帳繳費</li>
                        <li> 全家 FamiPort 代碼繳費</li>
                        <li>LINE Pay</li>
                    </ul></dd>
                </div>
                <div className="info q">
                    <dt>問題回報</dt>
                    <dd><a href="#">我要檢舉此商品
                    </a></dd>
                </div>
            </dl>
        </div>
    )
}
export default ShipInfo


