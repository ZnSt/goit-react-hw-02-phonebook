import shortid from "shortid";
import { Component } from "react";
import { Form } from "./Form";
import { ContactsList } from "./ContactsList";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />
        <h2>Contacts:</h2>
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
          <p>Total contacts: {contacts.length}</p>
        </div>
        <ContactsList contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
