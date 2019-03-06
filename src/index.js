import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';

class App extends React.Component {
  state = {
    news : JSON,
    filtered : []
  }
  
  getKeyword = (event) => {
      let  keyEnter = event.target.value;
      let  filtered = this.state.news.filter((item)=>{
         return item.title.indexOf(keyEnter) >-1 ;
       });
       this.setState( {filtered : filtered} )  
  } 
   

  render(){
    let newsFiltered = this.state.filtered;
    let newWhole = this.state.news;  

    return(
      <div>
        <Header keywords={this.getKeyword}/>
        <NewsList news={newsFiltered.length === 0 ? newWhole : newsFiltered} >
          The News are :
        </NewsList>
      </div>
      )

  }
}

ReactDOM.render(<App/>,document.querySelector("#root")); 