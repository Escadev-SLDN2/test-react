import React from 'react'

class Header extends React.Component {
    render(_props) {
        return(
            <header>
                <h1>Bienvenue sur mon application React, {this.props.prenom} !</h1>
            </header>
        )
    }
}

export default Header