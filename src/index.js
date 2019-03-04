import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return( 
    <div className="NewElement">
      <h1> hello react</h1>
      <div> hey</div>
    </div>
    )  
}   

ReactDOM.render(<App/>,document.querySelector("#root")); 