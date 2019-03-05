import React from 'react';

const NewsItem = (props) => {

    console.log(props);
    return (
        <div>
            <h1>  {props.item.title} </h1>
            <div> {props.item.feed}  </div>
        </div>
    )
}
export default NewsItem;
