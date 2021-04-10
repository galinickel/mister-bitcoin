import { Component } from 'react'
import { connect } from 'react-redux';
import './SignupPage.scss'
import { setUser, loadUser } from '../../store/actions/userActions'

class _SignupPage extends Component {

    state = {
        user: {
            name: '',
            coins: null
        }
    }
    componentDidMount() {
        this.props.loadUser()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ user: { [field]: value } })
    }
    onSaveUser = async (ev) => {
        if(!this.state.user.name) await this.props.setUser({name:'Guest',coins:0})
        else{
            ev.preventDefault()
            await this.props.setUser({ ...this.state.user })
            this.props.history.push('/')
        }
    }

    render() {
        const { user } = this.props
        return (
            <div className="signup-page">
                {user._id && <section>
                <h3>Hello {user.name}</h3>
                <button onClick={this.onSaveUser}>Logout</button>
                </section>}
                {!user._id && <section>
                    <h2>Please enter your name</h2>
                    <form onSubmit={(ev) => this.onSaveUser(ev)}>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" name="name" placeholder="" value={this.state.name} onChange={this.handleChange} />
                        <button>Sign up</button>
                    </form>
                </section>}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {
    setUser,
    loadUser
}

export const SignupPage = connect(mapStateToProps, mapDispatchToProps)(_SignupPage)