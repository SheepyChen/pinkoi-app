import React from 'react'
import ProductMenu from './ProductMenu'
import ProductImg from './ProductImg'
import ProductDescription from './ProductDescription';
import ProductInfo from './ProductInfo';
import FoodInfo from './FoodInfo';
import ShipInfo from './ShipInfo';
import ReviewInfo from './ReviewInfo';
import RecommendSec from './RecommendSec';
import ProductMain from './ProductMain';
import Promotions from './Promotions';
import AboutBrand from './AboutBrand';
import RecommandProductSmall from './RecommandProductSmall';

function About() {
    return (
        <div class="main">
            <div className="main-wrap">
                <ProductMenu />
                <div class="row">
                    <div class="section-l">
                        <ProductImg />
                        <ProductDescription />
                        <ProductInfo />
                        <FoodInfo />
                        <ShipInfo />
                        <ReviewInfo />
                        <RecommendSec />
                    </div>
                    <div class="section-r">
                        <ProductMain />
                        <Promotions />

                        <AboutBrand />
                        <RecommandProductSmall />





                    </div>
                </div>
            </div >

        </div >
    )
}

export default About