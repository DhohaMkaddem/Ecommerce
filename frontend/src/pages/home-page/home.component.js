import React, { useEffect } from "react";
import { getCollectionByCategory } from "../../redux/shop/shop.actions";
import { newCollectionSelector } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const Home = ({ getCollectionByCategory, newCollectionSelector }) => {
  useEffect(() => {setTimeout(()=>getCollectionByCategory("newItem"), 1000)}, []);

  return (
    <div className="home">
      <h1>home page</h1>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collectionPreview: newCollectionSelector,
});
export default connect(mapStateToProps, { getCollectionByCategory })(Home);
