import { Component } from 'react'
import React from 'react'
import { addMove } from '../../store/actions/userActions'
import { connect } from 'react-redux'

import './TransferFunds.scss'


class _TransferFunds extends Component {

    inputRef = React.createRef()

    state = {
        amount: null
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = +target.value
        this.setState(() => ({ [field]: value } ))
    }
    onAddMove = async (ev, contact) => {
        ev.preventDefault()
        await this.props.addMove( contact, this.state.amount )
        // this.props.history.push('/contact')
    }

    render() {
        const {contact} = this.props
        return (
            <div className="transfer-funds">
                <h1>Make a transfer</h1>
                <form className='contact-edit' onSubmit={(ev)=>this.onAddMove(ev, contact)}>
                    <label htmlFor="amount">Amount</label>
                    <input required ref={this.inputRef} type="number" id="amount" min="1" max={this.props.user.coins} onChange={this.handleChange} name="amount" />
               <button>Submit</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = {
    addMove
}

export const TransferFunds = connect(null, mapDispatchToProps)(_TransferFunds)