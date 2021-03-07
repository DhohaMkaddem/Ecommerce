import React, { useEffect } from "react";
import { getCollectionByCategory } from "../../redux/shop/shop.actions";
import { newCollectionSelector } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionOverviewContainer from '../../components/collection-overview/colectionOverview.container'


const Home = ({ getCollectionByCategory }) => {

  useEffect(()=> {getCollectionByCategory('hats')}, []);

  return (
    <div className="home">
      <h1>home page</h1>
      <CollectionOverviewContainer/>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collectionPreview: newCollectionSelector,
});
export default connect(mapStateToProps, { getCollectionByCategory })(Home);
