import { createContext, useState , useEffect} from "react"


export const addCartItem = (cartItems,productToAdd )=>{
    console.log('cartitems ', cartItems)
    console.log('productToAdd ', productToAdd)
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )
    if (existingCartItem){
        return cartItems.map( (cartItem) => 
        cartItem.id === productToAdd.id 
            ?{...cartItem,quantity:cartItem.quantity +1}:cartItem);
    }
    return [...cartItems,{...productToAdd,quantity:1}]
    
}


export const NavigationContext = createContext({
    isCartOpen: false,
    setCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
});

export const NavigationProvider = ({ children }) => {

    const [isCartOpen, setCartOpen] = useState()
    const [cartItems, setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0); 
    
    
    useEffect(()=>{ 

        const newCartCount = cartItems.reduce((total, cartItem)=>total+cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])
    const addItemToCart = (productToAdd) => {
        setCartItems (addCartItem(cartItems,productToAdd))
    }
    const value = { isCartOpen, setCartOpen ,addItemToCart,cartItems,cartCount}
    return (
        <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
    )
}

