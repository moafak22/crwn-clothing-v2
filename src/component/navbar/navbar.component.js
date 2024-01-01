import {Link , Outlet} from "react-router-dom"
import { Fragment } from "react/cjs/react.production.min";
import "./navbar.styles.scss"
import {ReactComponent as CrwnLogo} from "./crown.svg"
const NavBar = () => {
    return ( <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
              <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
              <Link className="nav-link" to = '/shop'> SHOP</Link>
              <Link className="nav-link" to = '/auth'> Sign In</Link>
            </div>
        </div>
        <Outlet />
      </Fragment> );
}
 
export default NavBar;