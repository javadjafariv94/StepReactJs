import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return React.createElement('h1',{className:'Title'},'Hello world');
}

ReactDOM.render(<App/>,document.querySelector("#root")); 