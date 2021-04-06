
import { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './AppHeader.scss'

const _AppHeader= (props)=>  {

        return (
            <header className="app-header">
            <ul>
                <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
            <li><NavLink to="/app" activeClassName="active-nav">Contacts</NavLink></li>
                <li><NavLink to="/statistics" activeClassName="active-nav">Statistics</NavLink></li>
            </ul>
            </header>
        )

}

export const AppHeader = withRouter(_AppHeader)
