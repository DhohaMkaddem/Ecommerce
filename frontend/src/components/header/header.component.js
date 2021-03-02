import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { logout } from "../../redux/user/user.actions";
import { authSelector } from "../../redux/user/user.selectors";
import {withRouter} from 'react-router-dom'
const Header = ({ isAuthenticated, logout, history }) => {
const signOut = ()=> {
logout();
history.push('/home')
} 

  return (
    <div className="header">
      <Link className="option" to="/home">
        HOME
      </Link>
      {isAuthenticated ? (
        <button className="option" onClick={signOut}>
          logout
        </button>
      ) : (
        <Link className="option" to="/users/login">
          LOGIN
        </Link>
      )}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  isAuthenticated: authSelector,
});
export default withRouter(connect(mapStateToProps, { logout })(Header));
