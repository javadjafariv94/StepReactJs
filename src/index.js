import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';

class App extends React.Component {
  state = {
    news : JSON,
    filtered :[]
  }

  getKeyword = (event) => {
    // console.log(event.target.value)
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword)>-1
    });
    console.log("filtered : " ,filtered )

    this.setState({filtered})


  }

  render(){
    let newsFilter = this.state.filtered;
    let newsWhole = this.state.news;
    return(
      <div>
        <Header keywords={this.getKeyword}/>
        <NewsList news={newsFilter.length === 0 ? newsWhole : newsFilter} >
          The News are :
        </NewsList>
      </div>
      )

  }
}

ReactDOM.render(<App/>,document.querySelector("#root")); 