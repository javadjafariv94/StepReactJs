import React, {Component} from 'react';
import '../components/css/styles.css'
 

class Header extends Component {

  state = {
    keyword :'Hello'
  }

  inputChangeHandler= (myevent)=>{
    console.log(myevent.target.value);
    this.setState({
      keyword : event.target.value;
      // error setState undefine
    })
    
  }

  render() {
    console.log(this.state.keyword); 
    return(
      <header >  
        <div className="logo">  logo </div>
        <input type="Text" onChange={(evn1)=> this.inputChangeHandler(evn1)}/>
      </header>
    )
  } 
}
export default Header;