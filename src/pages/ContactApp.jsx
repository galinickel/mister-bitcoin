import { Component } from 'react'
import { ContactFilter } from '../cmps/ContactFilter/ContactFilter'
import { ContactList } from '../cmps/ContactList'
import { contactService } from '../services/contactService'
import { ContactDetails } from './ContactDetails/ContactDetails'

export class ContactApp extends Component {

  state = {
    contacts: null,
    filterBy: null,
    selectedContactId: null
  }

  componentDidMount() {
    this.loadContacts()
  }

  async loadContacts() {
    const contacts = await contactService.query(this.state.filterBy)
    this.setState({ contacts })
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  onSelectContact = (contactId) => {
    this.setState({ selectedContactId: contactId })
  }
  onDeleteContact = async (contactId) => {
    await contactService.remove(contactId)
    this.setState({ selectedContactId: null })
    this.loadContacts()
  }
  render() {
    const { selectedContactId, contacts } = this.state
    return (
      <div className="contact-app">
        <h1>Contact Shop</h1>
        <ContactFilter onChangeFilter={this.onChangeFilter} />

        {!selectedContactId && <ContactList onSelectContact={this.onSelectContact} contacts={contacts} />}

        {selectedContactId && <ContactDetails onDeleteContact={this.onDeleteContact} selectedContactId={selectedContactId} />}
      </div>
    )
  }
}
