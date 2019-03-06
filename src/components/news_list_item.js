import React from 'react';

const NewsItem = (props) =>{

  return (
    <div>
      <h1> {props.item2.title} </h1>
      <div>{props.item2.feed}</div>
    </div>
  )

} 
export default NewsItem; 
