import React from 'react'

function Home (props) {
  return (
    <ul>
      <li>{props.prenom}</li>
      <li>{props.nom}</li>
      <li>{props.profession}</li>
    </ul>
  )
}

export default Home
