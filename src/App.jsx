import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './Home'
import Contact from './Contact'

import './assets/css/index.css'

function App () {
  return (
    <BrowserRouter>
      <header>
        <h1>Bienvenue sur mon application React !</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
