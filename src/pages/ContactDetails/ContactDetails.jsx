import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoveList } from '../../cmps/MoveList/MoveList';
import { TransferFunds } from '../../cmps/TransferFunds/TransferFunds';
import { getContactById, removeContact, tryContact, chargeContact } from '../../store/actions/contactActions';

import './ContactDetails.scss'

class _ContactDetails extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {
        await this.props.getContactById(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getContactById(this.props.match.params.id)
        }
    }

    onRemoveContact = async () => {
        await this.props.removeContact(this.props.contact._id)
        this.onBack()
    }

    onBack = () => {
        this.props.history.goBack()
    }

    render() {
        const { contact, user } = this.props
        if (!contact) return <div>Loading Contact.....</div>
        return (
            <div className="details">
                <button className="back-btn" onClick={this.onBack}>Back</button>
                <section className="contact-details">
                    <section className="contact-container">
                        <img src={contact.picture} alt="" />

                    <section className="contact-info">
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                    </section></section>
                    <section className="buttons-container">
                    <button onClick={this.onRemoveContact}>Delete</button>
                    <button><Link to={'/contact/edit/' + contact._id}>Edit</Link></button>
                    </section>
                    <section className="actions-container">
                    <TransferFunds user={user} contact={contact} />
                    <MoveList user={user} contact={contact} />
                    </section>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contact: state.contactReducer.currContact,
    user: state.userReducer.user
})

const mapDispatchToProps = {
    getContactById,
    removeContact,
    tryContact,
    chargeContact
}

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)