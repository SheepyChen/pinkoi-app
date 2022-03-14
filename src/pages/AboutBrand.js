import ReviewStar from "./ReviewStar";
function AboutBrand() {
    return (
        <div className="about-brand">
            <div className="box-title-r">關於品牌</div>
            <div className="brand-card">
                <div className="brand-card-top">
                    <img src="https://cdn01.pinkoi.com/store/bearqueen2022/banner/11/1200x245.jpg" alt="" />
                </div>
                <div className="brand-card-bottom">
                    <div className="brand-card-bl">
                        <img src="https://cdn01.pinkoi.com/store/bearqueen2022/logo/1/150x150.jpg" alt="" />
                    </div>
                    <div className="brand-card-br">
                        <a className="brand-name">BearQueen 熊后</a>
                        <div className="brand-i">
                            <div><i class="fa-solid fa-location-dot"></i>台灣</div>
                            <ReviewStar /></div>
                    </div>
                </div>
            </div>
            <div className="small-btn">
                <span className="add-btn"><i class="fa-solid fa-plus"></i>加入關注</span>
                <span className="collect-btn"><i class="fa-solid fa-heart"></i>聯絡設計師</span>


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
        </div>


    )
}
export default AboutBrand