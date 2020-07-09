import React from 'react'

import './assets/css/index.css'
import Header from './Header'
import Home from './Home'

function App () {
  return (
    <>
      <Header />
      <Home prenom='Nicolas' nom='Vauché' profession='Formateur' age='43' />
    </>
  )
}

export default App
