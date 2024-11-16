import { createContext,useState } from "react";
import PRODUCTS from "./shop.json"

export const ProductContext=createContext({
    products:[]
})

export const ProductsProvide=({children})=>{
    const [products,setProduts]=useState(PRODUCTS)
    const value={products};
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}