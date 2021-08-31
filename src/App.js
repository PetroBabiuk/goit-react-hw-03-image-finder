import React, {Component} from 'react';
// import shortid from 'shortid';
import './App.css';
// import ContactForm from './components/ContactForm';
// import Filter from './components/Filter';
// import ContactList from './components/ContactList';

class App extends Component {
  // static propTypes = {};

  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  // changeFilter = (evt) => {
  //   this.setState({filter: evt.currentTarget.value});
  // };

  // addContact = ({ name, number }) => {
  //   const foundNames = this.state.contacts.map(contact => contact.name.toLocaleLowerCase());
  //   const lowerName = name.toLocaleLowerCase();
  //   if(foundNames.includes(lowerName)){
  //    return alert(`${name} is already in contacts`);
  //   }
  //     const contact = {
  //       id: shortid.generate(),
  //       name,
  //       number,
  //     };
  
  //     this.setState(({contacts})=> ({
  //       contacts: [contact, ...contacts],
  //     }));
  // };

  // deleteContact = (contactId) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  //   }));
  // };

  // getVisibleContacts = () => {
  //   const {filter, contacts} = this.state;
  //   const lowerCasedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCasedFilter))
  // };

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) {
  //     this.setState({ contacts: contacts });
  //   }
    
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    // const { filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        {/* <h1 className="text">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className="text">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} /> */}
      </div>
    )}
}

export default App;