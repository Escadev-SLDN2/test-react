import React from 'react'

import Home from './Home'
import Contact from './Contact'

import './assets/css/index.css'

function App () {
  return (
    <>
      <header>
        <h1>Bienvenue sur mon application React !</h1>
        <nav>
          <ul>
            <li>
              <a href=''>Accueil</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default App
