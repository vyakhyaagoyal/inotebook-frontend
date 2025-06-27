import React from 'react'
import '../App.css';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type} text-force-black`} role="alert">
      {message}
    </div>
  )
}

export default Alert
