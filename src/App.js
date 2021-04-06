/* eslint-disable no-unused-vars */
import './App.scss';
import { ContactApp } from './pages/ContactApp';
import { StatisticsPage } from './pages/StatisticsPage'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { AppHeader } from './cmps/AppHeader'
import { ContactDetails } from './pages/ContactDetails'
import {ContactEdit} from './pages/ContactEdit'


export function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
        <Route component={ContactEdit} path='/contact/edit/:id?' />
          <Route component={ContactDetails} path="/contact/:id" />
          <Route component={ContactApp} path="/app" />
          <Route component={StatisticsPage} path="/statistics" />
          <Route component={HomePage} path="/" />
        </Switch>
      </Router>
      {/* <ContactApp />
      <StatisticsPage/> */}
    </div>
  );
}

