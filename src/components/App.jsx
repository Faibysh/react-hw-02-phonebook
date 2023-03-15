import { useState } from 'react';
import ContactForm from './contactform/ContactForm';
import ContactList from './contactlist/ContactList';
export function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        addContact={addContact}
      />
      <ContactList contacts={contacts} />
    </div>
  );
}
