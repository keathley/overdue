import React from 'react'
import Router from 'react-router'

import App from './components/App'
import Scanner from './components/Scanner'

export var routes = (
  <Router.Route name="app" path="/" handler={App}>
    <Router.DefaultRoute handler={ Scanner } />
  </Router.Route>
)
