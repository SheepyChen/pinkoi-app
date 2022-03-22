import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { useState } from 'react';

function ProductImg() {
    const [page, setPage] = useState(0);
    if (page >= 6) { setPage(page - 6) };
    return (
        <div className="product-img">
            <div className="item-img">
                <span className="change-icon"><FaAngleLeft className="left-icon" size='30px' color='grey' onClick={() => setPage(page - 1)} /></span>
                <span className="change-icon"><FaAngleRight className="right-icon" size='30px' color='grey' onClick={() => setPage(page + 1)} /></span>
                <img className="img" src={`https://cdn01.pinkoi.com/product/7QaYMPbE/${page}/800x0.jpg`} alt="" />
            </div>
            <div className="img-thumbs">
                <a className="thumb"><img src="https://cdn01.pinkoi.com/product/7QaYMPbE/0/2/80x80.jpg" alt="" onClick={() => setPage(0)} /></a>
                <a className="thumb"><img src="https://cdn01.pinkoi.com/product/7QaYMPbE/2/80x80.jpg" alt="" onClick={() => setPage(2)} /></a>
                <a className="thumb"><img src="https://cdn01.pinkoi.com/product/7QaYMPbE/3/80x80.jpg" alt="" onClick={() => setPage(3)} /></a>
                <a className="thumb"><img src="https://cdn01.pinkoi.com/product/7QaYMPbE/4/80x80.jpg" alt="" onClick={() => setPage(4)} /></a>
                <a className="thumb"><img src="https://cdn01.pinkoi.com/product/7QaYMPbE/5/80x80.jpg" alt="" onClick={() => setPage(5)} /></a>
            </div>
        </div>
    )
}

export default ProductImg