import React, {Component} from 'react';
import '../components/css/styles.css'

class Header extends Component {
  inputChangeHandler= ()=>{
    console.log("I was clicked");
  }

  render() {
      
    return(
      <header >  
        <div className="logo"
          onClick={this.inputChangeHandler}
        >  logo </div>
        <input type="Text"/>
      </header>
    )
  } 
}
export default Header;