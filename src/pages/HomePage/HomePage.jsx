import { Component } from 'react'
import { userService } from '../../services/userService.js'
import { bitcoinService } from '../../services/bitcoinService.js'
import './HomePage.scss'

export class HomePage extends Component {
    user = userService.getUser()
    state = {
        bitcoinRate: null
    }
    async getBitcoinRate() {
        const bitcoin = await bitcoinService.getRate(this.user.coins)
        this.setState({ bitcoinRate: bitcoin })
    }
    componentDidMount() {
        this.getBitcoinRate()
    }
    render() {

        return (
            <div>
                <h3>Hello {this.user.name}</h3>
                <p>Balance: {this.user.coins} | Bitcoin: {this.state.bitcoinRate}</p>
            </div>
        )
    }
}