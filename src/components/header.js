import React, {Component} from 'react';


class Header extends Component {
  render() {
    const styles = {
      header: {
        background :'#03a9f4'
      },
      logo: {
        color:'#fff',
        fontFamily:'Anton',
        textAlign:'center' 
      }
    }

    return(
      <header style={styles.header}>  
        <div style={styles.logo}>  logo </div>
        <input type="Text"/>
      </header>
    )
  } 
}
export default Header;