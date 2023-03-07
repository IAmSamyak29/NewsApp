import React from 'react'

export default function NewsItems(props) {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>

            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning text-dark">
                {props.source}
                <span className="visually-hidden">unread messages</span>
            </span>
            <img src={props.urlToImage ? props.urlToImage : "https://www.gannett-cdn.com/presto/2023/01/19/USAT/62fedf48-d996-4eff-b660-0969f6e787e5-AP_Airport.JPG?auto=webp&crop=4477,2518,x65,y0&format=pjpg&width=1200"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <footer className="blockquote-footer"><cite title="Source Title">{props.published}</cite></footer>
                <a href={props.url} className="btn btn-primary bg-dark" target="_blank">Read More</a>
            </div>
        </div>
    )
}
