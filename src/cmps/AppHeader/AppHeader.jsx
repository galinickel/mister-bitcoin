
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Component } from 'react'
import { loadUser } from '../../store/actions/userActions'
import './AppHeader.scss'

class _AppHeader extends Component {
    componentDidMount() {
        this.props.loadUser()
    }

    render() {
        const { user } = this.props
        // console.log(connection);
        return (
            <header className="app-header">
                <div>
                    Hello {user.name}, your balance is balance: {user.coins} bitcoin
                    {/* <small>Online Status: {connection ? <span>On</span> : <span>Offline</span>} </small> */}
                </div>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active-nav">Contacts</NavLink></li>
                    <li><NavLink to="/sign-up" activeClassName="active-nav">Signup</NavLink></li>
                    <li><NavLink to="/statistics" activeClassName="active-nav">Statistics</NavLink></li>
                </ul>
            </header>
        )

    }
}
const mapStateToProps = state => ({
    user: state.userReducer.user
})
const mapDispatchToProps = {
    loadUser
}

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(withRouter(_AppHeader))
