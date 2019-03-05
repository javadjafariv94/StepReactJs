import React from 'react';

const  NewsList = (props) =>  {
    console.log("News list (props) : ",props);
    console.log("News list (props.okey) : ",props.okey);
    console.log("News list (props.news) : ",props.news);
    
    // same Lojic map
    // for(i=0 ; i< array.length ; i++)
    //   {
    //      array[i].item.title
    //   }

    const items = props.news.map((item) => {
        console.log("item" ,item);
                
        return( //return JSX syntax to Array
        <div>
            <h1>  {item.title} </h1>
            <div> {item.feed}  </div>
        </div>)
    })
    console.log("items" ,items);
    return(
        <div>
            <div>News List </div>
            <div>{props.okey}</div>
            {/* <div>{props.news}</div>  // Error */} 
            <div>{items}</div>  
             {/* return JSX syntax       */}
        </div>
        )
}

export default NewsList;