import {createSelector} from 'reselect'

const userSelector = state => state.user;

export const currentUserSelector = createSelector(
    [userSelector],
    user=>user.currentUser 
)



export const authSelector = createSelector(
    [userSelector],
    user=>user.isAuthenticated
)

export const hiddenSelector = createSelector(
    [userSelector],
    user=>user.hidden
)