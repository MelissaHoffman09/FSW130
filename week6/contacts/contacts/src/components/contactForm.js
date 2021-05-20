import React from 'react'
import {useDispatch} from 'react-redux'
import {addContact} from "../redux"
import uuid from 'react-uuid'

function Form (props) {
  const dispatch = useDispatch()
  
  function onSubmit (e) {
    e.preventDefault()
    const name = document.getElementById("name")
    const phone = document.getElementById("phone")
    const email = document.getElementById("email")
    dispatch(addContact({"name": name.value, "phone": phone.value,"email": email.value, "id": uuid()})) 
  }

  return (
    
    <div className="formText">
      <form onSubmit={onSubmit}>
        <input className="inputText"
          type='text'
          placeholder='Name'
          name='name'
          id='name'
          required onChange={props.onChange}
        />
        <br/><br/>
        <input className="inputText"
            type='text'
            placeholder='Phone Number'
            name='phone'
            id='phone'
            required onChange={props.onChange}
        />
        <br/><br/>
        <input className="inputText"
          type='text'
          placeholder='Email'
          name='email'
          id='email'
          required onChange={props.onChange}
        />
        <br/> <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form