
import { Component } from 'react';
import { contactService } from '../../services/contactService'
import './ContactDetails.scss'


export class ContactDetails extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    async loadContact() {
        const contact = await contactService.getById(this.props.selectedContactId)
        this.setState({ contact })
    }

    onTryContact = async () => {
        if (this.state.contact.batteryStatus <= 0) return alert('Contact is dead')
        await contactService.tryContact(this.state.contact._id)
        this.loadContact()
    }
    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading Contact.....</div>
        return (
            <div>
                <img src={contact.picture} alt="" />
                <p>{contact.name}</p>
                <small>{contact.phone}</small>
                <p>Email: {contact.email}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore deleniti quis facere, a rerum, voluptatem vitae iusto possimus voluptatum libero nulla, facilis hic at eligendi molestias. Quasi, corporis repellendus.</p>

                <button onClick={() => this.props.onDeleteContact(contact._id)}>Delete</button>
                <button onClick={this.onTryContact}>Try Me</button>
            </div>
        )
    }
}
