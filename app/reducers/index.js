export default  (state = { count: 0 }, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    case 'minus':
      return { count: count - 1 }
    default:
      return state
  }
}