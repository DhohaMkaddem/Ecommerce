import userActionsTypes from './user.types'


const INITIAL_STATE = {
    currentUser:null,
    authError:"",
    isAuthenticated: false
}

const userReducer = (state= INITIAL_STATE, action)=>{
    switch (action.type) {
        
    case userActionsTypes.SET_CURRENT_USER:
        {
        return {
            ...state, currentUser:action.payload,
            isAuthenticated:  true
        }
    }

    case userActionsTypes.SET_AUTH_ERROR:
        {
            return {
                ...state, authError:action.payload
            }
        }
        default:
            return state;
    }
}

export default userReducer;