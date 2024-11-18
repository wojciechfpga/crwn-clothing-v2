import './card-icon.component.scss'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CardIcon = () => {
  const {isCartOpen, setIsCartOpen}=useContext(CartContext)
  const toogleIsCartOpen=()=>{setIsCartOpen(!isCartOpen)}
    return (
      <div className="card-icon" onClick={toogleIsCartOpen}>
        <p>Card</p>
      </div>
    );
  };
  export default CardIcon;
  
