import React from 'react'

const Notification = ({ message }) => {
    const box = {
      border: 'solid',
      borderWidth: 2,
      margin: 4,
      padding: 10,
      color: 'green'
    }
    if (message !== null) {
      return (
        <div style={box}>{message}</div>
      )
    }
    return (
      <div></div>
    )
  }

  export default Notification