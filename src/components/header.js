import React, {Component} from 'react';
import '../components/css/styles.css'
 

class Header extends Component {

  state={
    keywords : ''
  }

  inputChangeHandler= (event) =>{
    this.setState({
      keywords : event.target.value
    })
  } 
  
  render(){
    return(
    <header >
      <div className="logo"> LOGU </div>
      <input type="Text" onChange={this.inputChangeHandler}/>
      <div>{this.state.keywords}</div>    
    </header>  
    )
  }
}
export default Header;