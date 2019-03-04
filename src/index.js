import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
const App = () => {
    return( 
    <div className="NewElement">
      <Header/>
    </div>
    )  
}   

ReactDOM.render(<App/>,document.querySelector("#root")); 