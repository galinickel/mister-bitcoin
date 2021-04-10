import { storageService } from './storageService.js'
// import {httpService} from './http.service'
import { makeId } from './utilService.js'

export const userService = {
    getUser,
    signup,
    addMove
}

const USER_KEY = 'user'
function getUser() {
    let user = storageService.load(USER_KEY)
    if (!user) user = { name: 'Guest', coins: 0 }
    storageService.store(USER_KEY, user)
    return user
}

function signup(user) {
    if (user.name !== 'Guest') {
        user._id = makeId()
        user.moves = []
        user.coins = 100
    }
    storageService.store(USER_KEY, user)
    return user
}

function addMove(contact, amount) {
    const move ={
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    }
    var user = getUser()
    user.coins = user.coins-amount
    if(user.coins < 0) return 
    user.moves.push(move)
    storageService.store(USER_KEY, user)
    return user
}