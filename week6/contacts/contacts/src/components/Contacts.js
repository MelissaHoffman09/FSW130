  
import React from 'react'

function Contact (props) {
  return (
    <div id={props.id}>
      <h1>Name: {props.name}</h1>
      <h2>Phone: {props.phone}</h2>
      <h2>Email:{props.email}</h2>
      <button onClick={props.onClick} className="button">Remove</button>
    </div>
  )
}

export default Contact