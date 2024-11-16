import SHOP_DATA from "./shop.json"
import { useContext } from "react"
import { ProductContext } from "../../contexts/products.context"
import ProductCard from "../product-card/product-card.component"
export default function Shop(){
    const {products}= useContext(ProductContext)
    console.log(products)
    return (
        <div>
            <h1>Welcome to shop</h1>
            {products.map(({id, name}) => {
                return (<ProductCard key={id} product={products}/>
                )
            })}
        </div>
    )
}
