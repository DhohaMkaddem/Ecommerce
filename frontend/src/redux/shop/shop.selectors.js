
import {createSelector} from 'reselect'

const shopSelector = state => state.shop;

export const newCollectionSelector = createSelector(
    [shopSelector],
    shop=>shop.itemsPreviewCollections
)

export const isLoadingSelector = createSelector(
    [shopSelector],
    shop=>shop.isLoading
)

export const fetchErrorSelector = createSelector(
    [shopSelector],
    shop=>shop.fetchError
)