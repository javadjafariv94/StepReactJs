import React, {Component} from 'react';
import '../components/css/styles.css'

class Header extends Component {
  inputChangeHandler= ()=>{
    console.log("I was chenged");
  }

  render() {
      
    return(
      <header >  
        <div className="logo">  logo </div>
        <input type="Text" onChange={this.inputChangeHandler}/>
      </header>
    )
  } 
}
export default Header;