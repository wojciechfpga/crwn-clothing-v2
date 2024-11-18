import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
import "./navbar.component.scss";
import { Outlet } from "react-router-dom";
import CardIcon from "../../components/card-icon/card-icon.component";
import CartDropDown from "../../components/card-dropdown/card-dropdown.component";
const Navigation = () => {
  const {isCartOpen}=useContext(CartContext)
  return (
    <div>
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/shop" className="navbar__link">
          Shop
        </Link>
        <Link to="/signin" className="navbar__link">
          Sign-in
        </Link>
        <CardIcon/>
       { isCartOpen && <CartDropDown/>}
      </div>
    </nav>
    <Outlet/>
    </div>
  );
};

export default Navigation;
