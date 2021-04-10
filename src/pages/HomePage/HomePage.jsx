import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService.js'
import { Player } from '@lottiefiles/react-lottie-player';
import { loadUser } from '../../store/actions/userActions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Moment from 'react-moment';

import './HomePage.scss'

class _HomePage extends Component {

    state = {
        bitcoinRate: null
    }
    async getBitcoinRate() {
        const bitcoin = await bitcoinService.getRate(this.props.user.coins)
        this.setState({ bitcoinRate: bitcoin })
    }
    componentDidMount() {
        this.props.loadUser()

        this.getBitcoinRate()
    }
    movesToShow() {
        const { user } = this.props
        var movesToShow = []
        if (user.moves.length > 3) {
            for (let i = user.moves.length - 3; i < user.moves.length; i++) {
                const move = user.moves[i]
                movesToShow.push([<section className="home-move">
                    <p key={move.to}>To: {move.to}</p>
                    <p key={move.amount}>Transferred {move.amount} coins</p>
                    <p key={move.at}>  <Moment fromNow date={move.at} />
                    </p>
                    </section>])
            }
        }
        else {
            movesToShow = user.moves.map(move => {
                return [<section className="home-move">
                    <p key={move.to}>To: {move.to}</p>
                    <p key={move.amount}>Transferred {move.amount} coins</p>
                    <p key={move.at}>  <Moment fromNow date={move.at} /></p>
                    </section> ]
            })
        }
        return movesToShow
    }
    render() {

        const { user } = this.props
        return (
            <div className="home-page">
                <section className="hero-container">
                    <h2>Manage your bitcoin transfers</h2>
                    <Player
                        autoplay
                        className="home-hero"
                        loop
                        src="https://assets9.lottiefiles.com/packages/lf20_x4zTKW.json"
                    />
                    {!user._id && <section>
                        <h3>As a guest, your actions are limited.</h3>
                        <p>Sign in now to manage your bitcoin transfers easily and effectively!</p>
                    </section>}
                    {user._id && <section>
                        <h3>Hello {user.name}</h3>
                        <p>Balance: {user.coins} | Bitcoin: {this.state.bitcoinRate}</p>
                        <section className="homepage-movelist">
                            <h2>Your Recent Moves</h2>
                            <section className="moves-container">{this.movesToShow()}</section>
                            
                        </section>
                    </section>}
                </section>
                <section className="homepage-section contacts">
                    <h1>All your contacts, brought together.</h1>
                    <p>Mister Bitcoin helps you gather and manage your contacts and track your transactions.</p>
                    <p>With highly detailed contact-profiles and a display of your transactions towards them, you'll never lose track of your important transactions!</p>
                </section>
                <section className="homepage-section wallet">
                    <h1>Keep track of your bitcoin balance.</h1>
                    <p>Make your transactions directly and keep track of your balance- no middle-men, no additional fees.</p>
                    <p>By registering your account with Mister Bitcoin, you also gain access to a personalized statistics page, where you'll always have the most recent global-market data on bitcoin rates and value.</p>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.userReducer.user
})
const mapDispatchToProps = {
    loadUser
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withRouter(_HomePage))