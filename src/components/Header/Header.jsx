import React from 'react';
import classes from'./Header.module.css';
console.log(classes);
const Header = () => {
   return (
      <header className={classes.header}>
      <img 
      src="https://www.i-cad.fr/uploads/5bec27af5afec.jpeg"></img>
      Je suis dans le header -
   </header>
   )
} 

export default Header;