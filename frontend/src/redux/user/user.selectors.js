import {createSelector} from 'reselect'

const userSelector = state => state.user;
//current user selector
export const currentUserSelector = createSelector(
    [userSelector],
    user=>user.currentUser 
)


 // is authenticated selector
export const authSelector = createSelector(
    [userSelector],
    user=>user.isAuthenticated
)

// hidden selector
export const hiddenSelector = createSelector(
    [userSelector],
    user=>user.hidden
)

