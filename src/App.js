import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { ContactApp } from './pages/ContactApp';
import { ContactDetails } from './pages/ContactDetails/ContactDetails';
import { ContactEdit } from './pages/ContactEdit';
import { HomePage } from './pages/HomePage/HomePage'
import { SignupPage } from './pages/SignupPage/SignupPage';
import { StatisticsPage } from './pages/StatisticsPage/StatisticsPage'
import { Component } from 'react'
import { loadUser } from './store/actions/userActions'
import { checkConnection } from './store/actions/contactActions'
import { connect } from 'react-redux'

class _App extends Component {
  state = {
    connection: null
  }
  async componentDidMount() {
    await this.props.loadUser()
    this.props.checkConnection()
    // store.subscribe(() => {
    //   this.setState({ connection: store.getState().contactReducer.connection })
    // })
  }

  componentDidUpdate(){
    // this.props.checkConnection()

  }
  render() {
    const { user } = this.props
    const PrivateRoute = (props) => {
      return props.user._id ? <Route component={props.component} path={props.path} /> : <Redirect to="/sign-up" />
    }

    return (
      <Router>
        <div className="App">
          <AppHeader connection={this.state.connection} />
          <Switch>
            <PrivateRoute component={ContactEdit} user={user} path='/contact/edit/:id?' />
            <PrivateRoute component={ContactDetails} user={user} path='/contact/:id' />
            <PrivateRoute component={StatisticsPage} user={user} path='/statistics' />
            <PrivateRoute component={ContactApp} user={user} path='/contact' />
            <Route component={SignupPage} path='/sign-up' />
            <Route component={HomePage} path='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    connection: state.contactReducer.connection
  }
}

const mapDispatchToProps = {
  loadUser,
  checkConnection
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)