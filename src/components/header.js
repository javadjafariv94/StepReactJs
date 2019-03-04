import React from 'react';

const user = {
    name : "javad",
    lastname : "jagfari",
    age :42
}

const Header = () => {
  return(
    <div>  
      <div> {user.name} </div>
      <div> {user.lastname}</div>
      <div> {user.age} </div>
    </div>
  )
} 
export default Header;