
import {createSelector} from 'reselect'

const shopSelector = state => state.shop;

export const newCollectionSelector = createSelector(
    [shopSelector],
    shop=>shop.itemsPreviewCollections
)