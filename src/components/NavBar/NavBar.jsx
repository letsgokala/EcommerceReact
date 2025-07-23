import React, {useState , useContext} from 'react'
import './NavBar.css'

import logo from '../Assets/logo.png'; // Adjust the path as necessary
import cart_icon from '../Assets/cart_icon.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';



const NavBar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => {setMenu("shop")}}><Link to="/" style={{textDecoration: 'none'}}>Shop </Link>{menu === "shop"? <hr />:<></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link to="/mens" style={{textDecoration: 'none'}}>Men </Link>{menu === "mens"? <hr />:<></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link to="/womens" style={{textDecoration: 'none'}}>Women </Link> {menu === "womens"? <hr />:<></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link to="/kids" style={{textDecoration: 'none'}}>Kids </Link> {menu === "kids"? <hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login" style={{textDecoration: 'none'}}><button>Login</button></Link>
            <Link to="/cart" style={{textDecoration: 'none'}}><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
              )
}

export default NavBar;
