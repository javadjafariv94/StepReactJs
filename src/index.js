import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';
class App extends React.Component {

  render() {
    console.log(JSON);
  return( 
    <div >
      <Header/>
      <NewsList/>
    </div>
    )
  }   
}   

ReactDOM.render(<App/>,document.querySelector("#root")); 