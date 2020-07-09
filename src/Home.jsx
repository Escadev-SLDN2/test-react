import React from 'react'

const Home = props => {
  const tProps = []
  for (const prop in props) {
    tProps.push(`${props[prop]}`)
  }

  const propslist = tProps.map((name, index) => <li key={index}>{name}</li>)

  return <ul>{propslist}</ul>
}

export default Home
