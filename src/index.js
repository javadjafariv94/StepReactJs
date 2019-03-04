import React from 'react';
import ReactDOM from 'react-dom';
//----
const App = () => {
    return React.createElement('h1',{className:'Title'},'Hello world',React.createElement('div'));
}

ReactDOM.render(<App/>,document.querySelector("#root")); 