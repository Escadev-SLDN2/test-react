import React, { Component } from 'react'

class Header extends Component {
  constructor (props) {
    // Récupération des props
    super(props)

    // Création du state
    this.state = {
      prenom: 'Nicolas',
      nom: 'Vauché',
      profession: 'ostréïculteur dans les Alpes'
    }
  }

  handleChangeFirstname = () => {
    this.setState({
      prenom: this.changeFirstname.value
    })
  }

  handleChangeLastname = () => {
    this.setState({
      nom: this.changeLastname.value
    })
  }

  handleChangeProfession = () => {
    this.setState({
      profession: this.changeProfession.value
    })
  }

  render () {
    return (
      <header>
        <h1>Bienvenue sur mon app, {this.props.prenom} !</h1>
        <div className='infos'>
          
          <p>
            {this.state.prenom} {this.state.nom}, {this.state.profession}
          </p>

          <p>
            <input type='text' ref={input => (this.changeFirstname = input)} />
            <button onClick={this.handleChangeFirstname}>Changer le prénom</button>
          </p>

          <p>
            <input type='text' ref={input => (this.changeLastname = input)} />
            <button onClick={this.handleChangeLastname}>Changer le nom</button>
          </p>

          <p>
            <input type='text' ref={input => (this.changeProfession = input)} />
            <button onClick={this.handleChangeProfession}>Changer la profession</button>
          </p>
          
        </div>
      </header>
    )
  }
}

export default Header
