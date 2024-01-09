import Button from "../button/button.component";
import "./product-card.styles.scss"
import { useContext } from "react";
import { NavigationContext } from "../../context/navigation.context";


const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;

    const {addItemToCart} = useContext(NavigationContext)
    const addProductToCart = () => addItemToCart(product);



    return ( 
        <div className="product-card-container">
            <img className="img" src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>

        </div>
     );
}
 
export default ProductCard;