import ReviewStar from "./ReviewStar";
function ReviewInfo() {
    return (
        <div id="review-info" className="review-info">
            <div class="box-title">購買評價</div>
            <div className="review-all">
                <div className="review-buttons">
                    <span>本商品評價</span>
                    <span>品牌所有評價</span>
                </div>
                <ReviewStar />
            </div>
            <Reviews />
        </div>


    )
}

function Reviews() {
    function ReviewItem(props) {
        return (
            <div className="review">
                <div className="user-info">
                    <div className="user-icon">
                        {props.icon}
                    </div>
                    <div className="user-name">
                        {props.name}
                    </div>
                </div>

                <div className="star-rate">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    <span>6天前</span>
                </div>
                <div className="user-comment">
                    {props.comment}
                </div>
                <div className="tag">
                    <span>質感優異</span>
                    <span>運送迅速</span>
                    <span>想再回購</span>
                </div>
                <div className="useful"><i class="fa-solid fa-thumbs-up"></i>你覺得這則評價有幫助嗎？</div>
            </div>
        );
    }
    return (

        <div className="user-review">
            <ReviewItem icon={""} name={"Kel****ly"} comment={"loremwdedwfewfw"} />

        </div>

    );
}
export default ReviewInfo