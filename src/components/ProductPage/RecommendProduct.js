import React, { useState, useEffect } from "react";
import Picture from "./Picture";

const RecommandProduct = () => {
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  const auth = "563492ad6f91700001000001cf5d90e5a37d4d459a6f29a3b5627782";
  const initailURL = "https://api.pexels.com/v1/curated?page=1&per_page=18";

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
    newURL = `https://api.pexels.com/v1/curated?page=${page + 2}&per_page=6`;

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
    <div className="recommend-product">
      <h2>熱門商品推薦</h2>
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morepicture}>看更多</button>
      </div>
    </div>
  );
};
export default RecommandProduct;
