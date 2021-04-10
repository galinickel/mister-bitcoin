const INITIAL_STATE = {
  user: { name: 'Guest', balance: 0 }
}
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SPEND_BALANCE':
      return {
        ...state,
        user: { ...state.user, balance: state.user.coins - action.spendAmount }
      }
    default:
      return state
  }
}