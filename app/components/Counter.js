import React, { Component } from 'react'
import PropTypes from 'prop-types'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onMinusClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>add</button>
        <button onClick={onMinusClick}>minus</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired
}

export default Counter