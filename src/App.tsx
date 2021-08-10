import React from 'react'
import './App.css'
import { Switch, Route, withRouter } from 'react-router-dom'

import Greeting from './slides/greeting'

function App() {
    return <Switch>
        <Route path='/' component={ () => <Greeting next='set' /> } />
        <Route path='/set' component={ () => <Greeting next='/' /> } />
    </Switch>
}

export default withRouter(App)
