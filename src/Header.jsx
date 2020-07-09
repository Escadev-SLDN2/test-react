import React, { Component } from 'react'

class Header extends Component {
  constructor (props) {
    // Récupération des props
    super(props)

    // Création du state
    this.state = {}
  }

  render () {
    return (
      <header>
        <h1>Bienvenue sur mon app, {this.props.prenom} !</h1>
      </header>
    )
  }
}

export default Header
