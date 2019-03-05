import React, {Component} from 'react';
import '../components/css/styles.css'

class Header extends Component {
  inputChangeHandler= (myevent)=>{
    console.log(myevent.target.value);
  }

  render() {
      
    return(
      <header >  
        <div className="logo">  logo </div>
        <input type="Text" onChange={(e1)=> this.inputChangeHandler(e1)}/>
      </header>
    )
  } 
}
export default Header;