import React from 'react';
import '../components/css/styles.css'
 

const Header = (props) =>  {

    return(
    <header>
      <div className="logo"> LOGU </div>
      <input type="Text" onChange={props.keywords}/>
    </header>  
    )
  }

export default Header;