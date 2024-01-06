import {createContext , useState} from "react"

export const NavigationContext = createContext({
    isCartOpen:false,
    setCartOpen:()=>{}
});

export const NavigationProvider = ({children}) =>{
    const [isCartOpen,setCartOpen]=useState()
    const value = {isCartOpen,setCartOpen}
    return(
    <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
    )}

