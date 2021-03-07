import {connect} from 'react-redux'

import {compose} from 'redux'
import {isLoadingSelector} from '../../redux/shop/shop.selectors'
import WithSpinner from '../utils/with-spinner/withSpinner.component'
import {createStructuredSelector} from 'reselect'
import CollectionOverview from './collectionOverview.component'

const mapStateToProps= createStructuredSelector({
isLoading: isLoadingSelector
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer