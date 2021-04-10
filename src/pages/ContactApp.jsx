import { Component } from 'react'
import { ContactFilter } from '../cmps/ContactFilter/ContactFilter'
import { ContactList } from '../cmps/ContactList'
import { eventBusService } from '../services/eventBusService'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadContacts, removeContact } from '../store/actions/contactActions'
import { loadUser } from '../store/actions/userActions'

class _ContactApp extends Component {

  state = {
    contacts: null,
    filterBy: null,
  }

  componentDidMount() {
    this.props.loadContacts(this.state.filterBy)
    eventBusService.on('onDeleteContact', (data) => {
      this.onDeleteContact(data)
      this.props.history.push('/app')
    })
  }
  onChangeFilter = async (filterBy) => {
    this.setState({ filterBy }, await this.props.loadContacts(filterBy))
  }


  render() {
    const { contacts } = this.props
    return (
      <div className="contact-app">
        <section className="edit-bar">       
          <button><Link to="/contact/edit">Add Contact</Link></button>
         <ContactFilter onChangeFilter={this.onChangeFilter} />
          </section>
        <ContactList contacts={contacts} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.contactReducer.contacts
  }
}

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  loadUser
}

export const ContactApp = connect(mapStateToProps, mapDispatchToProps)(_ContactApp)