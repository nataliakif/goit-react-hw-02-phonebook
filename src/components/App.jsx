import { Component } from 'react';
import Section from './Section/Section';
import InputForm from './InputForm/InputForm';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    this.setState({ contacts: { data } });
    console.log(this.state);
  };
  filteredContacts = value => {
    const lowerCase = value.toLowerCase();

    return this.state.contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(lowerCase);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };
  contactDelete = id => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const contactsAfterDelete = contacts.filter(contact => contact.id !== id);
      return { contacts: [...contactsAfterDelete] };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101',
        }}
      >
        <Section title="PhoneBook">
          <InputForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts data={this.formSubmitHandler} />
        </Section>
      </div>
    );
  }
}
export default App;
