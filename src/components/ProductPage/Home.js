import React from 'react'
import ProductMenu from './ProductMenu'
import ProductImg from './ProductImg'
import ProductDescription from './ProductDescription';
import ProductInfo from './ProductInfo';
import FoodInfo from './FoodInfo';
import ShipInfo from './ShipInfo';
import ReviewInfo from './ReviewInfo';
import RecommendSec from './RecommendSec';
import RecommendProduct from './RecommendProduct';
import ProductMain from './ProductMain';
import Promotions from './Promotions';
import AboutBrand from './AboutBrand';
import RecommendProductSmall from './RecommendProductSmall';

function Home() {
    return (
        <div class="main">
            <div className="main-wrap">

                <ProductMenu />
                <div className="row">
                    <div className="section-l">
                        <ProductImg />
                        <ProductDescription />
                        <ProductInfo />
                        <FoodInfo />
                        <ShipInfo />
                        <ReviewInfo />

                    </div>
                    <div className="section-r">
                        <ProductMain />
                        <Promotions />
                        <AboutBrand />
                        <RecommendProductSmall />
                    </div>
                </div>
                <RecommendSec />
                <RecommendProduct />

            </div >

        </div >
    )
}

export default Home