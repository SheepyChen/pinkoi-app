import React from 'react'


function ProductImg() {
    return (
        <div className="product-img">
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
        </div>
    )
}

export default ProductImg