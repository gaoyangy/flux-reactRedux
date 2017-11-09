import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Counter from './components/Counter'
import counter from './reducers/index'
import action from './action/index'
// Store
const store = createStore(counter)

// Connected Component
const App = connect(
  action.mapStateToProps,
  action.mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)