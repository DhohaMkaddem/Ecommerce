import userActionsTypes from './user.types'


const INITIAL_STATE = {
    currentUser:null,
    authError:"",
    isAuthenticated: false,
    hidden:false
}

const userReducer = (state= INITIAL_STATE, action)=>{
    switch (action.type) {
        
    case userActionsTypes.SET_CURRENT_USER:
        {
        return {
            ...state, currentUser:action.payload,
            isAuthenticated: !!Object.keys(action.payload).length
        }
    }

    case userActionsTypes.SET_AUTH_ERROR:
        {
            return {
                ...state, authError:action.payload
            }
        }
    case userActionsTypes.TOGGLE_HIDDEN:
        {
            return {
                ...state, hidden:!state.hidden
            }
        }    
        default:
            return state;
    }
}

export default userReducer;