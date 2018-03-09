import React from 'react'

const Footer = () => {
    const style = {
        marginTop: 15,
        padding: 10,
        backgroundColor: "lightblue"
    }
    
    return (
    <div style={style}>
      Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.
  
      See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for the source code.
    </div>
  )}

  export default Footer