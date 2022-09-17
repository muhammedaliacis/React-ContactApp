import React from 'react'
import { useState } from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"

function Contacts() {
  const data = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    const [contacts, setContacts] = useState(data);

  return (
    <div id='container'>
      <List contact={contacts}/>
      <Form addContact={setContacts} contacts ={contacts} data={data}/>
    </div>
  )
}

export default Contacts
