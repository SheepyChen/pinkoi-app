import React, { useState, useEffect } from 'react';


const RecommandProduct = () => {
    let [data, setData] = useState(null);
    let [page, setPage] = useState(1);
    const auth = "563492ad6f91700001000001cf5d90e5a37d4d459a6f29a3b5627782";
    const initailURL = "https://api.pexels.com/v1/curated?page=1&per_page=9";

    //fetch data from pexel api
    const search = async (url) => {
        setPage(2);
        const dataFetch = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        });
        let parsedData = await dataFetch.json();
        setData(parsedData.photos);
    };
    //load more pictures
    const morepicture = async () => {
        let newURL;
        newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=6`;

        setPage(page + 1);
        const dataFetch = await fetch(newURL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        });
        let parsedData = await dataFetch.json();
        setData(data.concat(parsedData.photos));
    };

    //fetch data when the page loads up
    useEffect(() => {
        search(initailURL);
    }, []);
    return (
        <div >
            <div className="box-title">熱門商品推薦</div>
            <div className="pictures-s">
                {data &&
                    data.map((d) => {
                        // console.log(d);
                        return <a target="_blank" href={d.src.large} className="picture-s">
                            <div className="imageContainer-s">
                                <img src={d.src.large} alt="" />
                            </div>
                            <p className="product-title">{d.alt}</p>
                            <p className="product-description">{d.photographer}</p>
                            <p className="product-price">NT${d.width}</p>
                        </a>
                    })
                }
            </div>
            <div className="morePicture">
                <button onClick={morepicture}>看更多</button>
            </div>
        </div>
    );
};
export default RecommandProduct;