import React from 'react';

const NewsItem = ({item}) => {

    console.log({item});
    return (
        <div>
            <h1>  {item.title} </h1>
            <div> {item.feed}  </div>
        </div>
    )
}
export default NewsItem;
