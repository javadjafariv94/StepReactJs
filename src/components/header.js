import React from 'react';

const getYear = () => {
  const year = new Date();
  return year.getFullYear();
}

const Header = () => {
  return(
    <div> The date is { getYear() } </div>
  )
} 
export default Header;