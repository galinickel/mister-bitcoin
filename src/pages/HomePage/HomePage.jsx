import { Component } from 'react'
import { userService } from '../../services/userService.js'
import { bitcoinService } from '../../services/bitcoinService.js'
import { Player } from '@lottiefiles/react-lottie-player';

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
                <Player
  autoplay
  loop
  src="https://assets9.lottiefiles.com/packages/lf20_x4zTKW.json"
  style={{ height: '600px', width: '600px' }}
/>
                <p>Balance: {this.user.coins} | Bitcoin: {this.state.bitcoinRate}</p>
            </div>
        )
    }
}