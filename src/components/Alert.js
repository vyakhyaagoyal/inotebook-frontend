import React from 'react'

const Alert = ({ message, type = "warning", style = {} }) => {
  return (
    <div
      className={`alert alert-${type}`}
      role="alert"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {message}
    </div>
  )
}

export default Alert
