import React, { Component } from 'react'
import { contactService } from '../../services/contactService'
import { connect } from 'react-redux'

import { saveContact } from '../../store/actions/contactActions'

import './ContactEdit.scss'

class _ContactEdit extends Component {

    inputRef = React.createRef()

    state = {
        contact: null,
        errMsg: ''
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        try {
            const contact = id ? await contactService.getById(id) : contactService.getEmptyContact()
            this.setState({ contact })
        } catch (err) {
            this.setState({ errMsg: 'Contact Not Found' })
        }
        // this.inputRef.current.focus()
        // this.inputRef.current.select()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    onSaveContact = async (ev) => {
        ev.preventDefault()
        await this.props.saveContact({ ...this.state.contact })
        this.props.history.push('/app')
    }
    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading'}</div>
        const { name, email, phone } = this.state.contact
        return (
            <div  className='contact-edit'>
            <form onSubmit={this.onSaveContact}>
                <label htmlFor="name">Name</label>
                <input required ref={this.inputRef}  type="text" id="name" value={name} onChange={this.handleChange} name="name" />
                <label htmlFor="email">Email</label>
                <input required type="text" id="email" value={email} onChange={this.handleChange} name="email" />
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" value={phone} onChange={this.handleChange} name="phone" />
                <p>{this.state.errMsg}</p>
                <button>Save Contact</button>
            </form>
            </div>
        )
    }
}
const mapDispatchToProps = {
    saveContact
}

export const ContactEdit = connect(null, mapDispatchToProps)(_ContactEdit)