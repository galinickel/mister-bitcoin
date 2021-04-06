import { Component } from 'react'
import { ContactFilter } from '../cmps/ContactFilter/ContactFilter'
import { ContactList } from '../cmps/ContactList'
import { contactService }  from '../services/contactService'
import {eventBusService} from '../services/eventBusService'
import { Link } from 'react-router-dom'

export class ContactApp extends Component {

  state = {
    contacts: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadContacts()
    eventBusService.on('onDeleteContact',(data)=>{
      this.onDeleteContact(data)
      this.props.history.push('/app')
    })
  }

  async loadContacts() {
    const contacts = await contactService.query(this.state.filterBy)
    this.setState({ contacts })
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  onDeleteContact = async (contactId) => {
    await contactService.remove(contactId)
    this.loadContacts()
  }
  render() {
    const { contacts } = this.state
    return (
      <div className="contact-app">
        <h2>Search your Contacts..</h2>
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <ContactList contacts={contacts} />
        <Link to="/contact/edit">Add Contact</Link>
      </div>
    )
  }
}