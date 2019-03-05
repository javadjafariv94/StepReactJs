import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';
class App extends React.Component {

  state = {
    news :JSON
  }

  render() {
    console.log(JSON);
    console.log(this.state.news);
  return( 
    <div >
      <Header/>
      <NewsList news={this.state.news} okey="yes"/> 
    </div>
    )
  }   
}   

ReactDOM.render(<App/>,document.querySelector("#root")); 