import React from 'react'
import { NavLink, Navbar } from 'react-router-dom'

const Menu = () => {
    const style = {
      color: "DarkSlateGrey",
      backgroundColor: "lightblue",
      padding: 10,
      marginBottom: 10
    }
  
  const active = {
      fontWeight: 'bold',
      color: 'DarkSlateGrey',
      backgroundColor: "cadetblue",
      padding: 10
    }
  
    return (
    <div style={style}>
    <NavLink exact to="/" activeStyle={active}>anecdotes</NavLink> &nbsp;
    <NavLink exact to="/create" activeStyle={active}>create new</NavLink> &nbsp;
    <NavLink exact to="/about" activeStyle={active}>about</NavLink> &nbsp;
  </div>
  )}

  export default Menu