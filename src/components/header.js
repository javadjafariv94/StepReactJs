import React, {Component} from 'react';
import '../components/css/styles.css'
 

class Header extends Component {

  state = {
    title : 'The keyword is : ' ,
    keywords :''
  }

  inputChangeHandler= (myevent)=>{
    
    this.setState({
      keywords : myevent.target.value
     
    })
    
  }

  render() {
    console.log(this.state.keywords); 
    return(
      <header >  
        <div className="logo">  logo </div>
        <input type="Text" onChange={this.inputChangeHandler}/>
        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>

      </header>
    )
  } 
}
export default Header;