import { useContext } from "react"
import { ProductContext } from "../../contexts/products.context"
import ProductCard from "../product-card/product-card.component"
import './shop.component.scss';
export default function Shop(){
    const {products}= useContext(ProductContext)
    console.log(products)
    return (
        <div className="product-container">
            {products.map((product) => {
                return (<ProductCard key={product.id} product={product}/>
                )
            })}
        </div>
    )
}
