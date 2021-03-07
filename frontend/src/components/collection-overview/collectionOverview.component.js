import React from 'react'
import './collectionOverview.style.scss'
import {newCollectionSelector} from '../../redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import ItemCart from '../item-cart/item-cart.component'
const CollectionOverview = ({
    collection,
}) => {
    return(
        <div className='collection-overview'>
    {collection.map(item=>(<ItemCart key={item.id} item={item}/>))}
        </div>)
}
   


const mapStateToProps = createStructuredSelector({
    collection: newCollectionSelector
})
export default connect(mapStateToProps)(CollectionOverview)