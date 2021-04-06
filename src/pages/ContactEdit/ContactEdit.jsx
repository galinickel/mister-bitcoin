import React, { Component } from 'react'
import { contactService } from '../../services/contactService'

import './ContactEdit.scss'

export class ContactEdit extends Component {

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
        await contactService.save({ ...this.state.contact })
        this.props.history.push('/')
    }
    render() {
        if (!this.state.contact) return <div>{this.state.errMsg || 'Loading'}</div>
        const { name, email, phone } = this.state.contact
        return (
            <form className='contact-edit' onSubmit={this.onSaveContact}>
                <label htmlFor="name">Name</label>
                <input required ref={this.inputRef} required type="text" id="name" value={name} onChange={this.handleChange} name="name" />

                <label htmlFor="email">Email</label>
                <input required type="text" id="email" value={email} onChange={this.handleChange} name="email" />

                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" value={phone} onChange={this.handleChange} name="phone" />

                <p>{this.state.errMsg}</p>
                <button>Save Contact</button>
            </form>
        )
    }
}