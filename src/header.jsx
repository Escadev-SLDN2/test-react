import React from 'react'

class Header extends React.Component {

    state = {   
        prenom:     "test",
        nom:        "blabla",
        profession: "blablabla",
    }

    clickHandler = (event) => {
        this.setState({prenom: "test2" })
    }

    render(_props) {
        return(
            <header>
                <h1>Bienvenue sur mon application React, {this.props.prenom} !</h1>
                <p>
                    {this.state.prenom} {this.state.nom}, {this.state.profession}
                    <button onClick={this.clickHandler}>change prenom</button>
                </p>
            </header>
        )
    }
}

export default Header