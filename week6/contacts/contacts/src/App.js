import {React, useState} from 'react';
import Container from './components/container';
import Button from './components/button';
import {connect} from 'react-redux';
import {addContact, removeContact, getContacts} from './redux/contacts';
import './App.css';
import Card from './components/card';

const App = (props) => {

  const [numberField, setNumberField] = useState('');
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  
const {removeContact, addContact} = props;

  return (
    <Container>
      <form onSubmit={e => {
        e.preventDefault();
        addContact({
          name: nameField,
          number: numberField,
          email: emailField
        });
        setNumberField('');
        setNameField('');
        setEmailField('');
      }}>
        <h1 className="title">Redux Contact List</h1>
        <h2 className="title2">Add New Contact</h2>
        <input 
          placeholder="Name" 
          value={nameField} 
          onChange={e => setNameField(e.target.value)} 
        />
        <br />
        <input 
          placeholder="Phone Number" 
          type="text" 
          value={numberField} 
          onChange={e => setNumberField(e.target.value)}
          />
        <br />
        <input 
          placeholder="Email" 
          value={emailField} 
          onChange={e => setEmailField(e.target.value)} />
        <br/>
        <Button>Submit</Button>
      </form>

      <div>
        <h1 className="title3">List of Contacts</h1>
      {props.contacts.map(person =>
        <Card name={person.name} number={person.number} email={person.email} _id={person._id}>
          <Button onClick={() => { 
                removeContact(person.name)
            }}>Delete</Button>
        </Card>
      )}
      </div>

    </Container>
  );
}

const mapStateToProps = state => {
  return {
      contacts: state
  }
}

const mapDispatchToProps = {
  addContact,
  removeContact,
  getContacts
}


export default connect(mapStateToProps, mapDispatchToProps)(App)