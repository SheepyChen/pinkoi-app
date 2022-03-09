import React, { useState, useEffect } from 'react';
import Search from '../conponents/Search';
import Picture from '../conponents/Picture';



const Homepage = () => {
    const [input, setInput] = useState("");
    let [data, setData] = useState(null);
    let [page, setPage] = useState(1);
    const [currentSearch, setcurrentSearch] = useState("");
    const auth = "563492ad6f91700001000001cf5d90e5a37d4d459a6f29a3b5627782";
    const initailURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
    const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;
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
        if (input === "") {
            newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15"`;
        } else {
            newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
        }
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
    useEffect(() => {
        if (currentSearch === "") {
            search(initailURL);
        } else {
            search(searchURL);
        }
    }, [currentSearch]);

    return (
        <div>
            <Search search={() => {
                setcurrentSearch(input);
            }}
                setInput={setInput}
            />
            <div className="pictures">
                {data &&
                    data.map((d) => {
                        return <Picture data={d} />
                    })
                }
            </div>
            <div className="morePicture">
                <button onClick={morepicture}>Load More</button>
            </div>
        </div>
    );
};
export default Homepage;