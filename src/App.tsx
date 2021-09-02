import React from 'react'
import './App.css'
import { Switch, Route, withRouter } from 'react-router-dom'

import Greeting from './slides/greeting'
import SimpleMessenger from './slides/messenger'

function App() {
    return <Switch>
        <Route path='/msg' component={ () => <SimpleMessenger next='/' /> } />
        <Route path='/' component={ () => <Greeting next='msg' /> } />
    </Switch>
}

export default withRouter(App)
