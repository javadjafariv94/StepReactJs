import React, {Component} from 'react';
import '../components/css/styles.css'
 

class Header extends Component {

  state = {
    keywords :'Hello'
  }

  inputChangeHandler (myevent){
    
    this.setState({
      keywords : myevent.target.value
      //error setState in function not arrow function
    })
    
  }

  render() {
    console.log(this.state.keywords); 
    return(
      <header >  
        <div className="logo">  logo </div>
         {/* fix by bind */}
        <input type="Text" onChange={this.inputChangeHandler.bind(this)}/>
      </header>
    )
  } 
}
export default Header;