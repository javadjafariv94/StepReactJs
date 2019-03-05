import React from 'react';

const  NewsList = (props) =>  {
    console.log("News list (props) : ",props);
    console.log("News list (props.okey) : ",props.okey);
    console.log("News list (props.news) : ",props.news);
    
    
    return(
        <div>
            <div>News List </div>
            <div>{props.okey}</div>
            {/* <div>{props.news}</div> */} // Error 
        </div>
        )
}

export default NewsList;