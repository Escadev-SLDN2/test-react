import React from 'react'

import './assets/css/index.css'
import Header from './Header'
import Home from './Home'

const App = () => {
  return (
    <>
      <Header />
      <Home prenom='Nicolas' nom='Vauché' profession='Formateur' />
    </>
  )
}

export default App
