import { useContext } from "react";
import { NavigationContext } from "../../context/navigation.context";
import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from './shopping-bag.svg'

const CartIcon = () => {
    const {isCartOpen ,setCartOpen,cartCount} = useContext(NavigationContext)
    const toggleIsCartOpen = ()=>{
        setCartOpen(!isCartOpen)
    }
    return ( 
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen}/>
            <span className="item-count">{cartCount}</span>
        </div>
     );
}
 
export default CartIcon;