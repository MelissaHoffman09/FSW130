import React from "react"
import {connect} from "react-redux"
import {addContact, removeContact} from "./redux"
import {useDispatch} from 'react-redux'
import Form from './components/contactForm'
import Contact from './components/Contacts'
import './App.css';

function App (props) {
  const dispatch = useDispatch()
  function reContact (e) {
    const id = e.target.parentNode.id
    dispatch(removeContact(id))
  }
    return (
      <div>
        <h1 className='title'>Contact List</h1>
        <Form />
        {props.contacts.map((cont) => {           
          return <Contact name = {cont.name} phone = {cont.phone} email = {cont.email} id={cont.id} onClick={reContact}/>
        })}
      </div>
    );
  }

function mapStateToProps (state) {
  return {
    contacts: state
  }
}

export default connect(mapStateToProps, {addContact, removeContact})(App)