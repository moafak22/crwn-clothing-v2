import {Link , Outlet} from "react-router-dom"
import { Fragment, useState } from "react";
import "./navbar.styles.scss"
import {ReactComponent as CrwnLogo} from "./crown.svg"
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { NavigationContext } from "../../context/navigation.context";
const NavBar = () => {

  const {isCartOpen}=useContext(NavigationContext)
  const {currentUser} = useContext(UserContext);
    return ( <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
              <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
              <Link className="nav-link" to = '/shop'> SHOP</Link>
              {
                currentUser ? (
                              <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                  ):(<Link className="nav-link" to ='/auth'> Sign In</Link>

                )
              }
              <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet />
      </Fragment> );
}
 
export default NavBar;