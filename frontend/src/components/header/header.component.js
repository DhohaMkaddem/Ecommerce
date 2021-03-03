import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {hiddenSelector, authSelector} from '../../redux/user/user.selectors'
import UserCart from '../../components/user-cart/user-cart.component'
import { createStructuredSelector } from "reselect";
import { logout } from "../../redux/user/user.actions";


import UserIcon from '../user-icon/user-icon.component'
import './header.style.scss'


const Header = ({hidden, isAuthenticated}) => {


  return (
    <div className="header">
      <Link className="option" to="/home">
        HOME
      </Link>
     
      {isAuthenticated ? (
            
          <div>
          <UserIcon className='option'/>
          {hidden ? (<UserCart />):null}
          </div>
        
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
  hidden : hiddenSelector,
  
});
export default connect(mapStateToProps, { logout })(Header);
