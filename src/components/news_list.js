import React from 'react';
import NewsItem from './news_list_item';

const  NewsList = (props) =>  {
   
    const items = props.news.map((item) => {
                
        return( 
            <NewsItem key={item.key} item={item} />
        )
    })
    
    return(
        <div>
            <div>News List </div>
            <div>{props.okey}</div>
            <div>{items}</div>  
        </div>
        )
}

export default NewsList;