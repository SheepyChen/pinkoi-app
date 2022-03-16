import React, { Component } from 'react';

const pic = 'https://cdn02.pinkoi.com/product/bJdR5qYQ/0/2/320x320.jpg';
function RecommendSec() {
    function RecommendItem(props) {
        return (
            <div className="recommend-sec">
                <div className="rec-top">
                    <div className="rec-pic">
                        <img src={props.picurl} />
                    </div>
                    <div className="rec-pic">
                        <img src={props.picurl} />
                    </div>
                    <div className="rec-pic">
                        <img src={props.picurl} />
                    </div>
                </div>
                <div className="rec-title">
                    {props.title}
                </div>


            </div>
        );
    }
    return (
        <div className="recommend-section">
            <h2>看過此商品的人也搜尋了</h2>


            <RecommendItem picurl={pic} title={"品味美食"} />
            <RecommendItem picurl={pic} title={"品味美食"} />
            <RecommendItem picurl={pic} title={"品味美食"} />

        </div >




    );
}

export default RecommendSec
