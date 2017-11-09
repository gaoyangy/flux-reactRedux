import { createStore } from 'redux'
// Action
const actionMap = {
  increaseAction:{ type: 'increase' },
  minusAction:{type: 'minus'}
}

const actions = {
  // Map Redux state to component props
   mapStateToProps(state) {
    return {
      value: state.count
    }
  },
  // Map Redux actions to component props
  mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick: () => dispatch(actionMap.increaseAction),
      onMinusClick:() => dispatch(actionMap.minusAction)
    }
  }
}
export default actions