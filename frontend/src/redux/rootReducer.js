import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'
import shopReducer from './shop/shop.reducer'



const rootReducer = combineReducers({
    user: userReducer,
    shop:shopReducer
})

export default rootReducer;