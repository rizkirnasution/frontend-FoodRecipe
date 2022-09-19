import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import recipe from './recipe'
import category from './category'
import video from './video'
import profile from './profile'
import liker from './liker'
import bookmark from './bookmark'

const mainReducer = {
    auth,
    recipe,
    category,
    video,
    profile,
    liker,
    bookmark
}
const appReducer = combineReducers(mainReducer)
const rootReducer = (state, action) => {
    if (action.type === 'logout/auth/fulfilled') {
        state = {}
        localStorage.clear()
    }

    return appReducer(state, action)
}

export default rootReducer
