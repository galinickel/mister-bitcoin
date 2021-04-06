import { Component } from 'react'

import './ContactFilter.scss'

export class ContactFilter extends Component {
    state = {
        phone: '',
        name: '',
    }
    handleChange = ({ target }) => {
        const field = target.name
        // const value = target.type === 'number' ? +target.value : target.value
        const value = target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }
    render() {
        const { phone, name } = this.state
        return (
            <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="name">name</label>
                <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />

                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" value={phone} onChange={this.handleChange}  />
            </form>
        )
    }
}