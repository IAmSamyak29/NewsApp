import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default function News(props) {

    console.log("HELLO I AM INSIDE NEWS");
    console.log("Props are: ", props.country);

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
    const [isVisible, setIsVisible] = useState("visible");

    const capatilize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleClick = async () => {
        setLoading(true);
        if ((pageNumber + 1) <= totalNumberOfPages) {
            console.log("hello inside the if part")
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=622efe0a2e344899ad63d3d25741c8ab&page=${pageNumber + 1}&pageSize=${props.pageSize}`);
            let data = await response.json();
            setPageNumber(pageNumber + 1);
            let arr = articles;
            data.articles.map((element) => {
                arr.push(element);
            })
            arr.push(data.articles);
            setArticles(arr);

            if (pageNumber == totalNumberOfPages) {
                setIsVisible("hidden");
                console.log("Visiblity: ", isVisible);
            }
        }
        else {
            console.log("Hello inside the else part");
        }

        setLoading(false);
    }


    useEffect(() => {
        // setLoading(true);

        console.log("INSIDE USE EFFECT");
        const fetchData = async () => {
            setLoading(true);

            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=622efe0a2e344899ad63d3d25741c8ab&page=${pageNumber}&pageSize=${props.pageSize}`);
            let data = await response.json();
            setArticles(data.articles);
            let res = data.totalResults;
            setTotalResults(res);
            setTotalNumberOfPages(Math.ceil(data.totalResults / props.pageSize));
            setLoading(false);
        }
        fetchData();
        // setLoading(false);
    }, [props.country, props.category])

    return (
        <div className="container text-center m-3">


            {/* ALl the news items will be here */}

            {/* {loading && <Spinner />} */}

            {/* {loading && */}
            <>
                <h2>{capatilize(props.category)} - Latest News Heading</h2>
                <div className="row">
                    {articles.map((element) => {
                        if (element.url) {

                            console.log("inside the map function");
                            return <div className="col-md-4" key={element.url}> <NewsItems urlToImage={element.urlToImage} title={element.title} description={element.description} url={element.url} published={element.publishedAt} source={(element.source && element.source.name) ? element.source.name : "No Source"} /> </div>
                        }
                    })}
                </div>

                {loading ? <Spinner /> :
                    <button onClick={handleClick} className='bg-dark text-light'>Load More</button>
                }
            </>
            {/* } */}
        </div>
    )
}
