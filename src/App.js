import React, { Component } from 'react'
import Logo from './components/lg'
import Navbar from './components/Navbar'
import News from './components/News'

export class App extends Component {
  render() {
    return (
      <>
        <Logo />
        <Navbar />
        <News />
      </>
    )
  }
}

export default App

