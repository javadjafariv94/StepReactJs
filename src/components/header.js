import React, {Component} from 'react';
import '../components/css/styles.css'

class Header extends Component {
  render() {
      
    return(
      <header >  
        <div className="logo"
          onClick={()=>console.log("I was clicked")}
        >  logo </div>
        <input type="Text"/>
      </header>
    )
  } 
}
export default Header;