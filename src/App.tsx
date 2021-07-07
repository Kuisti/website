import React from 'react'
import './App.css'
import Three from './components/three'
import Logo from './components/logo'
import CountDown from './components/countdown'
import WelcomeToEnjoy from './components/WelcomeToEnjoy'

function App() {
  return (
    <div className="App">
      <Three />
      <Logo />
      <WelcomeToEnjoy />
      <CountDown />
    </div>
  )
}

export default App
