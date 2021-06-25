import React from 'react'
import Countdown from 'react-countdown'
import './style.css'

const CountDown = () => {
  return (
    <div className="countdown-container">
      <Countdown date={new Date(1630314300000)} />
    </div>
  )
}

export default CountDown