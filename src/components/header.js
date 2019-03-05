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
        <input type="Text" onChange={(evn1)=> this.inputChangeHandler(evn1)}/>
      </header>
    )
  } 
}
export default Header;