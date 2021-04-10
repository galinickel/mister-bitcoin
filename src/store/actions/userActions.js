import { userService } from '../../services/userService.js'
export function spendBalance(spendAmount) {
  return async dispatch => {
    // Update the userService
    dispatch({ type: 'SPEND_BALANCE', spendAmount })
  }
}

export function setUser(user) {
  return async dispatch => {
    const loggedinUser = userService.signup(user)
    dispatch({ type: 'SET_USER', user: loggedinUser })
  }
}
export function loadUser() {
  return async dispatch => {
    const user= await userService.getUser()
    const action={
      type:'SET_USER',
      user
    }
    dispatch(action)
  }
}

export function addMove(contact, amount){
  return async dispatch => {
    const user = await userService.addMove(contact, amount)
    const action = {
      type: 'SET_USER',
      user
    }
    dispatch(action)
  }
}