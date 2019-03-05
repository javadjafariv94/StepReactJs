import React, {Component} from 'react';
import '../components/css/styles.css'
 

class Header extends Component {

  state = {
     keywords :''
  }

  inputChangeHandler= (myevent)=>{
    
    this.setState({
      keywords : myevent.target.value
     
    })
    
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