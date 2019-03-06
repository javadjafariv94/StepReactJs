import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) =>{
  console.log(props);

  const items = props.news.map((item) => {
    return(
      <NewsItem item2={item}/> 
    )   
  })

  return(
    <div>
      <h1> {props.children}</h1>
      <div> {items} </div> 
    </div>
  )  
}
export default NewsList;